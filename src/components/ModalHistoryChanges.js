export default function ModalHistoryChanges({ show, onClose, changes }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl py-4">
        <h2 className="text-xl font-bold mb-4 text-center">Historial de Cambios</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-2 px-4">Campo</th>
                <th scope="col" className="py-2 px-4">Valor Anterior</th>
                <th scope="col" className="py-2 px-4">Valor Nuevo</th>
                <th scope="col" className="py-2 px-4">Fecha de Modificación</th>
              </tr>
            </thead>
            <tbody>
              {changes.length > 0 ? (
                changes.map((change, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border-b">{change.field}</td>
                    <td className="py-2 px-4 border-b">{change.oldValue}</td>
                    <td className="py-2 px-4 border-b">{change.newValue}</td>
                    <td className="py-2 px-4 border-b">{change.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No hay cambios registrados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
