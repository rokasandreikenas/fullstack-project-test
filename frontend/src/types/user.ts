export interface User {
  _id: string;
  name: string;
  age: string;
  email: string;
}

export interface UserRequest {
  email: string;
  password: string;
}

export interface UserResponse {
  status: string;
  token: string;
  user: User;
}
