#!/bin/bash
# PostToolUse hook: format, lint and check i18n keys for the edited file.
# Steps run one after another so none reads a file another is still writing.
input=$(cat)
dir=$(dirname "$0")
status=0

for step in format-file.sh lint-file.sh check-i18n-keys.sh; do
	echo "$input" | "$dir/$step" || status=$?
done

exit $status
