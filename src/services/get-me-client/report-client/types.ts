export interface UserCreationData {
  name: string;
  document: string;
  phone: string;
  email: string;
  password: string;
  passwordConfirm: string;
  image: string;
}

export interface UserUpdateData extends UserCreationData {
  id: string;
}
