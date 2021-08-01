# Makefile
install-deps:
	npm ci
publish:
	npm publish --dry-run
tmp:
	echo 'Hello'
gendiff:
	node bin/gendiff.js
