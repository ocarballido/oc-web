#!/bin/bash
# PostToolUse hook: format the edited file with the repo's Prettier config.
f=$(jq -r '.tool_input.file_path // .tool_response.filePath // empty')

case "$f" in
	"$CLAUDE_PROJECT_DIR"/*) ;;
	*) exit 0 ;;
esac
[ -f "$f" ] || exit 0

# Syntax errors are left for ESLint to report, so a failed format is not an error here.
cd "$CLAUDE_PROJECT_DIR" || exit 0
npx --no-install prettier --write --ignore-unknown "$f" >/dev/null 2>&1 || true
