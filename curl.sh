# /
curl localhost:3000 | json_pp
# /users 
curl localhost:3000/users | json_pp
# /register
curl -X POST http://localhost:3000/register -H "Content-Type: application/json" -d '{"name": "monique","fullName": "Monique G A","nickName": "nique2013","email": "nique2013@mail.com","password": "123456789"}' | json_pp
# /auth
curl -X POST http://localhost:3000/auth -H "Content-Type: application/json" -d '{"email": "nique2013@mail.com","password": "123456789"}' | json_pp
