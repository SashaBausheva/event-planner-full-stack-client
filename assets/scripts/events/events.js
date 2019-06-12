'use strict'

const api = require('./api.js')
const locationsapi = require('../locations/api.js')
const ui = require('./ui.js')
const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store')

// const onGetEvents = (event) => {
//   event.preventDefault()
//   api.getEvents()
//     .then(ui.getEventsSuccess)
//     .catch(ui.failure)
// }

const onGetEventsAndLocations = (event) => {
  event.preventDefault()
  api.getEvents()
    .then(data => {
      store.events = data.events
      locationsapi.getLocations()
        .then(ui.getLocationsAndEventsSuccess)
        .catch(ui.failure)
    })
    .catch(ui.failure)
}

const onCreateEvent = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.createEvent(formData)
    .then(ui.createEventSuccess)
    .then(res => {
      onGetEventsAndLocations(event)
    })
    .catch(ui.failure)
}

const onCreateLocation = (event) => {
  event.preventDefault()

  const formData = getFormFields(event.target)
  locationsapi.createLocation(formData)
    .then(ui.createLocationSuccess)
    .then(res => {
      onShowAllLocations(event)
    })
    .catch(ui.failure)
}

const onClearEvents = (event) => {
  event.preventDefault()
  ui.clearEvents()
}

const onRemoveEvent = (event) => {
  const id = $(event.target).data('id')
  api.removeEvent(id)
    .then(res => {
      onGetEventsAndLocations(event)
    })
    .catch(ui.failure)
}

const onEditEvent = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const formData = getFormFields(event.target)
  api.editEvent(id, formData)
    .then(ui.editEventSuccess)
    .then(res => {
      onGetEventsAndLocations(event)
    })
    .catch(ui.failure)
}

const onEditEventButton = (event) => {
  event.preventDefault()
  const id = 'update-event-' + $(event.target).data('id')
  $('#' + id).toggle()
}

const onCreateEventButton = (event) => {
  locationsapi.getLocations()
    .then(ui.getLocationsOnCreateSuccess)
    .catch(ui.failure)
  $('#create-event').toggle()
}

const onShowAllLocations = (event) => {
  locationsapi.getLocations()
    .then(ui.showLocationsSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#getEventsButton').on('click', onGetEventsAndLocations)
  $('#locations-index').on('click', onShowAllLocations)
  $('#create-event').on('submit', onCreateEvent)
  $('#create-location').on('submit', onCreateLocation)
  $('#clearEventsButton').on('click', onClearEvents)
  $('.content').on('click', '.remove-event', onRemoveEvent)
  $('.content').on('click', '.edit-event-button', onEditEventButton)
  $('.content').submit('#update-event-' + $(this).data('id'), onEditEvent)
  $('#createEventButton').on('click', onCreateEventButton)
}

module.exports = {
  addHandlers
}
