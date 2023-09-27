export type User = {
  name: string;
  email: string;
};
export enum Sevirity {
  HIGH = "high",
  MEDIUM = "medium",
  LOW = "low",
}
export enum EventTypes {
  LOGIN_FAIL = "loginFail",
  LOGIN = "login",
  LOGOUT = "logout",
  FILE_DOWNLOAD = "fileDownload",
  OPEN_BROWSER = "openBrowser",
}

export type Event = {
  id: string;
  user: User;
  os: "windows" | "mac";
  eventType: EventTypes;
  severity: Sevirity;
  time: Date;
};
