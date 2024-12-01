import { AppRoutesEnum } from "@/routes/routes";
import { Link, useRouteError } from "react-router-dom";

export function Error() {
  const error = useRouteError() as Error;
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Wait, something wrong...</h1>
      <p className="text-accent-foreground">
        It seems that an error occurred below. You can find the details:
      </p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <p className="text-accent-foregroundt">
        Back to
        <Link
          to={AppRoutesEnum.BASE}
          className="text-sky-600 dark:text-sky-400"
        >
          Home
        </Link>
      </p>
    </div>
  );
}
