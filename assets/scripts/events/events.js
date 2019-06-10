'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require(`../../../lib/get-form-fields`)

const onGetEvents = (event) => {
  event.preventDefault()
  api.getEvents()
    .then(ui.getEventsSuccess)
    .catch(ui.failure)
}

const onCreateEvent = (event) => {
  event.preventDefault()
  console.log('create event ran!')

  const formData = getFormFields(event.target)
  api.createEvent(formData)
    .then(ui.createEventSuccess)
    .then(res => {
      onGetEvents(event)
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
      onGetEvents(event)
    })
    .catch(ui.failure)
}

const onEditEvent = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  const formData = getFormFields(event.target)
  console.log('form data is ' + formData)
  api.editEvent(id, formData)
    .then(ui.editEventSuccess)
    .then(res => {
      onGetEvents(event)
    })
    .catch(ui.failure)
}

const onEditEventButton = (event) => {
  event.preventDefault()
  const id = 'update-event-' + $(event.target).data('id')
  $('#' + id).toggle()
}

const addHandlers = () => {
  $('#getEventsButton').on('click', onGetEvents)
  $('#getEventsSignedOutButton').on('click', onGetEvents)
  $('#create-event').on('submit', onCreateEvent)
  $('#clearEventsButton').on('click', onClearEvents)
  $('.content').on('click', '.remove-event', onRemoveEvent)
  $('.content').on('click', '.edit-event-button', onEditEventButton)
  $('.content').submit('#update-event-' + $(this).data('id'), onEditEvent)
  $('#createEventButton').click(function () {
    $('#create-event').toggle()
  })
}

module.exports = {
  addHandlers
}
