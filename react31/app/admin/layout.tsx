import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div style={{
        width: '260px',
        backgroundColor: '#111827',
        color: 'white',
        padding: '24px',
        flexShrink: 0,
      }}>
        <h2 style={{ 
          fontSize: '1.75rem', 
          fontWeight: 'bold', 
          marginBottom: '32px',
          textAlign: 'center'
        }}>
          Admin Panel
        </h2>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <Link 
            href="/admin" 
            style={{ 
              padding: '12px 16px', 
              borderRadius: '6px',
              textDecoration: 'none',
              color: 'white',
              display: 'block',
              transition: 'background-color 0.2s'
            }}
            className="hover:bg-gray-700"
          >
            🏠 Dashboard
          </Link>
          <Link 
            href="/admin/users" 
            style={{ 
              padding: '12px 16px', 
              borderRadius: '6px',
              textDecoration: 'none',
              color: 'white',
              display: 'block',
              transition: 'background-color 0.2s'
            }}
            className="hover:bg-gray-700"
          >
            👥 Użytkownicy
          </Link>
          <Link 
            href="/admin/settings" 
            style={{ 
              padding: '12px 16px', 
              borderRadius: '6px',
              textDecoration: 'none',
              color: 'white',
              display: 'block',
              transition: 'background-color 0.2s'
            }}
            className="hover:bg-gray-700"
          >
            ⚙️ Ustawienia
          </Link>
        </nav>
      </div>

      {/* Główna zawartość */}
      <div style={{ 
        flex: 1, 
        padding: '32px', 
        backgroundColor: '#f9fafb' 
      }}>
        {children}
      </div>
    </div>
  );
}