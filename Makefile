install:
	npm install

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .


asc:
	asciinema rec
	