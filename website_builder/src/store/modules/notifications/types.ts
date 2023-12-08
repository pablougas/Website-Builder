export interface Notification {
  id?: string;
  type: "error" | "success" | "warning";
  message: string;
  icon?: string;
  color?: string;
  action?: Record<string, unknown>;
}

export interface NotificationState {
  notificationQue: Notification[];
}
