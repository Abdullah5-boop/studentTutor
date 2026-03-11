"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"
import { toast } from "sonner";
export default function DeleteButton({ id }: { id: string }) {
 
  const route = useRouter()
  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    let toastId= toast.loading("Loading...")
     console.log("delete id :", id)
    const result = fetch("http://localhost:5000/v1/Category", {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id}),
    })
    toast.dismiss()
    route.refresh()
    console.log(id)
  }
  return (
    <Button onClick={(e) => handleButton(e)}>delete</Button>
  );
}