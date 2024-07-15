import React from 'react';
import Sidebar from '../components/SideBar/Sidebar';
import Chat from '../components/Chat/Chat';
import UserDetails from '../components/UserDetails/UserDetails'

const ChatPage: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Chat />
      <UserDetails />
    </div>
  );
};

export default ChatPage;
