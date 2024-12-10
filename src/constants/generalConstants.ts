import { IOrderStatus, OrderConfig } from "@/interfaces/orders-data";
import colors from "tailwindcss/colors";

export const mockDatasetRevenue =   [
  { date: "01/12", receipt: 300 },
  { date: "02/12", receipt: 500 },
  { date: "03/12", receipt: 700 },
  { date: "04/12", receipt: 100 },
  { date: "05/12", receipt: 900 },
  { date: "06/12", receipt: 400 },
]; 

export const mockDatasetProduct = [
  { product: "Camarão", amount: 12 },
  { product: "Carne Seca", amount: 15 },
  { product: "Frango", amount: 15 },
  { product: "Vegano", amount: 25 },
];

export const COLORS_RECHARTS_ITEM = [
  colors.sky['500'],
  colors.amber['500'],
  colors.violet['500'],
  colors.rose['500'],
]

const defaultStyleStatus = 'h-2 w-2 rounded-full';
const sameStyleStatus = `${defaultStyleStatus} bg-amber-500`

export const COLORS_STATUS_ORDERS = {
  pending: `${defaultStyleStatus} bg-slate-400`,
  canceled: `${defaultStyleStatus} bg-rose-500`,
  processing: sameStyleStatus,
  delivering: sameStyleStatus,
  delivered: `${defaultStyleStatus} bg-emerald-500`,
  } as const

enum OrdersStatusEnum {
    PENDING = "pending",
    CANCELED = "canceled",
    PROCESSING = "processing",
    DELIVERING = "delivering",
    DELIVERED = "delivered",
  }
  
export const ORDERS_CONFIG: Record<OrdersStatusEnum, OrderConfig> = {
    [OrdersStatusEnum.CANCELED]: {
      label: "Canceled",
      status: "canceled",
    },
    [OrdersStatusEnum.DELIVERED]: {
      label: "Delivered",
      status: "delivered",
    },
    [OrdersStatusEnum.DELIVERING]: {
      label: "In delivering",
      status: "delivering",
    },
    [OrdersStatusEnum.PENDING]: {
      label: "In pending",
      status: "pending",
    },
    [OrdersStatusEnum.PROCESSING]: {
      label: "In processing",
      status: "processing",
    },
  };

enum MessageEnum {
  Authenticaded = "Authenticaded",
  RegisterRestaurant = "RegisterRestaurant",
  UpdateRestaurantProfile = 'UpdateRestaurantProfile',
  ErrorAuthenticaded = "ErrorAuthenticaded",
  ErrorRegisterRestaurant = "UnsuccessfulRegisterRestaurant",
  ErrorUpdateRestaurantProfile = 'ErrorUpdateRestaurantProfile',
  AnotherError = "AnotherError",
}

export const ErrorMessages = {
  [MessageEnum.ErrorAuthenticaded]: "Authentication failed. Please try again later.",
  [MessageEnum.RegisterRestaurant]: "The restaurant registration failed. Please try again later.",
  [MessageEnum.AnotherError]: "An unexpected error occurred. Please try again later.",
  [MessageEnum.ErrorUpdateRestaurantProfile]: "An error occurred while updating the restaurant profile. Please try again later.",
};

export const SuccessMessages = {
  [MessageEnum.RegisterRestaurant]: "Restaurant successfully registered!",
  [MessageEnum.Authenticaded]: "Successfully. Authentication link sent to your email",
  [MessageEnum.UpdateRestaurantProfile]: "The restaurant profile was successfully updated.",
};


export const disableButtonApprove = (status:IOrderStatus, anotherCondition: boolean):boolean =>  {
  return !['pending','processing'].includes(status) || anotherCondition
};