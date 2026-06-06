export default function SettingsPage() {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-8">Ustawienia</h1>
        
        <div className="max-w-2xl space-y-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Ogolne</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nazwa strony</label>
                <input type="text" defaultValue="Mój Blog" className="w-full border rounded-lg px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Opis strony</label>
                <textarea className="w-full border rounded-lg px-4 py-2" rows={3} />
              </div>
            </div>
          </div>
  
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Bezpieczenstwo</h2>
            <div className="space-y-4">
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-5 h-5" />
                <span>Wymagaj weryfikacji email</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-5 h-5" />
                <span>Wlacz 2FA</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }