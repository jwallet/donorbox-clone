<h1 align="center">A simplified Donorbox* clone built with React hooks</h1>

<p align="center">
  This JS clone app offers an alternative if you wanna stop receiving monthly bills for unpayed processing fees.
</p>

<h3 align="center">
  <a href="#">Visit the live app</a>
</h3>

![image](https://user-images.githubusercontent.com/23088305/93079551-4dbddf00-f65a-11ea-8658-0b088652d44a.png)

| Amount Form | Donate Form | Payment Form |
| ----------- | ----------- | ------------ |
| ![image](https://user-images.githubusercontent.com/23088305/93038512-3b6c8280-f613-11ea-84f4-ae5510b91cc4.png) | ![image](https://user-images.githubusercontent.com/23088305/93038572-6060f580-f613-11ea-9664-5625e3921927.png) | ![image](https://user-images.githubusercontent.com/23088305/93157593-84d2d580-f6d8-11ea-9605-5843672920b0.png) |
| Only support One-Time Donation | Limited Donor info fields | Only supports Paypal |

### What it does
- It's free to use, no Donorbox processing fee, no more monthly bills to pay.
- It sends a notification to a Slack channel (with a backend: use Paypal `notify_url` url param instead)

![image](https://user-images.githubusercontent.com/23088305/93408942-c479f880-f863-11ea-9a64-4523d4a70961.png)

### What it doesn't
- It doesn't send email... yet.
- It doesn't keep track of all donations.
- It doesn't do recurring donation, only one-time donation.
- It only supports Paypal, Stripe may come in the near future.

> `*` [Donorbox]("https://donorbox.org/") is a fundraising webapp that adds 1.5% of processing fees on top of your donations for providing a small form that links to Paypal and for keeping tracks of past donations with access to a dashboard and email notifications.
