import { obtenerRepartidores } from "@/lib/data";
import Link from "next/link";
import Modal from "@/components/modal";
import RepartidorInsertar from "./insertar";
import RepartidorModificar from "./modificar";
import RepartidorEliminar from "./eliminar";
import { auth } from "@/auth";

export default async function Repartidores() {
  const repartidores = await obtenerRepartidores();
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
          <RepartidorInsertar />
        </Modal>
      )}
      {repartidores.map((repartidor) => (
        <div
          key={repartidor.id}
          className="p-6 mb-6 bg-slate-200 rounded-lg shadow-lg"
        >
          <div className="flex flex-col gap-2">
            <Link
              href={`/repartidores/${repartidor.id}`}
              className="text-lg font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-150"
            >
              {repartidor.nombre}
            </Link>
            <p className="text-gray-600">Teléfono: {repartidor.telefono}</p>
            <img
              src={repartidor.foto}
              alt="imagenRepartidor"
              className="w-24 h-24 rounded-full object-cover"
            />
            {session?.user?.role === "ADMIN" && (
              <div className="flex gap-4 mt-2">
                <Modal
                  openElement={
                    <button className="px-4 py-2 rounded-lg bg-yellow-500 text-white shadow-md hover:bg-yellow-600 transition-colors duration-150">
                      Modificar
                    </button>
                  }
                >
                  <RepartidorModificar repartidor={repartidor} />
                </Modal>

                <Modal
                  openElement={
                    <button className="px-4 py-2 rounded-lg bg-red-500 text-white shadow-md hover:bg-red-600 transition-colors duration-150">
                      Eliminar
                    </button>
                  }
                >
                  <RepartidorEliminar repartidor={repartidor} />
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
