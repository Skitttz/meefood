export interface IUser  {
  email?: string;
  managerName?: string;
  restaurantName?: string;
  createdAt: string;
};

export interface IUserLoadingState {
  isLoadingProfile?: boolean;
  isLoadingRestaurant?: boolean;
}

export type IUserResume = Pick<IUser, 'restaurantName' | 'managerName' | 'email'> & IUserLoadingState;

export interface IGetUserResponse{
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: "manager" | "customer";
  createdAt: Date | null;
  updatedAt: Date | null;
}