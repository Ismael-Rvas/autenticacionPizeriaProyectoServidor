import { auth } from "@/auth"
import { redirect } from "next/navigation"

async function page() {
  const sesion = await auth()

  if (sesion?.user.role !== 'ADMIN')
    redirect('/dashboard')

  return (
    <div className="flex flex-col gap-4 p-4 max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-24">
      <h1 className="text-3xl font-bold text-blue-500"> 🔐  Admin panel</h1>
      <p className="text-2xl font-semibold">{sesion?.user.name}</p>
      <p className="text-xl">{sesion?.user.email} </p>
      <p className="text-lg font-light">{sesion?.user.role} </p>
      <img src={sesion?.user.image} className="rounded-full w-24 h-24" />
    </div>
  )
}

export default page