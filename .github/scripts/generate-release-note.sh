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

# Extract PRs from the response
prs=$(echo "$prs_response" | jq -c '.[] | select(.pull_request != null)')

# Check if prs is empty
if [ -z "$prs" ]; then
  echo "No PRs found for milestone number $MILESTONE_NUMBER."
  exit 1
fi

# Initialize the release note
release_date=$(date +"%A, %B %d, %Y")
release_note=":atlan: Release preparation announcement!\n"
release_note+="Planned release date: $release_date\n"
release_note+="Change-log:\n"

# Loop through the PRs
echo "$prs" | while read -r pr; do
  pr_title=$(echo "$pr" | jq -r '.title')
  pr_number=$(echo "$pr" | jq -r '.number')
  pr_author=$(echo "$pr" | jq -r '.user.login')
  pr_url=$(echo "$pr" | jq -r '.pull_request.html_url')
  pr_body=$(echo "$pr" | jq -r '.body')

  # Extract Jira tickets
  jira_urls=$(echo "$pr_body" | grep -oP 'https://atlanhq\.atlassian\.net/browse/[A-Z0-9-]+')

  # Prepare links
  links="[GitHub]($pr_url)"
  if [ -n "$jira_urls" ]; then
    jira_links=$(echo "$jira_urls" | tr '\n' ', ')
    jira_links=${jira_links%, } # Remove the trailing comma and space
    links+=", [Jira]($jira_links)"
  fi

  release_note+="$pr_title ($pr_number)\n"
  release_note+="Author: $pr_author\n"
  release_note+="Links: $links\n\n"
done

# Save the release note to a file
echo -e "$release_note" > ../release-note.txt
echo "Release note generated and saved to release-note.txt"
