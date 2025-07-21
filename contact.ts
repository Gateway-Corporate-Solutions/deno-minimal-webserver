import twilio from "twilio";

const accountSid = Deno.env.get("TWILIO_ACCOUNT_SID") || "";
const authToken = Deno.env.get("TWILIO_AUTH_TOKEN") || "";
const twilioNumber = Deno.env.get("TWILIO_NUMBER") || "";
const notificationNumber = Deno.env.get("NOTIFICATION_NUMBER") || "";

interface UserRequest {
  name: string;
  email: string;
  referral?: string; // Optional field for how they heard about us
  message: string;
}

const blockedEmails = [
  "mike7778uk@gmail.com"
];

export async function handleUserRequest(r: URLSearchParams) {
  const g_recaptchaResponse = r.get('g-recaptcha-response');
  if (!g_recaptchaResponse) {
    console.error('No reCAPTCHA response found');
    return;
  }

  const recaptchaSecret = Deno.env.get('RECAPTCHA_SECRET_KEY');
  if (!recaptchaSecret) {
    console.error('RECAPTCHA_SECRET_KEY is not set');
    return;
  }

  const recaptchaUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${g_recaptchaResponse}`;
  const recaptchaResponse = await fetch(recaptchaUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  if (!recaptchaResponse.ok) {
    console.error('Failed to verify reCAPTCHA:', recaptchaResponse.statusText);
    return;
  }

  const recaptchaData = await recaptchaResponse.json();

  if (!recaptchaData.success) {
    console.error('reCAPTCHA verification failed:', recaptchaData['error-codes']);
    return;
  }

  const twilioClient = twilio(accountSid, authToken);
  const userRequest: UserRequest = {
    name: r.get('name') || '',
    email: r.get('email') || '',
    referral: r.get('referral')?.slice(0, 100) || '', // Optional field, max length 100
    message: r.get('message')?.slice(0, 1000) || ''
  };
  console.log('Received request: ', userRequest);
  if (!userRequest.name || !userRequest.email || !userRequest.message) {
    console.error('Incomplete request data:', userRequest);
    return;
  }
  if (userRequest.email.match(/\.(ru|cn|in|kr)$/)) {
    console.error('Request contains a blocked email domain:', userRequest.email);
    return;
  }
  if (blockedEmails.includes(userRequest.email)) {
    console.error('Request contains a blocked email address:', userRequest.email);
    return;
  }
  if (userRequest.message.match(/(http|https):\/\/[^\s]+\.(ru|cn|in|kr)/)) {
    console.error('Request contains a blocked URL:', userRequest.message);
    return;
  }
  userRequest.message = userRequest.message.replace(/<[^>]+>/g, '').trim(); // Remove HTML tags
  userRequest.message = userRequest.message.replace(/[\r\n]+/g, ' ').trim(); // Normalize newlines
  userRequest.referral = userRequest.referral?.replace(/<[^>]+>/g, '').trim(); // Sanitize referral

  if (userRequest.referral) {
    userRequest.referral = userRequest.referral.slice(0, 100); // Limit referral length
    userRequest.message += `\n\nReferral: ${userRequest.referral}`;
  }

  console.log('Sending notification for request');
  twilioClient.messages.create({
    body: `New request from ${userRequest.name} (${userRequest.email}) : ${userRequest.message}`,
    from: twilioNumber,
    to: notificationNumber
  })
}