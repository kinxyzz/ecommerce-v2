import OrderDetail from "@/components/template/order/orderDetail";

export default function page({ params }: { params: { id: string } }) {
  return <OrderDetail id={params.id} />;
}
