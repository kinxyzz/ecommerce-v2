export default function page({ params }: { params: { id: string } }) {
  console.log(params.id);

  return <div>{params.id}</div>;
}
