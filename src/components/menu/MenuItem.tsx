import Link from 'next/link';

const MenuItem = ({ title, href, className }) => {
  return (
    <li className={`mx-4 text-2xl ${className}`}>
      <Link href={href} className="text-white hover:text-gray-500 hover:bg-gray-100">
        {title}
      </Link>
    </li>
  );
};

export default MenuItem;
