#!/bin/bash

# Ensure we are in the correct directory
cd "$(dirname "$0")"

# Fetch the milestone number
milestone_response=$(curl -s -H "Authorization: token $GITHUB_TOKEN" \
  "https://api.github.com/repos/$REPO/milestones")

# Log the response for debugging
echo "Milestone response: $milestone_response"

milestone_number=$(echo "$milestone_response" | \
  jq -r --arg title "$MILESTONE_TITLE" '.[] | select(.title == $title) | .number')

# Check if milestone_number is empty
if [ -z "$milestone_number" ]; then
  echo "Error: Milestone with title '$MILESTONE_TITLE' not found."
  exit 1
fi

echo "Milestone number: $milestone_number"

# Fetch PRs associated with the milestone
prs_response=$(curl -s -H "Authorization: token $GITHUB_TOKEN" \
  "https://api.github.com/repos/$REPO/pulls?state=closed&per_page=100")

# Log the response for debugging
echo "PRs response: $prs_response"

# Check if prs_response is 
