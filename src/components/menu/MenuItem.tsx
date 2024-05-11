import Link from "next/link";

interface MenuItemProps {
  title: string;
  href?: string; // Permitir href opcional para ações sem navegação
  className?: string;
  onClick?: () => void; // Adicionar onClick opcional
}
const MenuItem = ({
  title,
  href = "#",
  className = "",
  onClick,
}: MenuItemProps) => {
  return (
    <li className={`mx-2 md:mx-4 text-xl md:text-2xl ${className}`}>
      {onClick ? (
        <button
          onClick={onClick}
          className="text-white hover:text-gray-500 hover:bg-gray-100 px-2 md:px-0"
        >
          {title}
        </button>
      ) : (
        <Link
          href={href}
          className="text-white hover:text-gray-500 hover:bg-gray-100 px-2 md:px-0"
        >
          {title}
        </Link>
      )}
    </li>
  );
};

export default MenuItem;
