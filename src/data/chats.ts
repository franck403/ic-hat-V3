import { Chat } from '../types/chat';

export const chatsData: Chat[] = [
  {
    id: 1,
    name: "John Doe",
    lastMessage: "See you tomorrow!",
    time: new Date(),
    unread: 2,
    participants: 2,
    type: 'direct',
    messages: [
      {
        id: 1,
        content: "Hi! How are you?",
        sender: "John",
        time: new Date(Date.now() - 3600000),
        isSelf: false
      },
      {
        id: 2,
        content: "I'm good, thanks! How about you?",
        sender: "You",
        time: new Date(Date.now() - 1800000),
        isSelf: true
      },
      {
        id: 3,
        content: "See you tomorrow!",
        sender: "John",
        time: new Date(),
        isSelf: false
      }
    ]
  },
  {
    id: 2,
    name: "Team Project",
    lastMessage: "Great work everyone!",
    time: new Date(),
    unread: 3,
    participants: 5,
    type: 'group',
    messages: [
      {
        id: 1,
        content: "Hi team! How's the progress?",
        sender: "John",
        time: new Date(Date.now() - 7200000),
        isSelf: false
      },
      {
        id: 2,
        content: "Everything's on track!",
        sender: "You",
        time: new Date(Date.now() - 3600000),
        isSelf: true
      },
      {
        id: 3,
        content: "Great work everyone!",
        sender: "Sarah",
        time: new Date(),
        isSelf: false
      }
    ]
  },
  {
    id: 3,
    name: "Alice Smith",
    lastMessage: "Thanks for your help!",
    time: new Date(),
    unread: 0,
    participants: 2,
    type: 'direct',
    messages: [
      {
        id: 1,
        content: "Could you help me with something?",
        sender: "Alice",
        time: new Date(Date.now() - 5400000),
        isSelf: false
      },
      {
        id: 2,
        content: "Sure, what do you need?",
        sender: "You",
        time: new Date(Date.now() - 2700000),
        isSelf: true
      },
      {
        id: 3,
        content: "Thanks for your help!",
        sender: "Alice",
        time: new Date(),
        isSelf: false
      }
    ]
  },
  {
    id: 4,
    name: "Marketing Team",
    lastMessage: "Meeting at 3 PM",
    time: new Date(),
    unread: 1,
    participants: 8,
    type: 'group',
    messages: [
      {
        id: 1,
        content: "Should we schedule a meeting?",
        sender: "Bob",
        time: new Date(Date.now() - 5400000),
        isSelf: false
      },
      {
        id: 2,
        content: "Yes, let's discuss the campaign",
        sender: "You",
        time: new Date(Date.now() - 2700000),
        isSelf: true
      },
      {
        id: 3,
        content: "Meeting at 3 PM",
        sender: "Emma",
        time: new Date(),
        isSelf: false
      }
    ]
  }
];