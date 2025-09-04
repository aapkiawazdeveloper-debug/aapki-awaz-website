import LinkButton from "./buttons/LinkButton";

const PageHeader: React.FC<{ pageTitle: string; buttons?: any[] }> = ({
  pageTitle,
  buttons = [],
}) => {
  return (
    <section className="bg-[#C13B3C] px-4 py-2 rounded-sm sm:rounded-lg mb-4">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-sm sm:text-lg -tracking-tight text-white font-poppins font-semibold">
          {pageTitle}
        </h1>

        {buttons.length > 0 &&
          buttons.map((button) => (
            <LinkButton
              key={button.id}
              title={button.title}
              link={button.link}
            />
          ))}
      </div>
    </section>
  );
};

export default PageHeader;
