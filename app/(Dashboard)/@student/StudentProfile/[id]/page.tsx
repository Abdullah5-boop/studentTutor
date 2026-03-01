"use client"
import Image from "next/image";
import img from "@/img/images.png";
import { Button } from "@/components/ui/button";
import { useForm } from "@tanstack/react-form";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "@/components/ui/field";
import { useParams } from "next/navigation";
export default function StudentProfileEdit() {
  const { id } = useParams()
  console.log("id = ", id)
  const form = useForm({
   defaultValues: {
  Name: "",
  Email: "",
  Subject: "",
  Tags: "",
},
    onSubmit: async ({ value }) => {
      console.log("Form submitted with values:", value);
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

      <div className=" col-span-4 h-auto  flex items-start  ">
        <form id="tutor-profile-update"
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
        

        >
          <table className="w-3/2 text-2xl text-left  border-separate border-spacing-y-6  ">
            <tbody>
              <tr className=" border-gray-300 ">
                <th className="pr-4 font-semibold">Name</th>
                <th className="px-2">:</th>

                <td className="">
                  <form.Field
                    name="Name"
                    children={(field) => (
                      <Field>

                        <Input
                          type="text"
                          // type="texte"
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
                  <td>
                  <form.Field
                    name="Subject"
                    children={(field) => (
                      <Field>
                        <Input
                          type="text"
                          id={field.name}
                          value={field.state.value}
                          onChange={(e) =>
                            field.handleChange(e.target.value)
                          }
                        />
                      </Field>
                    )}
                  />
                </td>
              </tr>
              <tr className=" border-gray-300">
                <th className="pr-4 font-semibold">Email</th>
                <th className="px-2">:</th>
                 <td>
                  <form.Field
                    name="Email"
                    children={(field) => (
                      <Field>
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
                  />
                </td>
              </tr>

              <tr>
                <th className="pr-4 font-semibold">Tags</th>
                <td className="px-2">:</td>
                <td>
                  <form.Field
                    name="Tags"
                    children={(field) => (
                      <Field>
                        <Input
                          type="text"
                          placeholder="Algebra, Geometry"
                          id={field.name}
                          value={field.state.value}
                          onChange={(e) =>
                            field.handleChange(e.target.value)
                          }
                        />
                      </Field>
                    )}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div className="text-start ">
                    <Button
                      form="tutor-profile-update"
                      type="submit"
                    >Done</Button>
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
