.PHONY: install dev build start clean

dev:
	npm run dev

build:
	docker build -t next-redux-app .

up:
	docker run -p 3000:3000 next-redux-app

down:
	docker stop 05b34e253c66ebf50c2b7e97674a926af1f2000956da3e6a30ed082cdbe3b12c

up-v:
	docker run -p 3000:3000 -v $(shell pwd):/app -w /app next-redux-app npm run dev

web:
	docker exec -it 5e12fb810ca4fd914a7a19cc9fff635eae6cf87dfd1fc9a73aef72d3dfff530a sh