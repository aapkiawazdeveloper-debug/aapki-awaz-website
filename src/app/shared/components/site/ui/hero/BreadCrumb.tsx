import Link from "next/link";

interface BreadCrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
  mode?: "hero" | "bollywood";
  // hero = first link only
  // bollywood = last link only
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ items, mode = "hero" }) => {
  return (
    <nav className="text-sm">
      {items.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === items.length - 1;

        let content;

        if (mode === "hero") {
          if (isFirst && item.href) {
            content = (
              <Link href={item.href} className="text-blue-400">
                {item.label}
              </Link>
            );
          } else {
            content = <span className="text-gray-400">{item.label}</span>;
          }
        } else {
          if (isLast && item.href) {
            content = (
              <Link
                href={item.href}
                className="text-blue-400 font-medium"
              >
                {item.label}
              </Link>
            );
          } else {
            content = <span className="text-gray-400">{item.label}</span>;
          }
        }

        return (
          <span key={index} className="inline-flex items-center">
            {content}
            {!isLast && <span className="mx-2 text-gray-500">/</span>}
          </span>
        );
      })}
    </nav>
  );
};

export default BreadCrumb;
