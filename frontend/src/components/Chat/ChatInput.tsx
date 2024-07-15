import React from 'react';

const ChatInput: React.FC = () => {
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

export default ChatInput;
