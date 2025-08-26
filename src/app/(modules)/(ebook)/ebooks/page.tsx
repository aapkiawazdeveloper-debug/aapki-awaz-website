import Pagination from "@/app/shared/components/site/Pagination";
import BookCard from "@/app/shared/components/site/ui/cards/BookCard";
import PageHeader from "@/app/shared/components/site/ui/PageHeader";

const Ebooks = () => {
  return (
    <>
      <PageHeader pageTitle="E-Books" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {Array(20)
          .fill(null)
          .map((_, index) => (
            <BookCard key={index} />
          ))}
      </div>

      <Pagination />
    </>
  );
};

export default Ebooks;
