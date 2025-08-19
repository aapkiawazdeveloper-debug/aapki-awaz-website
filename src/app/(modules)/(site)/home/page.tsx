import ArticleCard from "@/app/shared/components/site/ArticleCard";
import PageFilter from "@/app/shared/components/site/ui/PageFilter";
import PageHeader from "@/app/shared/components/site/ui/PageHeader";

const buttons = [
    {
        id: 1,
        title: "View More",
        link: "/"
    },
]

const HomePage = () => {
    return (
        <>
            <PageHeader pageTitle="News / Events" buttons={buttons} />

            <PageFilter />
            <div className="grid grid-cols-3 gap-4">
                {Array(13).fill(null).map((_, index) => (
                    <ArticleCard key={index} />
                ))}
            </div>
        </>
    )
}

export default HomePage;
