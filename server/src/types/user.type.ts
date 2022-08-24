export interface UserInfo {
  email: string;
  password: string;
  name: string;
  phone: number;
  role: string;
}
export interface UserData {
  _id: string;
  email: string;
  password: string;
  name: string;
  phone: number;
  role: string;
}

export interface LoginInfo {
  email: string;
  password: string;
}

export interface UserToUpdate {
  email?: string;
  password?: string;
  name?: string;
  phone?: number;
  role?: string;
}

export interface UserUpdate {
  userId: string;
  update: UserToUpdate;
}
