export default function page({ params }: { params: { id: string } }) {
  console.log(params);
  return <div>Profile dengan id {params.id}</div>;
}
