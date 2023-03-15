import { writable } from 'svelte/store';

export const FeedbackStore = writable([{
    id: 1,
    rating: 10,
    text: "Irure in nisi dolor voluptate magna Lorem aliquip esse est nulla aute do.",
},
{
    id: 2,
    rating: 9,
    text: "Irure in nisi dolor voluptate magna Lorem aliquip esse est nulla aute do.",
},
{
    id: 3,
    rating: 8,
    text: "Irure in nisi dolor voluptate magna Lorem aliquip esse est nulla aute do.",
},]);