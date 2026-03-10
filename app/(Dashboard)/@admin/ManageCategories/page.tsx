import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { SearchForm } from '@/components/search-form'
import { Button } from '@/components/ui/button'
import FormCat from './FormCat'
export default function ManageCategoriesPage() {
  return (
    <div className='grid grid-cols-1 gap-4'>
        <div className='w-full flex gap-3'>
           <FormCat></FormCat>
        </div>
        <div className='w-full lg:w-1/3'>
      <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Category list</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="">INV001</TableCell>
     
    </TableRow>
  </TableBody>
</Table>
        </div>
    </div>
  )
}
