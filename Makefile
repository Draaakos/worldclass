.PHONY: init db-recreate tests loadmock build-front deploy

version = latest

init: node_modules
	pip install -r requirements.txt
	cp server/dev.txt server/dev.py
	$(MAKE) db-recreate

node_modules:
	npm ci --no-optional

db-recreate:
	-rm ./db.sqlite3
	python manage.py makemigrations web
	python manage.py migrate
	python manage.py createsuperuser --username admin --email admin@mailinator.com

tests:
	python manage.py test api.tests


build-front:
	export NODE_ENV=production; \
	sh ./bin/copy-assets.sh && \
	./node_modules/.bin/stylus --compress ./front/css/*-page.styl --out ./static/css/. && \
	./node_modules/.bin/webpack --progress

deploy:
	docker build -t "drakosddos/controlworldclass:v$(version)" .
	docker push "drakosddos/controlworldclass:v$(version)"
	# git tag $(version)
	# git push --tags
