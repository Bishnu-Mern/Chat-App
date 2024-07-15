import React, { useState } from 'react';
import { dummyUsers } from '../../config/dummyUser';
import { User } from '../../interfaces/user';
import UserItem from './UserItem';

const UserList: React.FC = () => {
  const [userList, setUserList] = useState<User[]>(dummyUsers)
  const setHighlightedUser = (id:number)=> {
    setUserList((prev: User[])=> {
      return prev.map((each:any)=> {
        if(each.id == id){
          return {
            ...each,
            highlighted: true
          }
        }else return {
          ...each,
          highlighted: false
        }
      })
    })
  }
  return (
    <div className='overflow-auto h-full py-4 pl-4'>
      {userList.map((user: User) => (
        <UserItem key={user.id} {...user} setHighlightedUser={setHighlightedUser} />
      ))}
    </div>
  );
};

export default UserList;
