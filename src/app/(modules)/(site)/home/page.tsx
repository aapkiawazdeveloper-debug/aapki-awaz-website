import ArticleCard from "@/app/shared/components/site/ArticleCard";

const HomePage = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {Array(13).fill(null).map((_, index) => (
                    <ArticleCard key={index} />
                ))}
            </div>
        </>
    )
}

export default HomePage;
