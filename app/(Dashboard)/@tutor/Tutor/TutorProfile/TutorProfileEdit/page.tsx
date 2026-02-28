import Image from "next/image";
import img from "../../../../../../img/images.png";
import { Button } from "@/components/ui/button";
import {  useForm } from "@tanstack/react-form";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
export default function TutorProfileEdit(...props: any) {
  const form = useForm({
    defaultValues: {
      email:"",
      Name:"",
      subject:"",
      tags:""
    },
  });
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

      <div className=" col-span-4 h-auto  flex items-start ">
        <form>
          <table className="w-1/2 text-2xl text-left  border-separate border-spacing-y-6">
            <tbody>
              <tr className=" border-gray-300 ">
                <th className="pr-4 font-semibold">Name</th>
                <th className="px-2">:</th>

                <td>
                  <form.Field
                  name='email'
                  children={(field)=>(
                    <Field>
                        <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    type="email"
                    id={field.name}
                    value={field.state.value}
                    onChange={(e) =>
                      field.handleChange(e.target.value)
                    }
                  />
                    </Field>
                  )}
                  ></form.Field>
                </td>
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
              <tr>
                <td>
                  <div className="text-start ">
                    <Button>Done</Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
