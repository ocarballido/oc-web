#!/bin/bash
# PostToolUse hook: lint the edited file and feed any ESLint problems back to Claude.
f=$(jq -r '.tool_input.file_path // .tool_response.filePath // empty')

case "$f" in
	"$CLAUDE_PROJECT_DIR"/*.ts | "$CLAUDE_PROJECT_DIR"/*.tsx | "$CLAUDE_PROJECT_DIR"/*.mjs) ;;
	*) exit 0 ;;
esac
[ -f "$f" ] || exit 0

cd "$CLAUDE_PROJECT_DIR" || exit 0
if ! out=$(npx --no-install eslint --max-warnings=0 "$f" 2>&1); then
	echo "ESLint problems in $f:" >&2
	echo "$out" >&2
	exit 2
fi
