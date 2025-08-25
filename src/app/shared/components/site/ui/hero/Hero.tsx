import BreadCrumb from "./BreadCrumb";

const Hero: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="relative w-full h-64 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center text-center">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
        {title}
      </h1>

      {/* Breadcrumb */}
      <div className="mt-3">
        <BreadCrumb
          mode="hero"
          items={[{ label: "Home", href: "/" }, { label: title }]}
        />
      </div>
    </div>
  );
};

export default Hero;
