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
import { adminService } from '@/service/Admin.service'
import DeleteButton from './DeleteButton'
// export const dynamic = "force-dynamic"
export default async function ManageCategoriesPage() {


  interface Category {
    id: string;
    name: string;
    description: string;
    createdAt: string;
  }

  const res = await adminService.getCategory();
  const category: Category[] = res ? await res.json() : [];



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
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead className="w-[100px]">Description</TableHead>
              <TableHead className="w-[100px]">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>

            {category.map((data,index )=> 
            <TableRow key={index}>
              <TableCell className="">{data.name}</TableCell>
              <TableCell className="">{data.description}</TableCell>
              <TableCell className=""><DeleteButton id={data.id}></DeleteButton></TableCell>
              
            </TableRow>)
            }


          </TableBody>
        </Table>
      </div>
    </div>
  )
}
