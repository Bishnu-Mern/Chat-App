import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className='p-4'>
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-1 border border-gray-300 rounded-lg"
      />
    </div>
  );
};

export default SearchBar;
