"use server";

import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import { authGetSession } from "@/service/getSession";
import { authUserService } from "@/service/user.service";
import SignOut from "./SignOut";
export default async function NavbarButton() {
  const cookie = await authGetSession.getSession();
  console.log("navbutton = ", cookie);

  return (
    <div>
      {cookie == null ? (
        <>
          <Button asChild variant="outline" size="sm">
            <Link href="/Login">Sign in </Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/Signup">sign up</Link>
          </Button>
        </>
      ) : (
        <>
          <SignOut></SignOut>
        </>
      )}
    </div>
  );
}
