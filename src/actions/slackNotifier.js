import axios from 'axios';
import { SLACK_WEBHOOK_URL, SLACK_CHANNEL } from 'constant';
import { CurrenciesSymbol } from '../shared/constants/currencies';

export const slackNotifier = bag => {
    const amount = `${CurrenciesSymbol[bag.currency]} ${bag.amount.toFixed(2)}`;
    const donor = `${bag.wantsToBeAnonymous ? "Anonymous" : [bag.firstName, bag.lastName].join(' ')}`;
    
    return axios.post(
        SLACK_WEBHOOK_URL,
        JSON.stringify({
            channel: SLACK_CHANNEL,
            text: `<!here|here> New donation of \`${amount}\` 🎉\n${bag.amountItemLabel || "Love 💖"} from ${donor} ${bag.email}`,
            attachments: bag.wantsToComment ? [{ text: bag.comment }] : []
        })
    )
};