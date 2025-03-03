import { obtenerRepartidor } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function Repartidor({ id }) {
  const repartidor = await obtenerRepartidor(id);
  // console.log(repartidor);

  if (!repartidor) notFound();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <h1 className="font-bold text-2xl mr-3.5">DATOS DE REPARTIDOR</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3 text-center">
        <div className="font-bold text-xl mb-2">Nombre:</div>
        <div className="text-gray-700 text-lg mb-4">{repartidor.nombre}</div>
        <div className="font-bold text-xl mb-2">Teléfono:</div>
        <div className="text-gray-700 text-lg">{repartidor.telefono}</div>
        <img
          src={repartidor.foto}
          alt="imagenRepartidor"
          className="mx-auto w-24 h-24 rounded-full object-cover mt-8 "
        />
      </div>
    </div>
  );
}
