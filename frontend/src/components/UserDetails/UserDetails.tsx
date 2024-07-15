import React from "react";
import { useSelectedUser } from "../../contexts/SelectedUserContext";
import { splitCamelCase } from "../../utils/helper";

const UserDetails: React.FC = () => {
  const { selectedUser } = useSelectedUser();
  return (
    <div className="w-[22%] overflow-auto h-full">
      <div className="flex items-center justify-center p-[1.45rem]">
        <span className="text-sm font-medium">Information</span>
      </div>
      <div className="w-full h-[1px] bg-slate-100">
        <hr />
      </div>
      <div className="flex items-center justify-center py-5">
        <img
          alt="Profile"
          className="w-20 h-20 overflow-hidden rounded-full "
          src={selectedUser?.profilePhotoUrl}
        />
      </div>
      <div>
        <span className="text-sm font-semibold flex items-center justify-center">
          {splitCamelCase(selectedUser?.username ?? "")}
        </span>
        <span className="text-xs font-normal opacity-40 flex items-center justify-center p-2">
          {selectedUser?.email ?? `${selectedUser?.username}@gamil.com`}
        </span>
        <span className="text-xs font-normal flex items-center justify-center">
          {selectedUser?.phone}
        </span>
      </div>
      <div className="w-full h-[1px] bg-slate-100 my-8">
        <hr />
      </div>
    </div>
  );
};

export default UserDetails;
