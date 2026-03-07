"use client";
import { Button } from "@/components/ui/button";
import { authUserService } from "@/service/user.service";
import React from "react";
const handleSignOut = async () => {

  console.log("handle signout click .... ")
  let result = await authUserService.authSignOut()
  console.log("sign out", result);
};

export default function SignOut() {
  return (
    <>
      <Button onClick={handleSignOut}>Signout</Button>
    </>
  );
}
