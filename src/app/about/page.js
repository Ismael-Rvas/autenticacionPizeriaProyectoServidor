

function About() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-32">
      <h1 className="text-4xl font-extrabold mb-4 text-center">Página About</h1>
      <p className="text-lg text-gray-700 text-left">
        Esto es una página abierta al público, sin tener que iniciar sesión para verla.
        Esta página sirve de prueba para probar el login y todas sus funciones.
      </p>
      <hr className="my-4" />
      <strong>Puedes cambiar la vista de estas páginas en la constante "config" del <span className="text-yellow-500"> middleware.js</span>.</strong>
    </div>
  )
}

export default About