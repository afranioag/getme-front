import { useRouter } from "next/router";
import useSession from "@/hooks/session/use-session/use-session";
import MenuItem from "./MenuItem";

const MenuLoged = () => {
  const session = useSession();
  const router = useRouter();

  const onLogout = () => {
    console.log("Executing logout...");
    session.clearSession();
    router.push("/").then(() => {
      window.location.reload();
    });
  };

  return (
    <ul className="flex justify-center">
      <MenuItem title="Usuário" href="/" />
      <MenuItem title="Perfil" href="/" />
      <MenuItem title="Sair" onClick={onLogout} />
      <MenuItem title="Sobre" href="/" />
      <MenuItem title="Meu cadastros" href="/myreports" />
    </ul>
  );
};

export default MenuLoged;
