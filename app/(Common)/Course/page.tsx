import CardImage from "./Card";
import data from "../../../lib/data.json";
import { SearchForm } from "@/components/search-form";
export default function CoursePage() {
  return (
    <div className="p-4 px-3.5  h-full grid grid-cols-1">

      <section>
        <div  className="flex justify-between mb-5">

        <h1 className="text-4xl font-bold mb-1.5 ">Course Page</h1>
        <SearchForm className="mb-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item, index) => (
            <CardImage key={index} props={item}></CardImage>
          ))}
        </div>
      </section>
    </div>
  );
}
