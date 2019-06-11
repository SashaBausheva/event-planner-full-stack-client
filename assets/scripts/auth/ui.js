'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#auth-message').html('Signed up successfully')
  $('#auth-message').fadeIn('fast').delay(2000).fadeOut('fast')
  $('#auth-message').addClass('success')
  formReset()
}

const signUpFailure = function () {
  $('#auth-message').html('Sign up failure')
  $('#auth-message').fadeIn('fast').delay(2000).fadeOut('fast')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  formReset()
}

const signInSuccess = function (data) {
  $('#auth-message').html('Signed in successfully')
  $('#auth-message').fadeIn('fast').delay(2000).fadeOut('fast')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  $('.content').empty()
  $('.signed-in').toggle()
  $('#getEventsButton').show()
  $('#clearEventsButton').hide()
  formReset()
  store.user = data.user
}

const signInFailure = function (error) {
  $('#auth-message').html('Failed to sign in')
  $('#auth-message').fadeIn('fast').delay(2000).fadeOut('fast')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  formReset()
}

const signOutSuccess = function () {
  $('#auth-message').html('Signed out successfully')
  $('#auth-message').fadeIn('fast').delay(2000).fadeOut('fast')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  $('.signed-in').toggle()
  $('.content').empty()
  $('#getEventsButton').show()
  $('#clearEventsButton').hide()
  formReset()
  store.user = null
}

const signOutFailure = function () {
  $('#auth-message').html('Failed to sign out')
  $('#auth-message').fadeIn('fast').delay(2000).fadeOut('fast')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  formReset()
}

const changePasswordSuccess = function () {
  $('#auth-message').html('You have changed your password!')
  $('#auth-message').fadeIn('fast').delay(2000).fadeOut('fast')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  formReset()
}

const changePasswordFailure = function () {
  $('#auth-message').html('Failed to change password')
  $('#auth-message').fadeIn('fast').delay(2000).fadeOut('fast')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  formReset()
}

const formReset = function () {
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  formReset
}
