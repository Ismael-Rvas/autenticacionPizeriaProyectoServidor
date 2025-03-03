import { obtenerPedidos, obtenerPizzas, obtenerRepartidores } from "@/lib/data";
import Link from "next/link";
import Modal from "@/components/modal";
import PedidoInsertar from "./insertar";
import PedidoModificar from "./modificar";
import PedidoEliminar from "./eliminar";
import { auth } from "@/auth";

export default async function Pedidos() {
  const pedidos = await obtenerPedidos();
  const repartidores = await obtenerRepartidores();
  const pizzas = await obtenerPizzas();
  const session = await auth();

  return (
    <div className="flex flex-col gap-6">
      {session?.user?.role === "ADMIN" && (
        <Modal
          openElement={
            <button className="inline-block px-4 py-2 rounded-lg bg-indigo-500 text-white shadow-md hover:bg-indigo-600 transition-colors duration-150">
              Insertar
            </button>
          }
        >
          <PedidoInsertar repartidores={repartidores} pizzas={pizzas} />
        </Modal>
      )}
      {pedidos.map((pedido) => (
        <div
          key={pedido.id}
          className="p-6 mb-6 bg-slate-200 rounded-lg shadow-lg"
        >
          <div className="flex flex-col gap-2">
            <Link
              href={`/pedidos/${pedido.id}`}
              className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-150"
            >
              {new Date(pedido.fecha_hora).toLocaleString()}
            </Link>
            <p className="text-gray-600">
              Nombre del cliente: {pedido.nombre_cliente}
            </p>
            <p className="text-gray-600">
              Dirección del cliente: {pedido.direccion_cliente}
            </p>

            {session?.user?.role === "ADMIN" && (
              <div className="flex gap-4 mt-2">
                <Modal
                  openElement={
                    <button className="px-4 py-2 rounded-lg bg-yellow-500 text-white shadow-md hover:bg-yellow-600 transition-colors duration-150">
                      Modificar
                    </button>
                  }
                >
                  <PedidoModificar
                    pedido={pedido}
                    repartidores={repartidores}
                    pizzas={pizzas}
                  />
                </Modal>

                <Modal
                  openElement={
                    <button className="px-4 py-2 rounded-lg bg-red-500 text-white shadow-md hover:bg-red-600 transition-colors duration-150">
                      Eliminar
                    </button>
                  }
                >
                  <PedidoEliminar pedido={pedido} />
                </Modal>
              </div>
            )}
          </div>
          <hr className="mt-4" />
        </div>
      ))}
    </div>
  );
}
