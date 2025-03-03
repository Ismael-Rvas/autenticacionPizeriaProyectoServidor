import { obtenerPedido } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Pedido({ id }) {
  const pedido = await obtenerPedido(id);
  // console.log(pedido);

  if (!pedido) notFound();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <h1 className="font-bold text-2xl mr-3.5">DATOS DE PEDIDO</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3 text-center">
        <div className="font-bold text-xl mb-2">Nombre:</div>
        <div className="text-gray-700 text-lg mb-4">
          {pedido.nombre_cliente}
        </div>
        <div className="font-bold text-xl mb-2">Dirección:</div>
        <div className="text-gray-700 text-lg">{pedido.direccion_cliente}</div>

        <div className="font-bold text-xl mb-2">Repartidor:</div>
        <div className="text-gray-700 text-lg">{pedido.repartidor?.nombre}</div>

        <div className="font-bold text-xl mb-2">Pizzas:</div>
        <ul className="list-disc">
          {pedido.pizzas?.map((pizza) => (
            <li key={pizza.id}>{pizza.nombre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
