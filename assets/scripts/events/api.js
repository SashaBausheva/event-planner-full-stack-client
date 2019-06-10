'use strict'

const config = require('../config')
const store = require('../store')

const getEvents = function () {
  if (store.user) {
    return $.ajax({
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
      url: config.apiUrl + '/events'
    })
  } else {
    return $.ajax({
      url: config.apiUrl + '/events'
    })
  }
}

const createEvent = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/events',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'POST',
    data: formData
  })
}

const removeEvent = function (id) {
  return $.ajax({
    url: config.apiUrl + '/events/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'DELETE'
  })
}

const editEvent = function (id, formData) {
  return $.ajax({
    url: config.apiUrl + '/events/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH',
    data: formData
  })
}

module.exports = {
  getEvents,
  createEvent,
  removeEvent,
  editEvent
}
