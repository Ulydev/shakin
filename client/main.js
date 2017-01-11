import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Meteor.startup(() => {
  Meteor.absoluteUrl.defaultOptions.rootUrl = 'http://dev.ulydev.com:3000/';
});

Template.header.events({
  'click .login-button': function(event) {
    Meteor.loginWithDiscord({
      requestPermissions: [ 'email', 'identify' ]
    }, function(err){
      if (err) {
        throw new Meteor.Error("Discord login failed");
      }
    });
  },

  'click .logout-button': function(event) {
    Meteor.logout(function(err){
      if (err) {
        throw new Meteor.Error("Logout failed");
      }
    })
  }
});