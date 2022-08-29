import express from 'express';
import Mailchimp from 'mailchimp-api-v3';

const API_KEY = '03d2fc06b8337f8e5071b6bc3017423c-us9'
const AUDIENCE_ID = '2b568fed8a';
const mailchimp = new Mailchimp(API_KEY);

const app = express();
app.use(express.json());

app.post('/subscribe', async(req, res) => {
  const { email: email_address } = req.body

  try {
    const response = await mailchimp.request({
      method: 'post',
      path: `/lists/${AUDIENCE_ID}/members`,
      body: {
        email_address,
        status: "subscribed"
      },
      headers: {
      'Content-Type': 'application/json',
      Authorization: `api_key ${API_KEY}`
    }
    })
    res.status(response.statusCode).json(response.status);
  } catch(error) {
    res.status(error.status).send(error)
  }
})

module.exports = app

export default {
  path: '/api',
  handler: app
}