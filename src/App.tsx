import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChatList } from './components/ChatList';
import { ChatArea } from './components/ChatArea';
import { chatsData } from './data/chats';
import { Chat, Message, ChatType } from './types/chat';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [chats, setChats] = useState<Chat[]>(chatsData);
  const [selectedChatId, setSelectedChatId] = useState(1);
  const [activeType, setActiveType] = useState<ChatType>('direct');

  const handleSendMessage = (chatId: number, content: string) => {
    const newMessage: Message = {
      id: Date.now(),
      content,
      sender: "You",
      time: new Date(),
      isSelf: true
    };

    setChats(prevChats => 
      prevChats.map(chat => 
        chat.id === chatId
          ? {
              ...chat,
              messages: [...chat.messages, newMessage],
              lastMessage: content,
              time: new Date()
            }
          : chat
      )
    );
  };

  const handleReadMessages = () => {
    setChats(prevChats =>
      prevChats.map(chat =>
        chat.id === selectedChatId
          ? { ...chat, unread: 0 }
          : chat
      )
    );
  };

  const filteredChats = chats.filter(chat => chat.type === activeType);
  const selectedChat = chats.find(chat => chat.id === selectedChatId);

  return (
    <ThemeProvider>
      <div className="flex">
        <Sidebar activeType={activeType} onTypeChange={setActiveType} />
        <ChatList 
          chats={filteredChats}
          selectedChatId={selectedChatId}
          onSelectChat={setSelectedChatId}
        />
        {selectedChat && (
          <ChatArea 
            chat={selectedChat}
            onSendMessage={handleSendMessage}
            onRead={handleReadMessages}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;