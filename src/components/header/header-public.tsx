import MeefoodLogo from "@/assets/meefood.png";
import { AppRoutesEnum } from "@/routes/routes";
import { Link } from "react-router-dom";

function HeaderPublic() {
  return (
    <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
      <Link
        to={AppRoutesEnum.SIGN_IN}
        className="flex items-center gap-2 text-lg font-medium text-foreground"
      >
        <img src={MeefoodLogo} className="h-8 w-8" alt="Logo Meefood" />
        <span className="font-semibold">Meefood</span>
      </Link>
      <footer className="text-sm">
        Panel Partner &copy; Meefood - {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export { HeaderPublic };
