export interface IGetRestaurantResponse{
  id: string;
  name: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  description: string | null;
  managerId: string | null;
}

export interface IPostRestaurantBody{
  restaurantName:string;
  managerName:string;
  email:string;
  phone:string;
}

export interface IPutRestaurantProfileBody{
  name:string;
  description:string | null;
}