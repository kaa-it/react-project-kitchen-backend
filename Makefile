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