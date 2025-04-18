#!/bin/bash

# This script determines the version bump type (major, minor, patch)
# based on commits since the latest tag.

# Input: The latest tag is passed as the first argument
latest_tag=$1

# Fetch commit messages since the latest tag
git log "${latest_tag}"..HEAD --pretty=format:"%s" > commit_messages.txt

# Initialize flags
major_bump="false"
minor_bump="false"

# Process commit messages
while IFS= read -r line; do
  if echo "$line" | grep -Ei "from atlanhq/(staging|main-staging)"; then
    major_bump="true"
  elif [ -n "$line" ]; then
    # Any non-empty commit message (e.g., squash merges or other commits)
    minor_bump="true"
  fi
done < commit_messages.txt

# Determine version type
if [ "$major_bump" == "true" ]; then
  version_type="major"
elif [ "$minor_bump" == "true" ]; then
  version_type="minor"
else
  version_type="patch" # Default to patch if no significant changes are found
fi

# Output the determined version type
echo "$version_type"