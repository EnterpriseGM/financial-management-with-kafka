import Detail from "@/pages/detail";

async function getAccountInfo(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: { revalidate: 30 },
  });
  return res.json();
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  // Initiate both requests in parallel
  const account = await getAccountInfo(id);

  return <Detail account={account} />;
}
