export default function AdminDashboard() {
    return (
      <div>
        <h1 className="text-4xl font-bold mb-6">Panel Administratora</h1>
        <p className="text-lg text-gray-600">
          Witaj w panelu administracyjnym. Wybierz opcję z menu po lewej
        </p>
  
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Uzytkownicy</h3>
            <p className="text-gray-500">Zarządzaj kontami uzytkownikow</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Ustawienia</h3>
            <p className="text-gray-500">Konfiguracja aplikacji</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Statystyki</h3>
            <p className="text-gray-500">Przeglad danych</p>
          </div>
        </div>
      </div>
    );
  }