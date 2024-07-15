import React, { useContext } from "react";
import { User } from "../../interfaces/user";
import { splitCamelCase } from "../../utils/helper";
import { useSelectedUser } from "../../contexts/SelectedUserContext";

const UserItem: React.FC<User> = (props) => {
  const { setSelectedUser } = useSelectedUser();
  const { id, profilePhotoUrl, highlighted, username, active, lastSeen, setHighlightedUser } = props;
  const currentTime = new Date();
  const timeDifference = currentTime.getTime() - lastSeen.getTime();
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));

  let timeAgo;
  if (minutesDifference < 60) {
    timeAgo = `${minutesDifference} minutes ago`;
  } else {
    const hoursDifference = Math.floor(minutesDifference / 60);
    timeAgo = `${hoursDifference} hour${hoursDifference !== 1 ? "s" : ""} ago`;
  }

  const handleClick = () => {
    console.log(props)
    setSelectedUser(props);
    if (setHighlightedUser) {
      setHighlightedUser(Number(id));
    }

  };

  return (
    <div
      className={highlighted ? 'py-4 flex flex-col bg-gray-100 rounded' : "py-4 flex flex-col hover:bg-gray-100 rounded cursor-pointer"}
      onClick={()=> handleClick()}
    >
      <div className="flex items-center">
        <div className="w-10 h-10 overflow-hidden rounded-full">
          <img alt="Profile" className="object-cover" src={profilePhotoUrl} />
        </div>
        <div className="flex flex-col pl-4">
          <div className="font-medium">{splitCamelCase(username)}</div>
          <div className="text-xs opacity-50">Last seen {timeAgo}</div>
        </div>
      </div>
      <div className="font-normal text-sm opacity-50 pt-4">Hey, whatsup</div>
    </div>
  );
};

export default UserItem;
