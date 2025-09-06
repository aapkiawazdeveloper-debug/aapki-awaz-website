export const getGridClass = (dataColumn: string) => {
  switch (dataColumn) {
    case "1":
      return "grid-cols-1";
    case "2":
      return "sm:grid-cols-2";
    case "3":
      return "sm:grid-cols-2 md:grid-cols-3";
    case "4":
      return "sm:grid-cols-2 md:grid-cols-4";
    case "6":
      return "sm:grid-cols-2 md:grid-cols-6";
    default:
      return "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  }
};
