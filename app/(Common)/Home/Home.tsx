
import Image from "next/image";
import React from "react";
import img from "@/img/teacher.png";
import { cookies } from "next/headers";

export default async function HomePage() {

  return (
    <div className="grid  grid-cols-1 lg:grid-cols-5 h-full  lg:h-[80vh]  w-full p-5 m-0 ">
      <section className=" col-span-3 flex  items-start flex-col text-start pl-10">
        <p className="text-2xl md:text-3xl lg:text-7xl font-bold text-start font-serif">
          This website for students and <br /> tutors
        </p>

        <p className="text-2xl mt-5 font-sans">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic sit
          ullam voluptates cumque itaque a voluptatum. Repre
        </p>
      </section>
      <section className="col-span-2">
        <Image
          src={img}
          //   fill
          className="object-cover"
          alt="teacher-photo"
        ></Image>
      </section>
    </div>
  );
}
