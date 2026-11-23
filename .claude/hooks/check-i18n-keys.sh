#!/bin/bash
# PostToolUse hook: after editing a messages file, check that es.json and en.json have the same keys.
f=$(jq -r '.tool_input.file_path // .tool_response.filePath // empty')

case "$f" in
	"$CLAUDE_PROJECT_DIR"/messages/es.json | "$CLAUDE_PROJECT_DIR"/messages/en.json) ;;
	*) exit 0 ;;
esac

cd "$CLAUDE_PROJECT_DIR/messages" || exit 0
keys() { jq -r '[paths(scalars) | map(tostring) | join(".")] | .[]' "$1" | sort; }

for file in es.json en.json; do
	if ! jq empty "$file" 2>/dev/null; then
		echo "messages/$file is not valid JSON." >&2
		exit 2
	fi
done

missing_en=$(comm -23 <(keys es.json) <(keys en.json))
missing_es=$(comm -13 <(keys es.json) <(keys en.json))

if [ -n "$missing_en$missing_es" ]; then
	[ -n "$missing_en" ] && printf 'Keys missing in messages/en.json:\n%s\n' "$missing_en" >&2
	[ -n "$missing_es" ] && printf 'Keys missing in messages/es.json:\n%s\n' "$missing_es" >&2
	exit 2
fi
