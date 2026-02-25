import Image from "next/image";

export default function TutorProfile(...props: any) {
  return (
    <div className="w-screen h-screen p-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <div className="">
    
      </div>

      <div className=" col-span-4 flex items-start">
        <table className="w-1/2 text-2xl text-left  border-separate border-spacing-y-6">
          <tbody>
            <tr className=" border-gray-300 ">
              <th className="pr-4 font-semibold">Name</th>
              <td className="px-2">:</td>
              <td>Abdullah</td>
            </tr>

            <tr className=" border-gray-300">
              <th className="pr-4 font-semibold">Subject</th>
              <td className="px-2">:</td>
              <td>Math</td>
            </tr>

            <tr>
              <th className="pr-4 font-semibold">Tags</th>
              <td className="px-2">:</td>
              <td>Algebra, Geometry</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}