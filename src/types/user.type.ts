export interface IUser {
  _id: string;
  name: string;
  email: string;
}

export interface IUserContext{
  user: Partial<IUser> | null | undefined;
  isAuthenticated: boolean;
  isLoading: boolean;
  reFetchUser: () => Promise<void>;
  logout: () => Promise<void>;
}