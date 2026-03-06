import Footer from "@/components/footer";
import { Navbar1 } from "@/components/navbar1";
import { Toaster } from "@/components/ui/sonner";
import { cookies } from "next/headers";
export default async function CommonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();

  const res = await fetch("http://localhost:5000/api/auth/get-session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });
  const session = await res.json();
  console.log(session);
  let signinStatus = "";
  if (session != null) {
    signinStatus = "userFound";
    console.log("if...userFound")
  } else {
    signinStatus="userNotfound"
    console.log("else...userNotfound")
  }

  return (
    <div>
      {/* <Navbar></Navbar> */}
      <div className="w-full">
        <Navbar1 signinStatus={signinStatus}></Navbar1>
      </div>
      {children}
      <Toaster></Toaster>
      <Footer></Footer>
    </div>
  );
}
