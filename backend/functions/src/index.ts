import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { translateEmail } from './translate';

admin.initializeApp();

export const gmailWebhook = functions.https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const emailData = req.body;
  try {
    await translateEmail(emailData);
    res.status(200).send('Processed');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
});
