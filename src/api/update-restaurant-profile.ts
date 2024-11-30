import { ApiRoutesEnum } from "@/routes/routes";
import { api } from "@/lib/axios";
import {  IPutRestaurantProfileBody } from "@/interfaces/restaurant-data";

export async function updateRestaurantProfile({name,description} : IPutRestaurantProfileBody){
  await api.put(ApiRoutesEnum.PROFILE, {name,description})
}