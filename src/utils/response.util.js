const HttpError = require('http-errors');

const HttpResponseSuccess = (message, data, status) => ({message, data, status});

const HttpResponseError = (code, message) => HttpError(code, message);

module.exports = {
  HttpResponseSuccess,
  HttpResponseError,
};
