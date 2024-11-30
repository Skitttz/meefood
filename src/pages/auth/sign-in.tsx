import { signIn } from "@/api/sign-in";
import { Label, Input, Button, buttonVariants } from "@components/ui/index";
import { SignInForm } from "@/validations/signInValidations";
import { useMutation } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import { AppRoutesEnum } from "@/routes/routes";
import { ErrorMessages, SuccessMessages } from "@/constants/generalConstants";
import { Link, useSearchParams } from "react-router-dom";

export function SignIn() {
  const [searchParams] = useSearchParams();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get("email") ?? "",
    },
  });

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  });

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email });
      toast.success(SuccessMessages.Authenticaded, {
        action: {
          label: "Resend",
          onClick: () => handleSignIn(data),
        },
      });
    } catch {
      toast.error(ErrorMessages.ErrorAuthenticaded);
    }
  }
  return (
    <>
      <Helmet title="Sign In" />
      <div className="lg:p-8">
        <Link
          to={AppRoutesEnum.SING_UP}
          className={twMerge(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8",
          )}
        >
          Register Restaurant
        </Link>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-center text-2xl font-semibold tracking-tight">
              Sign In
            </h1>
            <p className="text-muted-foreground text-sm">
              Monitor your performance and sales metrics
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                placeholder="Enter your email"
                className="transition-all"
                id="email"
                {...register("email")}
              />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Login
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
