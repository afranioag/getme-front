import useSession from "@/hooks/session/use-session/use-session";
import MenuItem from "./MenuItem";

const MenuLoged = () => {
  const session = useSession();

  const userName = "Usuário";

  return (
    <ul className="flex justify-center">
      <MenuItem title={userName} href="/" />
      <MenuItem title="Perfil" href="/" />
      <MenuItem title="Sair" href="/" />
      <MenuItem title="Sobre" href="/" />
    </ul>
  );
};

export default MenuLoged;
