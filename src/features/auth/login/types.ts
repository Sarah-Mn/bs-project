export interface LoginRequest {
  username: string;
  password: string;
}

export type LoginApiResponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
};


export interface LoginFormInputs {
  username: string;
  password: string;
  rememberMe?: boolean;
}