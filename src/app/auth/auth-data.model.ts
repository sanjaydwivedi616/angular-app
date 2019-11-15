export interface CreateLoginUser {
  email: string;
  fname : string,
  lname : string,
  mobile : number,
  password: string;
  conpassword : string
  
}
export interface AuthData {
  email: string;
  password: string;
}

