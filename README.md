# movies-explorer-api
## Дипломный проект
Веб-сервис по поиску фильмом, созданный в рамках сдачи диплома на курсе Веб-разработчик в Яндекс Практикум. Сервис позволяет искать фильмы, сохранять и удалять их в личном кабинете.

### Структура проекта
 - Movie backend
 - Movie frontend

 #### API
- POST /signup — регистрация пользователя (name, email и password)
- POST /signin — авторизация пользователя (email и password, возвращает jwt)
- GET /users/me — возвращает информацию о пользователе (email и имя)
- PATCH /users/me — обновляет информацию о пользователе (email и имя)
- GET /movies — возвращает все сохранённые текущим пользователем фильмы
- POST /movies — создаёт фильм (country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail и movieId)
- DELETE /movies/_id — удаляет сохранённый фильм по id
  
  #### Технологии

- сервер на Ubuntu в Яндекс.Облаке
- API сервер Node.js + Express.js
- база данных MongoDB + Mongoose
- валидация данных Celebrate, Validator
- безопасность данных Bcrypt, Jsonwebtoken
- логирование запросов Winston
- менеджер процессов на сервере pm2
- SSL-сертификаты от Letsencrypt
  
  ##### Адреса
  backend 'https://api.sib408.movies.nomoredomains.xyz'
  frontend 'https://sib408.movies.nomoredomains.xyz'
