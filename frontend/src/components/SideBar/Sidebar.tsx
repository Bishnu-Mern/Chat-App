import React from 'react';
import SearchBar from './SearchBar';
import UserList from './UserList';

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/3 h-screen bg-neutral-50 overflow-hidden border-r-2">
      <SearchBar />
      <div className='h-[1px] bg-slate-100'>
        <hr/>
      </div>
      <UserList />
    </div>
  );
};

export default Sidebar;
