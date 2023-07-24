import type { RuntimeCompositeDefinition } from '@composedb/types';

const definition: RuntimeCompositeDefinition = {
  models: {
    User: {
      id: 'kjzl6hvfrbw6c93w6wgdx6c3kk6iv0jg74gyvqhmas6zowcph4crcrwstjjddg8',
      accountRelation: { type: 'single' },
    },
    Event: {
      id: 'kjzl6hvfrbw6c9amsdukx62etshei8xil4m310ett1ickmnss8vbk0iosrbxybv',
      accountRelation: { type: 'list' },
    },
    UserEvent: {
      id: 'kjzl6hvfrbw6c9jih8xqqddoi24mxypnx9sqtdfe50v0k54cm9tw2gzeg6pvedi',
      accountRelation: { type: 'list' },
    },
  },
  objects: {
    User: {
      name: { type: 'string', required: true },
      email: { type: 'string', required: true },
      balance: { type: 'integer', required: true },
      did: { type: 'view', viewType: 'documentAccount' },
    },
    EventAttendee: {
      user: { type: 'string', required: true },
      status: { type: 'integer', required: true },
    },
    Event: {
      city: { type: 'string', required: true },
      cost: { type: 'integer', required: true },
      mode: { type: 'integer', required: true },
      name: { type: 'string', required: true },
      venue: { type: 'string', required: true },
      status: { type: 'integer', required: true },
      dateTime: { type: 'datetime', required: true },
      maxLimit: { type: 'integer', required: true },
      attendees: {
        type: 'list',
        required: false,
        item: {
          type: 'reference',
          refType: 'object',
          refName: 'EventAttendee',
          required: false,
        },
      },
      description: { type: 'string', required: true },
      creationDate: { type: 'datetime', required: true },
      creator: { type: 'view', viewType: 'documentAccount' },
    },
    UserEvent: {
      event: { type: 'id', required: true },
      status: { type: 'integer', required: true },
      attendee: { type: 'view', viewType: 'documentAccount' },
    },
  },
  enums: {},
  accountData: {
    user: { type: 'node', name: 'User' },
    eventList: { type: 'connection', name: 'Event' },
    userEventList: { type: 'connection', name: 'UserEvent' },
  },
};

export default definition;
