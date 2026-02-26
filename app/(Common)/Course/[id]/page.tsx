// export default async function page({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   console.log("params is undefined", params);

//   if (!params) {
//     return <div>Loading...</div>;
//   }
//   let id = await params;
//   let newid = id.id;
//   console.log("id is ", newid);
//   return <div> id is {newid}</div>;
// }

"use client";
import Image from "next/image";
import images from "@/img/images.png";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import comment from "@/lib/Comment.json";
import { Input } from "@/components/ui/input";
import { useForm } from "@tanstack/react-form";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
export default function TutorProfile(...props: any) {
  const form = useForm({
    defaultValues: {
      comment: "",
    },
    onSubmit: async ({ value }) => {
      console.log("Form submitted with values:", value);
    },
  });
  interface Comment {
    username: string;
    comment: string;
  }
  return (
    <div className="w-screen h-screen p-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <div className="mx-auto">
        <Image
          src={images}
          alt="Tutor Image"
          width={200}
          height={200}
          className="rounded-full object-cover"
        ></Image>
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

        {/* comment get */}

        <section className="grid grid-cols-1 justify-start items-start mt-10">
          {/* comment post */}

          <div className="w-full lg:w-[40vw]  mt-5 pb-4 flex  ">
            <form
              className="w-1/2"
              id="comment-form"
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
            >
              <div className=" w-full">
                <FieldGroup>
                  <form.Field
                    name="comment"
                    children={(field) => (
                      <Field>
                        <FieldLabel htmlFor={field.name}>Comment</FieldLabel>
                        <Input
                          type="text"
                          className="w-full"
                          id={field.name}
                          value={field.state.value}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      </Field>
                    )}
                  ></form.Field>
                </FieldGroup>
              </div>
            </form>
            <Button
              type="submit"
              form="comment-form"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-[100px] mt-8 ml-3"
            >
              Comment
            </Button>
          </div>

          <div className="">
            {comment.map((item: Comment, index: number) => (
              <div key={index} className="w-1/2 bg-gray-100 p-4 rounded mb-4">
                <p className="text-sm text-gray-600 mb-2">{item.username}</p>
                <p className="text-xs text-gray-500">{item.comment}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
