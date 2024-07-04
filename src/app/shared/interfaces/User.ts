export interface User {
  email: string;
  password?: string;
}

export interface NewUser extends User {
  name: string;
}

export interface userResponse extends User{
  token: string;
}

