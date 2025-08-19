import Image from "next/image"

const CustomImage: React.FC<{ src: string; width: number; height: number; alt: string }> =
({ src, width, height, alt }) => {
    return (
        <Image src={src} className="object-cover" width={width} height={height} alt={alt} />
    )
}

export default CustomImage;