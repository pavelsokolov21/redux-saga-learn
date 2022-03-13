import { useCallback, useEffect } from "react";
import {
  Column,
  IdType,
  Row,
  SortingRule,
  TableInstance,
  TableOptions,
  useGlobalFilter,
  useSortBy,
  useTable,
} from "react-table";
import { matchSorter } from "match-sorter";
import { Cell, HeaderCell } from "./components";
import { RemovingCell } from "./components/removing-cell";
import { StyledTable } from "./table.styles";

interface Props<T extends object> {
  columns: Column<T>[];
  data: T[];
  hasRemovingRow?: boolean;
  filters?: (keyof T)[];
  filter?: string;
  sortBy?: SortingRule<T>;
}

export const Table = <T extends object>({
  columns,
  data,
  hasRemovingRow,
  filters,
  filter,
  sortBy,
}: Props<T>) => {
  const globalFilter = useCallback(
    (rows: Row<T>[], _: IdType<T>[], query: string) =>
      matchSorter(rows, query, {
        keys: filters?.map((column) => `values.${column}`),
      }),
    [filters]
  );
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    setGlobalFilter,
    setSortBy,
    headerGroups,
    rows,
  } = useTable<T>(
    {
      columns,
      data,
      globalFilter,
    } as TableOptions<T> & {
      globalFilter: typeof globalFilter;
    },
    useGlobalFilter,
    useSortBy
  ) as TableInstance<T> & {
    setGlobalFilter: (filterValue: string) => void;
    setSortBy: (sortBy: Array<SortingRule<T>>) => void;
  };

  useEffect(() => {
    if (filter !== undefined && filters !== undefined) {
      setGlobalFilter(filter);
    }
  }, [filter, filters, setGlobalFilter]);

  useEffect(() => {
    if (sortBy !== undefined) {
      setSortBy([sortBy]);
    }
  }, [sortBy, setSortBy]);

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
