import { AppRoutesEnum } from "@/routes/routes";
import { SignUpForm } from "@/validations/signUpValidations";
import { Label, Input, Button, buttonVariants } from "@components/ui/index";
import { Helmet } from "react-helmet-async";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { registerRestaurant } from "@/api/register-restaurant";
import { ErrorMessages, SuccessMessages } from "@/constants/generalConstants";
import { ArrowRight, HousePlusIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { formatPhoneNumber } from "@/utils/formatter";

export function SignUp() {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();
  const navigate = useNavigate();

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant,
  });

  async function handleSignUp({
    email,
    managerName,
    phone,
    restaurantName,
  }: SignUpForm) {
    try {
      await registerRestaurantFn({
        restaurantName,
        managerName,
        email,
        phone,
      });
      toast.success(SuccessMessages.RegisterRestaurant, {
        action: {
          label: "Login",
          onClick: () => {
            navigate(`${AppRoutesEnum.SIGN_IN}?email=${email}`);
          },
        },
      });
    } catch {
      toast.error(ErrorMessages.RegisterRestaurant);
    }
  }
  return (
    <>
      <Helmet title="Sign Up" />
      <div className="lg:p-8">
        <Link
          to={AppRoutesEnum.SIGN_IN}
          className={twMerge(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 border border-none hover:bg-transparent md:right-8 md:top-8",
          )}
        >
          Back to login <ArrowRight className="h-4 w-4" />
        </Link>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-center text-2xl font-semibold tracking-tight">
              Sign Up
            </h1>
            <p className="text-sm text-muted-foreground">
              Become a Partner and Start Selling
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Restaurant Name</Label>
              <Input
                placeholder="Enter your restaurant name"
                id="restaurantName"
                required
                autoCorrect="off"
                {...register("restaurantName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Manager name</Label>
              <Input
                placeholder="Enter your manager name"
                id="name"
                required
                autoCorrect="off"
                {...register("managerName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                placeholder="example@email.com"
                id="email"
                required
                {...register("email")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Phone</Label>
              <Controller
                name="phone"
                control={control}
                defaultValue=""
                render={({ field }: any) => (
                  <Input
                    placeholder="(00) 09999-9999"
                    id="phone"
                    {...field}
                    maxLength={15}
                    onChange={(e) => {
                      const formatted = formatPhoneNumber(e.target.value);
                      field.onChange(formatted);
                    }}
                  />
                )}
              />
            </div>
            <Button
              disabled={isSubmitting}
              className="w-full font-semibold"
              type="submit"
            >
              Get Started Now <HousePlusIcon className="h-3 w-3" />
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Registering signifies your agreement to our{" "}
              <a
                href={AppRoutesEnum.TERMS}
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                href={AppRoutesEnum.PRIVACY}
                className="underline underline-offset-4 hover:text-primary"
              >
                {" "}
                Privacy Policy
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
