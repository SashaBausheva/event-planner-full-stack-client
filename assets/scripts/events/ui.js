'use strict'

const showEventsTemplate = require('../templates/events-listing.handlebars')

const getEventsSuccess = (data) => {
  const showEventsHtml = showEventsTemplate({ events: data.events })
  $('.content').html(showEventsHtml)
  $('#getEventsButton').toggle()
  $('#clearEventsButton').toggle()
}

const createEventSuccess = (data) => {
  $('#events-message').html('Event created!')
  $('#events-message').fadeIn('fast').delay(2000).fadeOut('fast')
  const showEventsHtml = showEventsTemplate({ events: data.events })
  $('.content').html(showEventsHtml)
  $('#events-message').text('Event created successfully!')
  formReset()
}

const removeEventSuccess = (data) => {
  $('#events-message').html('Event removed successfully!')
  $('#events-message').fadeIn('fast').delay(2000).fadeOut('fast')
  const showEventsHtml = showEventsTemplate({ events: data.events })
  $('.content').html(showEventsHtml)
  formReset()
}

const editEventSuccess = (data) => {
  $('#events-message').html('Event updated!')
  $('#events-message').fadeIn('fast').delay(2000).fadeOut('fast')
  const showEventsHtml = showEventsTemplate({ events: data.events })
  $('.content').html(showEventsHtml)
  formReset()
}

const clearEvents = () => {
  $('.content').empty()
  $('#getEventsButton').toggle()
  $('#clearEventsButton').toggle()
}

const failure = () => {
  $('#events-message').html('Error creating event')
  $('#events-message').fadeIn('fast').delay(2000).fadeOut('fast')
  $('#events-message').removeClass()
  $('#events-message').addClass('failure')
  formReset()
}

const formReset = function () {
  $('form').trigger('reset')
}

module.exports = {
  getEventsSuccess,
  createEventSuccess,
  removeEventSuccess,
  editEventSuccess,
  clearEvents,
  failure,
  formReset
}
