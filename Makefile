.PHONY: install dev build start clean

dev:
	npm run dev

docker-build:
	docker build -t next-redux-app .

docker-up:
	docker run -p 3000:3000 next-redux-app

docker-down:
	docker stop 05b34e253c66ebf50c2b7e97674a926af1f2000956da3e6a30ed082cdbe3b12c

docker-up-v:
	docker run -p 3000:3000 -v $(pwd):/app -w /app next-redux-app npm run dev
