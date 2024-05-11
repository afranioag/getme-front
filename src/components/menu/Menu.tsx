import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <ul className="flex justify-center flex-wrap">
      <MenuItem title="Login" href="/login" />
      <MenuItem title="Criar conta" href="/signup" />
      <MenuItem title="Sobre" href="/" />
    </ul>
  );
};

export default Menu;
