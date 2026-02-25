import CardImage from "./Card";
import data from "../../../lib/data.json";
export default function CoursePage() {
  return (
    <div className="p-4 px-3.5  h-full">
      <h1 className="text-2xl font-bold mb-1.5 ">Course Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <CardImage key={index} props={item}></CardImage>
        ))}
      </div>
    </div>
  );
}
