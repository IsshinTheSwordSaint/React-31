export default function UsersPage() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Lista Uzytkownikow</h1>
        
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left">ID</th>
                <th className="px-6 py-4 text-left">Nazwa</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Rola</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">Jan Kowalski</td>
                <td className="px-6 py-4">jan@example.com</td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Admin</span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">Anna Nowak</td>
                <td className="px-6 py-4">anna@example.com</td>
                <td className="px-6 py-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">User</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }