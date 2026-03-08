"use client";
import { Button } from "@/components/ui/button";
import { authUserService } from "@/service/user.service";
import React from "react";
import { useRouter } from "next/navigation";

export default function SignOut() {

  const router = useRouter(); // ✅ Hook inside component

  const handleSignOut = async () => {
    console.log("handle signout click .... ");

    let result = await authUserService.authSignOut();

    console.log("sign out", result);

    if (result) {
      router.refresh();
    }
  };

  return (
    <>
      <Button onClick={handleSignOut}>Signout</Button>
    </>
  );
}