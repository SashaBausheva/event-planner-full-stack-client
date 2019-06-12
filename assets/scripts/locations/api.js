'use strict'

const config = require('../config')
const store = require('../store')

const getLocations = function () {
  if (store.user) {
    return $.ajax({
      headers: {
        Authorization: 'Token token=' + store.user.token
      },
      url: config.apiUrl + '/locations'
    })
  } else {
    return $.ajax({
      url: config.apiUrl + '/locations'
    })
  }
}

const createLocation = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/locations',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'POST',
    data: formData
  })
}

//
// const removeLocation = function (id) {
//   return $.ajax({
//     url: config.apiUrl + '/locations/' + id,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     method: 'DELETE'
//   })
// }
//
// const editLocation = function (id, formData) {
//   return $.ajax({
//     url: config.apiUrl + '/locations/' + id,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     method: 'PATCH',
//     data: formData
//   })
// }
//
module.exports = {
  getLocations,
  createLocation
}
