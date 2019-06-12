'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const eventsEvents = require('./events/events.js')
const authEvents = require('./auth/events')
// const getLocationsSelection = require('./templates/events-listing.handlebars')

// On document ready
$(() => {
  eventsEvents.addHandlers()
  authEvents.addHandlers()
})
