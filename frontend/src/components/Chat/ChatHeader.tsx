import React, { useEffect } from "react";
import { useSelectedUser } from "../../contexts/SelectedUserContext";
import { splitCamelCase } from "../../utils/helper";
import telephoneIcon from "../../assets/telephone.png";
import videoIcon from "../../assets/video.png";
import searchIcon from "../../assets/magnifiying-glass.png";

const ChatHeader: React.FC = () => {
  const { selectedUser } = useSelectedUser();

  if (!selectedUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <div className="p-[0.68rem] flex justify-between">
        <div className="flex flex-col">
          <div className="text-sm font-medium">
            {splitCamelCase(selectedUser?.username ?? "")}
          </div>
          <div>
            {selectedUser?.active ? (
              <div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1 my-2"></div>
                  <div className="text-xs font-medium opacity-50">Online</div>
                </div>
              </div>
            ) : (
              <div className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-1 my-1"></div>
                <div className="text-xs font-medium opacity-50">Offline</div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between w-24 pt-2">
          <img src={telephoneIcon} alt="callIcon" className="max-w-4 h-4" />
          <img src={videoIcon} alt="videoCallIcon" className="max-w-4 h-4" />
          <img src={searchIcon} alt="searchIcon" className="max-w-4 h-4" />
        </div>
      </div>
      <div className='h-[1px] bg-slate-100'>
        <hr/>
      </div>
    </div>
  );
};

export default ChatHeader;
