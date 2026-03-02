import { Navbar1 } from "@/components/navbar1";

export default function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div className="w-full">
        <Navbar1></Navbar1>
      </div>
      {children}
    </div>
  );
}
