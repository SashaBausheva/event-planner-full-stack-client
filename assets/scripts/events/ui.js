'use strict'

const showEventsTemplate = require('../templates/events-listing.handlebars')

const getEventsSuccess = (data) => {
  console.log(data)
  console.log('this is ' + {events: data.events})
  const showEventsHtml = showEventsTemplate({ events: data.events })
  $('.content').html(showEventsHtml)
  $('#getEventsButton').toggle()
  $('#clearEventsButton').toggle()
}

const createEventSuccess = (data) => {
  console.log('this is ' + {events: data.events})
  console.log(data)
  const showEventsHtml = showEventsTemplate({ events: data.events })
  $('.content').html(showEventsHtml)
}

const removeEventSuccess = (data) => {
  console.log(data)
  const showEventsHtml = showEventsTemplate({ events: data.events })
  $('.content').html(showEventsHtml)
}

const editEventSuccess = (data) => {
  console.log('updated data is' + data)
  const showEventsHtml = showEventsTemplate({ events: data.events })
  $('.content').html(showEventsHtml)
}

const clearEvents = () => {
  $('.content').empty()
  $('#getEventsButton').toggle()
  $('#clearEventsButton').toggle()
}

const failure = (error) => {
  $('#message').text('Error creating event')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error(error)
}

module.exports = {
  getEventsSuccess,
  createEventSuccess,
  removeEventSuccess,
  editEventSuccess,
  clearEvents,
  failure
}
