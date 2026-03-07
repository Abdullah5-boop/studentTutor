import Footer from "@/components/footer";
import { Navbar1 } from "@/components/navbar1";
import { Toaster } from "@/components/ui/sonner";

export default async function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div className="w-full">
        <Navbar1 ></Navbar1>
      </div>
      {children}
      <Toaster></Toaster>
      <Footer></Footer>
    </div>
  );
}
