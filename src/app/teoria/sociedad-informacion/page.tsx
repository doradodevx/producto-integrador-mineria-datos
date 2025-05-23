export default function SociedadInformacion() {
  return (
    <article className="max-w-4xl mx-auto prose prose-lg">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Sociedad de la Información y Sociedad del Conocimiento
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          ¿Qué es la Sociedad de la Información?
        </h2>
        <p className="text-gray-700 mb-4">
          La Sociedad de la Información es un estado de desarrollo social caracterizado por la capacidad
          de sus miembros para obtener y compartir cualquier información, instantáneamente, desde cualquier
          lugar y en la forma que prefieran.
        </p>
        <p className="text-gray-700 mb-4">
          Se caracteriza por:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>La abundancia de información digital</li>
          <li>La velocidad de transmisión de datos</li>
          <li>La globalización de la comunicación</li>
          <li>La innovación tecnológica constante</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Sociedad del Conocimiento
        </h2>
        <p className="text-gray-700 mb-4">
          La Sociedad del Conocimiento representa una evolución de la Sociedad de la Información,
          donde el énfasis está en la capacidad para:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Transformar la información en conocimiento</li>
          <li>Generar valor a partir del conocimiento</li>
          <li>Aplicar el conocimiento en la resolución de problemas</li>
          <li>Fomentar la innovación y el desarrollo</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Diferencias Clave
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left px-4 py-2">Sociedad de la Información</th>
                <th className="text-left px-4 py-2">Sociedad del Conocimiento</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Énfasis en la tecnología</td>
                <td className="border px-4 py-2">Énfasis en el factor humano</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Acceso a datos</td>
                <td className="border px-4 py-2">Transformación de datos en conocimiento</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Cantidad de información</td>
                <td className="border px-4 py-2">Calidad del conocimiento</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </article>
  )
} 