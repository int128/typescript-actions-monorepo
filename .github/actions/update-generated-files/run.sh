#!/bin/bash
set -o pipefail
set -eux

status="$(git status --porcelain)"
if [ -z "$status" ]; then
  exit 0
fi

if [[ ${GITHUB_EVENT_NAME} != pull_request ]]; then
  : ERROR: need to regenerate files manually
  exit 1
fi

git config user.name 'github-actions[bot]'
git config user.email '41898282+github-actions[bot]@users.noreply.github.com'
git add .
git status
git commit -m update-generated-files
git push origin "${GITHUB_HEAD_REF}"
