// This is an auto-generated file, do not edit manually
export const definition = {
  models: {
    Event: {
      id: "kjzl6hvfrbw6c737s4yu3ilwl1xxwxdjk8ja7r2vp4n4d0var3b6m4jbqc48y75",
      accountRelation: { type: "list" },
    },
    EventRelation: {
      id: "kjzl6hvfrbw6casjt7lcrqcq5z85ppdoy5jidznninvgdvgqqx4xoayo64fxmqz",
      accountRelation: { type: "list" },
    },
    Group: {
      id: "kjzl6hvfrbw6c82wzf8mznpcg96qdddo77wfpaxb29pc9yo3n4168bo2ri36lpw",
      accountRelation: { type: "list" },
    },
    User: {
      id: "kjzl6hvfrbw6caf8cvm2r4xisfx6wsdl8yjqnqpo3owcsi987vpgdd6ne5ky97m",
      accountRelation: { type: "single" },
    },
  },
  objects: {
    Event: {
      name: { type: "string", required: true },
      status: { type: "integer", required: true },
      DateTime: { type: "datetime", required: true },
      UserLimit: { type: "integer", required: true },
      description: { type: "string", required: true },
      creationDate: { type: "datetime", required: true },
      creator: { type: "view", viewType: "documentAccount" },
    },
    EventRelation: {
      eventId: { type: "streamid", required: true },
      groupId: { type: "streamid", required: true },
      event: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c737s4yu3ilwl1xxwxdjk8ja7r2vp4n4d0var3b6m4jbqc48y75",
          property: "eventId",
        },
      },
      group: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c82wzf8mznpcg96qdddo77wfpaxb29pc9yo3n4168bo2ri36lpw",
          property: "groupId",
        },
      },
    },
    Group: {
      name: { type: "string", required: true },
      description: { type: "string", required: true },
      creationDate: { type: "datetime", required: true },
      creator: { type: "view", viewType: "documentAccount" },
      events: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6casjt7lcrqcq5z85ppdoy5jidznninvgdvgqqx4xoayo64fxmqz",
          property: "groupID",
        },
      },
    },
    User: {
      name: { type: "string", required: true },
      email: { type: "string", required: true },
      did: { type: "view", viewType: "documentAccount" },
    },
  },
  enums: {},
  accountData: {
    eventList: { type: "connection", name: "Event" },
    eventRelationList: { type: "connection", name: "EventRelation" },
    groupList: { type: "connection", name: "Group" },
    user: { type: "node", name: "User" },
  },
};
