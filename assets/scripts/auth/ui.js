'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#auth-message').stop(true, true).html('Signed up successfully!').fadeIn('fast').delay(2000).fadeOut('fast')
  $('#auth-message').addClass('success')
  $('#sign-up').toggle()
  $('#sign-in').toggle()
  formReset()
}

const signUpFailure = function () {
  $('#auth-message').stop(true, true).html('Sign up failure').fadeIn('fast').delay(2000).fadeOut('fast')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  formReset()
}

const signInSuccess = function (data) {
  $('#auth-message').stop(true, true).html('Signed in successfully').fadeIn('fast').delay(2000).fadeOut('fast')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  $('.content').empty()
  $('.signed-in').toggle()
  $('#getEventsButton').show()
  $('#clearEventsButton').hide()
  formReset()
  store.user = data.user
}

const signInFailure = function () {
  $('#auth-message').stop(true, true).html('Failed to sign in').fadeIn('fast').delay(2000).fadeOut('fast')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  formReset()
}

const signOutSuccess = function () {
  $('#auth-message').stop(true, true).html('Signed out successfully').fadeIn('fast').delay(2000).fadeOut('fast')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  $('.signed-in').toggle()
  $('.content').empty()
  $('#getEventsButton').show()
  $('#clearEventsButton').hide()
  $('#create-event').hide()
  $('#create-location').hide()
  $('#locations-list').hide()
  $('#locations-index').show()
  formReset()
  store.user = null
}

const signOutFailure = function () {
  $('#auth-message').html('Failed to sign out')
  $('#auth-message').stop(true, true).html('Failed to sign out').fadeIn('fast').delay(2000).fadeOut('fast')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('failure')
  formReset()
}

const changePasswordSuccess = function () {
  $('#auth-message').stop(true, true).html('You have changed your password!').fadeIn('fast').delay(2000).fadeOut('fast')
  $('#auth-message').removeClass()
  $('#auth-message').addClass('success')
  formReset()
}

const changePasswordFailure = function () {
  $('#auth-message').stop(true, true).html('Failed to change password').fadeIn('fast').delay(2000).fadeOut('fast')
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
