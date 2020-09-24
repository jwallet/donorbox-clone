import axios from 'axios';
import { SLACK_WEBHOOK_URL, SLACK_CHANNEL } from 'constant';
import { PaymentServices } from 'shared/constants/payments';

const paymentAttempt = async (paymentMode, bag) => {
  try {
    await axios.post(
      SLACK_WEBHOOK_URL,
      JSON.stringify({
        channel: SLACK_CHANNEL,
        text: `<!here|here> ${PaymentServices[paymentMode]} payment attempt started by ${bag.donor} ${bag.email}`,
      }),
    );
  } catch {
    // eslint-disable-next-line no-empty
  }
};

const paymentSucceeded = async (paymentMode, data) => {
  try {
    await axios.post(
      SLACK_WEBHOOK_URL,
      JSON.stringify({
        channel: SLACK_CHANNEL,
        text: `<!here|here> New ${PaymentServices[paymentMode]} donation of \`${
          data.donation
        }\` 🎉\n${data.giftItemLabel || 'Love 💖'} from ${data.donor} ${data.email}`,
        attachments: data.wantsToComment ? [{ text: data.comment }] : [],
      }),
    );
  } catch {
    // eslint-disable-next-line no-empty
  }
};

export default {
  paymentAttempt,
  paymentSucceeded,
};
