import Link from "next/link";

export default async function Home() {
  return (
    <div className="max-w-4xl mx-auto mt-24 p-4 space-y-8">
      <h1 className="text-4xl font-extrabold mb-6 text-center border-b border-gray-200">HOME</h1>

      <div className="space-y-4">

        <h2 className="text-2xl font-bold">Datos Usuario:</h2>
        <Link href="/dashboard" className="block p-4 rounded-lg bg-gray-100 hover:bg-gray-200">
          Dashboard del Usuario
        </Link>
        <Link href="/about" className="block p-4 rounded-lg bg-gray-100 hover:bg-gray-200">
          About
        </Link>
        <h2 className="text-2xl font-bold">Tablas Pizzeria:</h2>
        <Link href="/repartidores" className="block p-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
          Repartidores
        </Link>
        <Link href="/pedidos" className="block p-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
          Pedidos
        </Link>
        <Link href="/pizzas" className="block p-4 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
          Pizzas
        </Link>
      </div>
    </div>
  )
}

