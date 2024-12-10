import { IGetUserResponse } from "@/interfaces/user-data";
import { ApiRoutesEnum } from "@/routes/routes";
import { HttpResponse, http } from "msw";

export const getUserMock = http.get<never,never,IGetUserResponse>(ApiRoutesEnum.USER, () => {
  return HttpResponse.json({
    id: 'custom-id',
    name: 'Skittz',
    email: 'skittz@example',
    phone: '11982221249',
    role: 'manager',
    createdAt: new Date(),
    updatedAt: null,
  })
})