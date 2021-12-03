export type UserType = {
  name: string;
};

export type UserStateType = {
  user: UserType;
};

export type EditUserOptions = {
  id: string | null;
  newName: string;
};
