
import { cookies } from "next/headers";

interface userInfo {
  email: string;
  name?: string;
  password: string;
  callbackURL?: string;
}

export const authGetSession = {

  getSession: async()=>{
    const cookieStore = await cookies();

  const res = await fetch("http://localhost:5000/api/auth/get-session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });
  const session = await res.json();
  console.log(session);

return session;

  }
};
