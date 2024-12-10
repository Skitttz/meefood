import { IGetOrderDetailsResponse, IOrderDetailsParams } from "@/interfaces/orders-data";
import { ApiRoutesEnum } from "@/routes/routes";
import { HttpResponse, http } from "msw";

export const getOrderDetailsMock = http.get<IOrderDetailsParams,never,IGetOrderDetailsResponse>(ApiRoutesEnum.ORDERS_WITH_PARAMS, ({params}) => {
  return HttpResponse.json({
    id: params.orderId,
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: '7000',
    customer:{
      name: "Skittz",
      email: "skittz@example.com",
      phone: '11982221249',
    },
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: '1000',
        product: {name: 'Acaraje Picante'},
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: '3000',
        product: {name: 'Pastel de Queijo'},
        quantity: 2,
      }
    ]
  })
})