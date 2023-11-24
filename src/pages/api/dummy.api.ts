export const TODOS_DATA = [
  {
    id: 1,
    title: 'Close off Case #012920- RODRIGUES, Amiguel',
    description:
      'Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!',
    createdAt: '12/06/2021',
  },
  {
    id: 2,
    title:
      'Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203',
    description:
      'All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in.',
    createdAt: '14/06/2021',
  },
  {
    id: 3,
    title: 'Set up appointment with Dr Blake',
    description: null,
    createdAt: '22/06/2021',
  },
];

export const USER_DATA = [
  {
    id: 1,
    name: 'Mary Hilda',
  },
  {
    id: 2,
    name: 'Obaidullah Amarkhil',
  },
  {
    id: 3,
    name: 'Cameron Phillips',
  },
];

export const MESSAGE_DATA = [
  {
    userId: 1,
    message:
      'Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.',
    time: '19:32',
    date: ' 09/06/2021',
  },
  {
    userId: 3,
    message: 'No worries. It will be completed ASAP. I’ve asked him yesterday.',
    time: '19:32',
    date: ' 09/06/2021',
  },
  {
    userId: 1,
    message: 'No worries. It will be completed ASAP. I’ve asked him yesterday.',
    time: '19:32',
    date: ' 09/06/2021',
  },
];

export const GROUP_CHAT_DATA = [
  {
    id: 1,
    groupname: '109220-Naturalization',
    members: [
      {
        userId: 1,
      },
      {
        userId: 2,
      },
      {
        userId: 3,
      },
    ],
  },
  {
    id: 2,
    groupname: '8405-Diana SALAZAR MUNGUIA',
    members: [
      {
        userId: 1,
      },
      {
        userId: 2,
      },
      {
        userId: 3,
      },
    ],
  },
  {
    id: 3,
    groupname:
      'Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]',
    members: [
      {
        userId: 1,
      },
      {
        userId: 2,
      },
      {
        userId: 3,
      },
    ],
  },
];

export const CHAT_DATA = [
  {
    id: 1,
    name: 'Mary Hilda',
    message: [
      {
        text: 'Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.',
      },
      {
        text: 'Sure thing, Claren',
      },
    ],
    // groupChats : [
    //     {
    //         groupId: 1,

    //     }
    // ]
  },
  {
    id: 2,
    name: 'Obaidullah Amarkhil',
    message: [
      {
        text: 'Morning. I’ll try to do them. Thanks',
      },
    ],
  },
  {
    id: 3,
    name: 'Cameron Phillips',
    message: [
      {
        text: 'Please check this out!',
      },
      {
        text: 'I understand your initial concerns and thats very valid, Elizabeth. But you ...',
      },
    ],
  },
  {
    id: 4,
    name: 'Ellen',
    message: [
      {
        text: 'Hey, please read.',
      },
    ],
  },
];
