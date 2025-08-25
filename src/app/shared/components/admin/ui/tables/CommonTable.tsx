import { ReactNode } from "react";

export interface Column<T> {
  key: keyof T;
  label: string;
  render?: (row: T) => ReactNode;
}

interface CommonTableProps<T> {
  columns: Column<T>[];
  data: T[];
  actions?: (row: T) => ReactNode;
  className?: string;
  maxHeight?: string;
}

const CommonTable = <T extends { id: string | number }>({
  columns,
  data,
  actions,
  className = "",
  maxHeight,
}: CommonTableProps<T>) => {
  return (
    <div
      className={`overflow-auto rounded-lg shadow-md ${className}`}
      style={{ maxHeight }}
    >
      <table className="min-w-max w-full border-collapse">
        <thead className="bg-gray-200 sticky top-0">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key as string}
                className="text-left text-gray-600 px-6 py-4 text-[15px] font-semibold tracking-wide whitespace-nowrap"
              >
                {col.label}
              </th>
            ))}
            {actions && (
              <th className="text-left text-gray-600 px-6 py-4 text-[15px] font-semibold tracking-wide whitespace-nowrap">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr
                key={row.id}
                className={`hover:bg-gray-50 transition ${
                  rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                } last:border-0`}
              >
                {columns.map((col) => (
                  <td
                    key={col.key as string}
                    className="px-6 py-3 text-sm text-gray-700 whitespace-nowrap"
                  >
                    {col.render ? col.render(row) : String(row[col.key])}
                  </td>
                ))}
                {actions && (
                  <td className="px-6 py-3 whitespace-nowrap">
                    {actions(row)}
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length + (actions ? 1 : 0)}
                className="px-6 py-4 text-center text-gray-500"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CommonTable;
