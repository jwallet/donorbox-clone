<h1 align="center">A simplified Donorbox* clone built with React hooks</h1>

<p align="center">
  This JS script, which injects a donation form, is a good alternative if you don't want to receive anymore monthly bills for unpayed processing fees.
</p>

<h3 align="center">
  <a href="#">Visit the live app</a>
</h3>

![image](https://user-images.githubusercontent.com/23088305/93079551-4dbddf00-f65a-11ea-8658-0b088652d44a.png)

| Choose Amount                                                                             | Donor Info                                                                              | Payment (Card)                                                                                    | Payment (Paypal)                                                                                  |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| ![amount](https://raw.githubusercontent.com/jwallet/donate/master/screens/app_amount.png) | ![donor](https://raw.githubusercontent.com/jwallet/donate/master/screens/app_donor.png) | ![payment-stripe](https://raw.githubusercontent.com/jwallet/donate/master/screens/app_stripe.png) | ![payment-paypal](https://raw.githubusercontent.com/jwallet/donate/master/screens/app_paypal.png) |
| Only support One-Time Donation                                                            | Limited Donor info fields                                                               | Credit card fields and payment secured by Stripe                                                  | Redirect the payment to Paypal                                                                    |

### What it does

- It's free to use, no Donorbox processing fee, no more monthly bills to pay.
- It uses a free [Slack](https://slack.com/intl/en-ca/) channel to receive notifications about new donations.
  - This is how and where the form data is saved: amount, comment and donor info.
  - If you have access to a backend, use Paypal `notify_url` (POST) or `return` (GET/POST) [url param](https://github.com/jwallet/donate/blob/master/src/actions/paypal.js#L11:L28).

![image](https://user-images.githubusercontent.com/23088305/93408942-c479f880-f863-11ea-9a64-4523d4a70961.png)

### What it doesn't

- It doesn't send email... yet.
- It doesn't keep track of all donations.
- It doesn't do recurring donation, only one-time donation.

> `*` [Donorbox]("https://donorbox.org/") is a fundraising webapp that adds 1.5% of processing fees on top of your donations for providing a small form that links to Paypal and for keeping tracks of past donations with access to a dashboard and email notifications.
