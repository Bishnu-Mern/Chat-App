export interface PopupNotificationProps {
  type: "success" | "error";
  message: string;
}

export interface NotificationContextProps {
  showNotification: (message: string, isSuccess: boolean) => void;
  hideNotification: () => void;
  notification: { message: string; isSuccess: boolean } | null;
}
