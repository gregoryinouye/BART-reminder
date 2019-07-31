const BART_API_KEY = process.env.BART_API_KEY || 'PUBLIC_BART_API_KEY';

const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID || 'TWILIO_ACCOUNT_SID';
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN || 'TWILIO_AUTH_TOKEN';
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER || '+1TWILIO_PHONE_NUMBER';

module.exports = { BART_API_KEY, twilioAccountSid, twilioAuthToken, twilioPhoneNumber };
