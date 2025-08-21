import CustomImage from "./CustomImage"

const images = [
    {
        id: 1,
        src: "/assets/images/logo.jpg",
        height: 1626,
        width: 263,
        alt: "ad image",
    },
    {
        id: 2,
        src: "/assets/images/Electronics_Guide.jpg",
        height: 1600,
        width: 482,
        alt: "ad image",
    },
]

const AdBanner = () => {
    return (
        <div className="flex items-center flex-wrap sm:flex-nowrap gap-2 px-6 py-2">
            {images.map((image) => (
                <CustomImage key={image.id} src={image.src} width={image.width} height={image.height} alt={image.alt} />
            ))}
        </div>
    )
}

export default AdBanner
