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