import Breadcrumbs from "@/app/shared/components/admin/Breadcrumbs";

const CategoriesPage = () => {
  const breadcrumbItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Categories" },
  ];
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} pageTitle="Categories" />
    </>
  );
};

export default CategoriesPage;
