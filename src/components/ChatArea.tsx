import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';
import { useState, useRef, useEffect } from 'react';
import { Chat } from '../types/chat';

type ChatAreaProps = {
  chat: Chat;
  onSendMessage: (chatId: number, content: string) => void;
  onRead: () => void;
};

export function ChatArea({ chat, onSendMessage, onRead }: ChatAreaProps) {
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat.messages]);

  useEffect(() => {
    const handleScroll = () => {
      if (chat.unread > 0) {
        onRead();
      }
    };

    const chatArea = chatAreaRef.current;
    if (chatArea) {
      chatArea.addEventListener('scroll', handleScroll);
      return () => chatArea.removeEventListener('scroll', handleScroll);
    }
  }, [chat.unread, onRead]);

  useEffect(() => {
    if (chat.unread > 0) {
      onRead();
    }
  }, [chat.id, chat.unread, onRead]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    onSendMessage(chat.id, newMessage.trim());
    setNewMessage('');
  };

  return (
    <div className="flex-1 flex flex-col h-screen bg-white dark:bg-gray-800">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{chat.name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {chat.type === 'group' ? `${chat.participants} participants` : 'Direct message'}
        </p>
      </div>
      
      <div ref={chatAreaRef} className="flex-1 overflow-y-auto p-4 space-y-4">
        {chat.messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isSelf ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.isSelf
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
              }`}
            >
              {!message.isSelf && (
                <p className="text-sm font-medium mb-1">{message.sender}</p>
              )}
              <p className="text-sm">{message.content}</p>
              <p className="text-xs mt-1 opacity-70">
                {format(message.time, 'HH:mm')}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 rounded-full border border-gray-300 dark:border-gray-600 px-4 py-2 focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <button 
            type="submit"
            className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            <PaperAirplaneIcon className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}