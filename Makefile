.PHONY: dist push

VERSION := 1.0.1

build:
	docker-compose build
run:
	make build
	docker-compose up -d
start:
	docker-compose up -d
stop:
	docker-compose down

debug_up:
	docker-compose -f docker-compose-debug.yml up -d

debug_down:
	docker-compose -f docker-compose-debug.yml down

dist:
	docker build -t "cosmicteam:${VERSION}" ./
	docker tag "cosmicteam:${VERSION}" "akruglov/cosmicteam:${VERSION}"
	docker tag "cosmicteam:${VERSION}" "akruglov/cosmicteam:latest"

push: dist
	docker login
	docker image push "akruglov/cosmicteam:${VERSION}"
	docker image push "akruglov/cosmicteam:latest"