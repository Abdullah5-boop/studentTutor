import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

export default function CardImage({
  props,
}: {
  props: { id: string; name: string; from: string; to: string; tag: string }
}) {

  if (!props) {
    
    return <div>Loading...</div>}

  const { id, name, from, to, tag } = props

  return (
    <Card className="relative w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />

      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt={name}
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />

      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{tag}</Badge>
        </CardAction>

        <CardTitle>{name}</CardTitle>

        <CardDescription>
          From {from} to {to}
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/Course/${id}`}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}