import Link from 'next/link'
import { auth } from "@/auth"
import { logout } from '@/lib/actions'
import { Home } from 'lucide-react';


async function Header() {
    const session = await auth();
    // console.log(session);

    return (
        <header className="bg-blue-700 text-white flex px-10 py-2 justify-between items-center shadow-md">
            <nav className="flex gap-4 items-center">
                <Link href="/">
                    <Home className="h-6 w-6" />
                </Link>
                {session?.user?.role === 'ADMIN'
                    && <Link href="/admin" className="text-white font-bold">Admin panel</Link>
                }

                {session?.user?.role === 'USER'
                    &&
                    <Link href="/dashboard" className="text-white font-bold">Dashboard</Link>
                }

                <Link href="/about" className="text-white font-bold">About</Link>

                {session?.user?.role === 'ADMIN'
                    &&

                    <Link href="/pedidos" className="text-white font-bold">Pedidos</Link>
                }


                <Link href="/repartidores" className="text-white font-bold">Repartidores</Link>

                <Link href="/pizzas" className="text-white font-bold">Pizzas</Link>
            </nav>
            <div className="flex gap-4">
                {session
                    ? <form><button formAction={logout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button></form>
                    : <Link href="/auth/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</Link>
                }
            </div>
        </header>
    )
}

export default Header