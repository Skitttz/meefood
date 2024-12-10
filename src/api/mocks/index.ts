import { env } from "@/env";
import {setupWorker} from "msw/browser"
import { signInMock, registerRestaurantMock, getDayOrdersAmountMock, getMonthOrdersAmountMock, getMonthCanceledOrdersAmountMock,getMonthRevenueMock,getDailyRevenueInPeriodMock, getManagedRestaurantMock ,getUserMock ,updateProfileMock, getPopularProductMock, getOrdersMock,getOrderDetailsMock } from "./allMocks";

export const worker = setupWorker(signInMock,registerRestaurantMock,getDayOrdersAmountMock,getMonthOrdersAmountMock,getMonthCanceledOrdersAmountMock,getMonthRevenueMock,getDailyRevenueInPeriodMock, getManagedRestaurantMock, getUserMock,getPopularProductMock, updateProfileMock, getOrdersMock,getOrderDetailsMock);
const isEnvTest: boolean = env.MODE === 'test';

export async function enableMSW(){
  if(isEnvTest) {
    return await worker.start();
  }
  return;
}