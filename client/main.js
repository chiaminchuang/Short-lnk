import { Meteor } from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'
import { Tracker } from 'meteor/tracker'
import { routes, onAuthChange } from '../imports/routes/routes'

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId()
  onAuthChange(isAuthenticated)
})

Meteor.startup(() => {
  Meteor.call('', '', (err, res) => {})
  ReactDOM.render(routes, document.getElementById('app'))
})