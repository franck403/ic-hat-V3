import { format } from 'date-fns';
import { clsx } from 'clsx';
import { Chat } from '../types/chat';

type ChatListProps = {
  chats: Chat[];
  onSelectChat: (chatId: number) => void;
  selectedChatId: number;
};

export function ChatList({ chats, onSelectChat, selectedChatId }: ChatListProps) {
  return (
    <div className="w-64 border-r border-gray-200 dark:border-gray-700 h-screen bg-white dark:bg-gray-800">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Chat</h1>
      </div>
      <div className="overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={clsx(
              "p-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer",
              selectedChatId === chat.id && "bg-blue-50 dark:bg-blue-900"
            )}
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-medium text-gray-900 dark:text-white">{chat.name}</h3>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {format(chat.time, 'HH:mm')}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 truncate">{chat.lastMessage}</p>
            {chat.unread > 0 && (
              <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-blue-500 rounded-full mt-1">
                {chat.unread}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}