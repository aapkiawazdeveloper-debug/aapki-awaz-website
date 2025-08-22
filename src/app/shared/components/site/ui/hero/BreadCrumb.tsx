import Link from "next/link";

const BreadCrumb: React.FC<{
  items: {
    label: string;
    href?: string;
  }[];
}> = ({ items }) => {
  return (
    <nav className="text-sm text-gray-400">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} className="inline-flex items-center">
            {!isLast && item.href ? (
              <Link href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-300">{item.label}</span>
            )}

            {!isLast && <span className="mx-2">/</span>}
          </span>
        );
      })}
    </nav>
  );
};

export default BreadCrumb;
