import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.users.deny({
  update() { return true; }
});

Accounts.onCreateUser(function (options, user) {
  user.profile = {
    name: user.services.discord.username,
    discordId: user.services.discord.id,
    discordAvatar: user.services.discord.avatar
  }

  return user;
});