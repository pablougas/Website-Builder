export interface User {
  id?: string;
  full_name?: string;
  username: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  avatar: string;
}

export interface UserState {
  currentUser: User | undefined;
  error: boolean;
}
