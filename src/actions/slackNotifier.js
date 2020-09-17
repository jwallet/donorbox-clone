import axios from 'axios';
import { SLACK_WEBHOOK_URL, SLACK_CHANNEL } from 'constant';

const paymentAttempt = async (bag) => {
  const donor = `${bag.wantsToBeAnonymous ? 'Anonymous' : [bag.firstName, bag.lastName].join(' ')}`;

  try {
    await axios.post(
      SLACK_WEBHOOK_URL,
      JSON.stringify({
        channel: SLACK_CHANNEL,
        text: `<!here|here> Payment attempt started by ${donor} ${bag.email}`,
      }),
    );
  } catch {
    // eslint-disable-next-line no-empty
  }
};

const paymentSucceeded = async (data) => {
  try {
    await axios.post(
      SLACK_WEBHOOK_URL,
      JSON.stringify({
        channel: SLACK_CHANNEL,
        text: `<!here|here> New donation of \`${data.donation}\` 🎉\n${
          data.amountItemLabel || 'Love 💖'
        } from ${data.donor} ${data.email}`,
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
