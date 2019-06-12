'use strict'

const showEventsTemplate = require('../templates/events-listing.handlebars')
const showEventsAndLocationsTemplate = require('../templates/locations-listing.handlebars')
const locationsOnCreateTemplate = require('../templates/locations-on-create.handlebars')
const showLocationsTemplate = require('../templates/show-all-locations.handlebars')
const store = require('../store')

const getEventsSuccess = (data) => {
  const showEventsHtml = showEventsTemplate({ events: data.events })
  $('.content').html(showEventsHtml)
  $('#getEvents').toggle()
  $('#clearEventsButton').toggle()
}

const getLocationsAndEventsSuccess = (data) => {
  store.events.locations = data.locations
  const showEventsAndLocationsHtml = showEventsAndLocationsTemplate({ events: store.events })
  $('.content').html(showEventsAndLocationsHtml)
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

const createLocationSuccess = (data) => {
  $('#events-message').html('Location created!')
  $('#events-message').fadeIn('fast').delay(2000).fadeOut('fast')
  const showLocationsHtml = showLocationsTemplate({ locations: data.locations })
  $('#locations-list').html(showLocationsHtml)
  $('#events-message').text('Location created successfully!')
  formReset()
}

const showLocationsSuccess = (data) => {
  const showLocationsHtml = showLocationsTemplate({ locations: data.locations })
  $('#locations-list').html(showLocationsHtml)
  $('#locations-list').show()
  $('#locations-index').hide()
}

const getLocationsOnCreateSuccess = (data) => {
  const locationsOnCreateHtml = locationsOnCreateTemplate({ locations: data.locations })
  $('#event-location-index').html(locationsOnCreateHtml)
}

const removeEventSuccess = (data) => {
  $('#events-message').html('Event removed successfully!')
  $('#events-message').fadeIn('fast').delay(2000).fadeOut('fast')
  $('#getEventsButton').hide()
  $('#clearEventsButton').show()
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
  getLocationsAndEventsSuccess,
  createEventSuccess,
  createLocationSuccess,
  showLocationsSuccess,
  getLocationsOnCreateSuccess,
  removeEventSuccess,
  editEventSuccess,
  clearEvents,
  failure,
  formReset
}
