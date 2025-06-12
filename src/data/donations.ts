import { Donation } from "src/types";

export const recentDonations: Donation[] = [
  { id: '1', donor: 'Wanjiku M.', amount: 500, message: 'Kwa haki yetu sote!', timestamp: new Date(), anonymous: false },
  { id: '2', donor: 'Anonymous', amount: 1000, timestamp: new Date(), anonymous: true },
  { id: '3', donor: 'James K.', amount: 250, message: 'Tuungane', timestamp: new Date(), anonymous: false },
  { id: '4', donor: 'Mary N.', amount: 2000, message: 'Justice for all', timestamp: new Date(), anonymous: false }
];
