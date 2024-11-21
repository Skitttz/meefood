import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RoutesEnum } from "@/routes/routes";
import { SignUpForm } from "@/validations/signUpValidations";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();
  const navigate = useNavigate();

  async function handleSignUp(data: SignUpForm) {
    toast.success("Restaurant Registered Successfully", {
      action: {
        label: "Login",
        onClick: () => {
          navigate(RoutesEnum.SIGN_IN);
        },
      },
    });
  }
  return (
    <>
      <Helmet title="Sign Up" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-center text-2xl font-semibold tracking-tight">
              Sign In
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
                {...register("restaurantName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Manager name</Label>
              <Input
                placeholder="Enter your manager name"
                id="name"
                {...register("managerName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                placeholder="Enter your email"
                id="email"
                {...register("email")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Phone</Label>
              <Input
                placeholder="Enter your phone"
                id="email"
                {...register("phone")}
              />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Complete Registration
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Registering signifies your agreement to our{" "}
              <a
                href=""
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                href=""
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
