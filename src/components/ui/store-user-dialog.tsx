import {
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "./dialog";
import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRestaurant } from "@/api/get-managed-restaurant";
import { useForm } from "react-hook-form";
import {
  StoreProfileSchema,
  storeUserSchema,
} from "@/validations/storeUserDialogValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateRestaurantProfile } from "@/api/update-restaurant-profile";
import { toast } from "sonner";
import { ErrorMessages, SuccessMessages } from "@/constants/generalConstants";
import { IGetRestaurantResponse } from "@/interfaces/restaurant-data";

function StoreUserDialog() {
  const { data: managedRestaurant } = useQuery({
    queryKey: ["managed-restaurant"],
    queryFn: getRestaurant,
    staleTime: Infinity,
  });

  const queryClient = useQueryClient();

  const { register, handleSubmit } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeUserSchema),
    // Use values from the API instead of defaultValues
    values: {
      name: managedRestaurant?.name ?? "",
      description: managedRestaurant?.description ?? "",
    },
  });

  function updateRestaurantProfileCache({
    name,
    description,
  }: StoreProfileSchema) {
    const cached = queryClient.getQueryData<IGetRestaurantResponse>([
      "managed-restaurant",
    ]);
    if (cached) {
      queryClient.setQueryData<IGetRestaurantResponse>(["managed-restaurant"], {
        ...cached,
        name,
        description,
      });
    }
    return { cached };
  }

  const { mutateAsync: updateRestaurantProfileFn } = useMutation({
    mutationFn: updateRestaurantProfile,
    onMutate({ name, description }) {
      const { cached } = updateRestaurantProfileCache({ name, description });
      return { previousProfile: cached };
    },
    onError(_, __, context) {
      if (context?.previousProfile) {
        updateRestaurantProfileCache(context.previousProfile);
      }
    },
  });

  async function handleUpdateRestaurantProfile(data: StoreProfileSchema) {
    try {
      await updateRestaurantProfileFn({
        name: data.name,
        description: data.description,
      });
      toast.success(SuccessMessages.UpdateRestaurantProfile);
    } catch {
      toast.error(ErrorMessages.ErrorUpdateRestaurantProfile);
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Update Shop Profile</DialogTitle>
        <DialogDescription>
          Modify the details of your business that customers can view.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit(handleUpdateRestaurantProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Name
            </Label>
            <Input className="col-span-3" id="name" {...register("name")} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Description
            </Label>
            <Textarea
              className="col-span-3"
              id="descritpion"
              {...register("description")}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"ghost"} type="button">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit" variant={"sucess"}>
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}

export { StoreUserDialog };
