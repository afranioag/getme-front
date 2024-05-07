import Link from "next/link";

interface MenuItemProps {
  title: string;
  href: string;
  className?: string;
}

const MenuItem = ({ title, href, className = "" }: MenuItemProps) => {
  return (
    <li className={`mx-4 text-2xl ${className}`}>
      <Link
        href={href}
        className="text-white hover:text-gray-500 hover:bg-gray-100"
      >
        {title}
      </Link>
    </li>
  );
};

export default MenuItem;
