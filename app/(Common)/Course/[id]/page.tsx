export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  console.log("params is undefined", params);

  if (!params) {
    return <div>Loading...</div>;
  }
  let id = await params;
  let newid = id.id;
  console.log("id is ", newid);
  return <div> id is {newid}</div>;
}
