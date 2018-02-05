'use strict';

/*
 * Module dependencie
 */
const randomString = require('randomstring')
const authSecret = randomString.generate()
const jwt = require('jsonwebtoken')
const errors = require('./errors')
const { AuthHeaderNotFoundError, InvalidAuthHeaderError } = errors

const middleware = function(secret = authSecret) {
  return async function(ctx, next) {
    const auth = ctx.request.header.authorization;

    if (auth == undefined) {
      throw new AuthHeaderNotFoundError('authorization header not found')
    }

    try {
      const decode = jwt.verify(auth, secret)
      
      ctx.app.request.auth = decode

      await next()
    
    } catch (e) {
      if (e.name == 'JsonWebTokenError') {
        throw new InvalidAuthHeaderError('invalid authorization header')
      }
    }
  }
}

const authHeaderGenerator = function({playload = {}, secret = authSecret, options = { expiresIn: '5 h'} }) {
  return jwt.sign(playload, secret, options)
}

module.exports = { middleware , authHeaderGenerator}
