#!/bin/bash

# Ensure we are in the correct directory
cd "$(dirname "$0")"

# Debug: Log repository, milestone number, and milestone title
echo "Repository: $REPO"
echo "Milestone Number: $MILESTONE_NUMBER"
echo "Milestone Title: $MILESTONE_TITLE"

# Fetch PRs associated with the milestone
prs_response=$(curl -s -H "Authorization: token $GITHUB_TOKEN" \
  "https://api.github.com/repos/$REPO/issues?milestone=$MILESTONE_NUMBER&state=closed")

# Log the response for debugging
echo "PRs response: $prs_response"

# Check if prs_response is empty or invalid
if [ -z "$prs_response" ] || ! echo "$prs_response" | jq empty > /dev/null 2>&1; then
  echo "Error: Invalid or empty PRs response."
  exit 1
fi

prs=$(echo "$prs_response" | jq -r '.[] | select(.pull_request)')

# Check if prs is empty
if [ -z "$prs" ]; then
  echo "No PRs found for milestone number $MILESTONE_NUMBER."
  exit 1
fi

# Format the release note
release_date=$(date +"%A, %B %d, %Y")
release_n
