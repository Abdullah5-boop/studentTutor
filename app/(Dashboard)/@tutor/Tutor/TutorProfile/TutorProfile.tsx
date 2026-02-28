import Image from "next/image";
import img from "../../../../../img/images.png"
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function TutorProfile(...props: any) {
  return (
    <div className="w-full h-screen p-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
      <div className="">
    <Image
      src={img}
      alt="Tutor Profile Picture"
      width={200}
      height={200}
      className="rounded-full"
    />
      </div>

      <div className=" col-span-4 flex items-start">
        <table className="w-1/2 text-2xl text-left  border-separate border-spacing-y-6">
          <tbody>
            <tr className=" border-gray-300 ">
              <th className="pr-4 font-semibold">Name</th>
              <th className="px-2">:</th>
              <td>Abdullah</td>
            </tr>

            <tr className=" border-gray-300">
              <th className="pr-4 font-semibold">Subject</th>
              <th className="px-2">:</th>
              <td>Math</td>
            </tr>
            <tr className=" border-gray-300">
              <th className="pr-4 font-semibold">Email</th>
              <th className="px-2">:</th>
              <td>abdullahalmahmood500@gmail.com</td>
            </tr>

            <tr>
              <th className="pr-4 font-semibold">Tags</th>
              <td className="px-2">:</td>
              <td>Algebra, Geometry</td>
            </tr>
          </tbody>
        </table>
        <Button >
          <Link href='/'>Edit</Link>
          
          </Button>
      </div>
    </div>
  )
}