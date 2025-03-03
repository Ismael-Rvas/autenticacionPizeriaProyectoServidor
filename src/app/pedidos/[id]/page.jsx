import Pedido from "@/components/pedidos/item";
import { Suspense } from "react";

async function PaginaPedido({ params, searchParams }) {
  const { id } = await params;

  return (
    <div>
      <Suspense
        fallback={
          <p className="text-blue-500 text-2xl font-bold animate-pulse">
            Obteniendo datos...
          </p>
        }
      >
        <Pedido id={id} />
      </Suspense>
    </div>
  );
}

export default PaginaPedido;
