const InnerHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <h2 className="text-base text-[#C13B3C] font-medium mb-2">{title}</h2>
    </>
  );
};

export default InnerHeader;
