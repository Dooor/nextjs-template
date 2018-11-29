// Library
import KeenTracking from 'keen-tracking';

// Configure a client instance
const client = new KeenTracking({
  projectId: process.env.KEEN_PROJECT_ID,
  writeKey: process.env.KEEN_WRITE_KEY,
});

if (process.env.NODE_ENV !== 'production') {
  // Optionally prevent recording in dev mode
  KeenTracking.enabled = false;
  // Display events in the browser console
  client.on('recordEvent', KeenTracking.log);
}

// Track a 'pageview' event and initialize auto-tracking data model
client.initAutoTracking({
  recordClicks: false,
  recordFormSubmits: false,
  recordPageViews: true,
});

export default client;
