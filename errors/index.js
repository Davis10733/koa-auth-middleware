'use strict'

const HttpError = require('standard-http-error');

class AuthHeaderNotFoundError extends HttpError {
  constructor(msg = '') {
    super(400, msg)
  }
}

class InvalidAuthHeaderError extends HttpError {
  constructor(msg = '') {
    super(400, msg)
  }
}

module.exports = {
  AuthHeaderNotFoundError,
  InvalidAuthHeaderError
}
