import Pizza from "@/components/pizzas/item";
import { Suspense } from "react";

async function PaginaPizza({ params, searchParams }) {
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
        <Pizza id={id} />
      </Suspense>
    </div>
  );
}

export default PaginaPizza;
