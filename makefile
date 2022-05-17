setup:
	npm i && sudo docker-compose up -d && npx prisma migrate dev && echo "\n Setup Concluido ...\n" && echo "\n digite [ make prod ] para rodar...\n"
up:
	npm run dev
prod:
	npm run build && npm start
migrate: 
	npx prisma migrate dev --name init