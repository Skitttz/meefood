import { Link, LinkProps, useLocation } from "react-router-dom";

export type NavLinkProps = LinkProps;

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation();
  const isCurrentPath = pathname === props.to;
  return (
    <Link
      data-current={isCurrentPath}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  );
}
