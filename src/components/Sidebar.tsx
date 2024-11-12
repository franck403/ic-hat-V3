import { ChatBubbleLeftIcon, UserGroupIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { SettingsMenu } from './SettingsMenu';
import type { ChatType } from '../types/chat';

type SidebarProps = {
  activeType: ChatType;
  onTypeChange: (type: ChatType) => void;
};

export function Sidebar({ activeType, onTypeChange }: SidebarProps) {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <div className="w-16 bg-gray-100 dark:bg-gray-800 h-screen flex flex-col items-center py-4">
        <div className="flex-1 flex flex-col items-center space-y-4">
          <button 
            className={`p-2 rounded-full ${
              activeType === 'direct' 
                ? 'bg-blue-500 text-white' 
                : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400'
            }`}
            onClick={() => onTypeChange('direct')}
          >
            <ChatBubbleLeftIcon className="w-6 h-6" />
          </button>
          <button 
            className={`p-2 rounded-full ${
              activeType === 'group' 
                ? 'bg-blue-500 text-white' 
                : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400'
            }`}
            onClick={() => onTypeChange('group')}
          >
            <UserGroupIcon className="w-6 h-6" />
          </button>
        </div>
        <button 
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => setIsSettingsOpen(true)}
        >
          <Cog6ToothIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </button>
      </div>
      
      <SettingsMenu 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </>
  );
}