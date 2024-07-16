import React, { useEffect, useState } from "react";
import { useNotification } from "../contexts/NotificationContext";
import { PopupNotificationProps } from "../interfaces/popup";

const PopupNotification: React.FC<PopupNotificationProps> = ({
  type,
  message,
}) => {
  const { notification, clearNotification } = useNotification();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (notification) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
        clearNotification();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [notification, clearNotification]);

  if (!notification || !visible) {
    return null;
  }

  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-md text-white ${
        notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      {notification.message}
    </div>
  );
};

export default PopupNotification;
