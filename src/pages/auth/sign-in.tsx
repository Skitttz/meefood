import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignInForm } from "@/validations/signInValidations";
import { Label } from "@radix-ui/react-label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  async function handleSignIn(data: SignInForm) {
    toast.success("Authentication link sent to your email", {
      action: {
        label: "Resend",
        onClick: () => {
          console.log(data);
        },
      },
    });
  }
  return (
    <>
      <Helmet title="Sign In" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-center text-2xl font-semibold tracking-tight">
              Sign In
            </h1>
            <p className="text-sm text-muted-foreground">
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
