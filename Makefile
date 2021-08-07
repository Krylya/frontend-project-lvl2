# Makefile
install-deps:
	npm ci

publish:
	npm publish --dry-run

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

gendiff:
	node bin/gendiff.js

lint:
	npx eslint .

.PHONY: test
