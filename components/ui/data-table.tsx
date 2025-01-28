"use client";
import type { ColumnDef, SortingState } from "@tanstack/react-table";

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { Button } from "./button";

type DataTableProps<TData> = {
  columns: ColumnDef<TData>[];
  data: TData[];
  labels?: {
    emptyMessage?: string;
    nextPageLabel?: string;
    previousPageLabel?: string;
  };
};

export const DataTable = <TData,>({
  columns,
  data,
  labels: {
    emptyMessage = "Aucune donnée",
    nextPageLabel = "Suivant",
    previousPageLabel = "Précédent",
  } = {},
}: DataTableProps<TData>) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },
    state: {
      sorting,
    },
  });

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length
              ? table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              : !!emptyMessage && (
                  <TableRow>
                    <TableCell
                      className="h-24 text-center"
                      colSpan={columns.length}
                    >
                      {emptyMessage}
                    </TableCell>
                  </TableRow>
                )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          disabled={!table.getCanPreviousPage()}
          size="sm"
          variant="outline"
          onClick={() => table.previousPage()}
        >
          {previousPageLabel}
        </Button>
        <Button
          disabled={!table.getCanNextPage()}
          size="sm"
          variant="outline"
          onClick={() => table.nextPage()}
        >
          {nextPageLabel}
        </Button>
      </div>
    </>
  );
};
