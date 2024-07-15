import React from 'react';

const ChatMessages: React.FC = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default ChatMessages;
