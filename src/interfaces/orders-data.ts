import { COLORS_STATUS_ORDERS } from "@/constants/generalConstants"

export interface IGetOrdersResponse{
  orders:{
    orderId: string
    createdAt: Date
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | "delivered"
    customerName: string
    total: number
  }[]
  meta:{
    pageIndex:number
    perPage:number
    totalCount:number
  }
}

export interface IGetOrderDetailsResponse{
    id: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | "delivered"
    totalInCents: string
    customer: {
      name:string
      email: string
      phone: string | null
    }
    orderItems:{
      id: string
      priceInCents: string
      quantity: number
      product:{
        name:string
      }
    }[]
}

interface OrdersAmount {
  amount: number;
}
interface DiffFromPreviousPeriod {
  diffFromLastMonth: number;
}
interface DiffFromYesterday {
  diffFromYesterday: number;
}

export interface IGetDayOrdersAmountResponse extends OrdersAmount, DiffFromYesterday {}

export interface IGetMonthOrdersAmountResponse extends OrdersAmount, DiffFromPreviousPeriod {}

export interface IGetMonthCanceledOrdersAmountResponse extends OrdersAmount, DiffFromPreviousPeriod {}

export interface IGetMonthRevenueResponse extends DiffFromPreviousPeriod {receipt: number}

export type IGetPopularProducts = {
  amount: number
  product: string
}[];

export interface IGetDailyRevenueInPeriodQuery {
  from?: Date
  to?: Date
}

export type IGetDailyRevenueInPeriodResponse = {
  date: string
  receipt: number
}[];


export interface IOrderTableRow{
  order:{
    orderId: string
    createdAt: Date
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | "delivered"
    customerName: string
    total: number
  }
}

export interface IOrderDetails {
  orderId: string;
  isOpen: boolean;
}

export interface IGetOrdersQuery{
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

export interface IOrderDetailsParams{
  orderId: string;
}

interface IOrderActionParams {
  orderId: string;
}

export interface IOrderApproveParams extends IOrderActionParams{}
export interface IOrderCancelParams extends IOrderActionParams{}
export interface IOrderDispatchParams extends IOrderActionParams{}
export interface IOrderDeliverParams extends IOrderActionParams{}



export type IOrderStatus =
| 'pending'
| 'canceled'
| 'processing'
| 'delivering'
| 'delivered'


export interface IStatus {
  statusColor: keyof typeof COLORS_STATUS_ORDERS;
}

export type OrderConfig = {
  status: IStatus['statusColor'],
  label: string;
}