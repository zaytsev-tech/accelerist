export interface Profile {
  accessToken: string;
  error: string;
  user: User;
  isAuthorized: boolean;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isAuthorized: boolean;
  imported: boolean;
  teamId: string;
  role: string;
  linkedinLink?: string | null;
  isReceivingNotifications: boolean;
  avatarKey?: string | null;
  loggedInAt: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: boolean | null;
}

export interface AuthData {
  email: string;
  password: string;
}
