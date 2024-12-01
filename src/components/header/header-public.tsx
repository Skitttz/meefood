import MeefoodLogo from "@/assets/meefood.png";
import { AppRoutesEnum } from "@/routes/routes";
import { Link } from "react-router-dom";

function HeaderPublic() {
  return (
    <div className="border-foreground/5 text-muted-foreground bg-side-menu flex h-full flex-col justify-between border-r bg-cover p-10">
      <Link
        to={AppRoutesEnum.SIGN_IN}
        className="text-foreground flex items-center gap-2 text-lg font-medium"
      >
        <img src={MeefoodLogo} className="h-8 w-8" alt="Logo Meefood" />
        <span className="font-semibold">Meefood</span>
      </Link>
      <footer className="flex text-sm">
        <p className="bg-secondary/80 rounded-md p-1 text-slate-200">
          Panel Partner &copy; Meefood - {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export { HeaderPublic };
