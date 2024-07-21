#!/bin/bash

# Fetch the milestone number
milestone_number=$(curl -s -H "Authorization: token $GITHUB_TOKEN" \
  "https://api.github.com/repos/$REPO/milestones" | \
  jq -r --arg title "$MILESTONE_TITLE" '.[] | select(.title == $title) | .number')

# Fetch PRs associated with the milestone
prs=$(curl -s -H "Authorization: token $GITHUB_TOKEN" \
  "https://api.github.com/repos/$REPO/pulls?state=closed" | \
  jq -r --arg milestone_number "$milestone_number" '[.[] | select(.milestone.number == ($milestone_number|tonumber))]')

# Format the release note
release_date=$(date +"%A, %B %d, %Y")
release_note=":atlan: Release preparation announcement!\n"
release_note+="Planned release date: $release_date\n"
release_note+="Change-log:\n"

for pr in $(echo "$prs" | jq -c '.[]'); do
  pr_title=$(echo "$pr" | jq -r '.title')
  pr_number=$(echo "$pr" | jq -r '.number')
  pr_author=$(echo "$pr" | jq -r '.user.login')
  pr_url=$(echo "$pr" | jq -r '.html_url')
  pr_body=$(echo "$pr" | jq -r '.body')

  # Extract Jira tickets
  jira_urls=$(echo "$pr_body" | grep -oP 'https://atlanhq\.atlassian\.net/browse/[A-Z0-9-]+')

  # Prepare links
  links="[GitHub]($pr_url)"
  if [ -n "$jira_urls" ]; then
    links+=", [Jira]($jira_urls)"
  fi

  release_note+="$pr_title ($pr_number)\n"
  release_note+="Author: $pr_author\n"
  release_note+="Links: $links\n\n"
done

echo -e "$release_note"
