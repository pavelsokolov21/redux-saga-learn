import { FC } from "react";
import { useTable } from "react-table";
import { Cell, HeaderCell } from "./components";
import { RemovingCell } from "./components/removing-cell";
import { StyledTable } from "./table.styles";

export interface Column {
  Header: string;
  accessor: string;
}

interface Props {
  columns: Column[];
  data: Record<string, string>[];
  hasRemovingRow?: boolean;
}

export const Table: FC<Props> = ({ columns, data, hasRemovingRow }) => {
  const { getTableProps, getTableBodyProps, prepareRow, headerGroups, rows } =
    useTable({ columns, data });

  return (
    <StyledTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <HeaderCell {...column.getHeaderProps()}>
                {column.render("Header")}
              </HeaderCell>
            ))}
            {hasRemovingRow && <HeaderCell colSpan={1} role="columnheader" />}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <Cell {...cell.getCellProps()}>{cell.render("Cell")}</Cell>
              ))}
              {hasRemovingRow && <RemovingCell />}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};
