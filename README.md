# koa-auth-middleware

`koa-auth-middleware` is a koa middleware for handling authentication by using JWT 

## Usage

### Authorization

```javascript
const Koa = require('Koa')
const Router = require('koa-router')

const { middleware } = require('koa-auth-middleware')

const app = new Koa()
const router = new Router()

/*All api route api/path will be require a jwt for authorization*/ 
router.use('api/path/', middleware)

app.use(router.routes())

app.listen(3000)
```
### Request

You should apply JWT into `Authorization` header in api route which is `api/path/`


### Generate JWT

```javascript
const { authHeaderGenerator } = require('koa-auth-middleware')

/* Custom playoad to save in JWT */
const playload = {
  userId: 1,
  date: '2018-02-01'
  }

/* Default timeout is for 5 hours */
/* Auth secret will be auto-generated */
const jwt = authHeaderGenerator(playload, options = { expiresIn: '5 h' })
```
