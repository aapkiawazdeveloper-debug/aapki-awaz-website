import CustomImage from "../CustomImage";

const images = [
    {
        id: 1,
        src: "/assets/images/Shaadi_Vivah_India___Video_Ad_17_12_20190.jpg",
        height: 1626,
        width: 263,
        alt: "ad image",
    },
    {
        id: 2,
        src: "/assets/images/Ad_Size_250_600_2.jpg",
        height: 1626,
        width: 263,
        alt: "ad image",
    }
]

const Sidebar = () => {
    return (
        <aside className="flex flex-col gap-4">
            {images.map((image) => (
                <CustomImage key={image.id} src={image.src} width={image.width} height={image.height} alt={image.alt} />
            ))}
        </aside>
    )
}

export default Sidebar;
