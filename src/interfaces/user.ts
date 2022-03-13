export interface User {
  id?: string;
  email?: string;
  username?: string;
  registration_date?: string;
  rating?: number;
}

export type UserKeys = keyof User;
