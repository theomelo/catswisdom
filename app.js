const { App, LogLevel } = require('@slack/bolt');

const home = require('./views/home');
const enlightmentView = require('./views/enlightment');
const fetchWisdom = require('./fetch-wisdom');

//Pull in the .env file for use in this file
require('dotenv').config();

// Initialize the Bolt app
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  logLevel: LogLevel.DEBUG
});

// Default error handling
app.error(error => {
  console.error('An error ocurred:', error);
});

app.event('app_home_opened',  async ({ event, client }) => {
  if(event.tab === 'home') {
    const result = await client.views.publish({
      user_id: event.user,
      view: home
    });
    console.info(result);
  }
});

app.action('new_wisdom', async ({ action, ack, payload, client }) => {
    ack();

    const { content, author } = await fetchWisdom();
    const view = enlightmentView(content, author);
    const result = await client.views.open({
      token: token,
      view: view
    });
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);
})();
