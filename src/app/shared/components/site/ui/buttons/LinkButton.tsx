import Link from "next/link"

const LinkButton: React.FC<{ title: string; link: string; }> = ({ title, link }) => {
    return (
        <Link href={link} className="text-white text-sm font-normal">
            {title}
        </Link >
    )
}

export default LinkButton;
