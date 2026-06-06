import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mój Blog',
  description: 'Next.js - Zadanie Blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <nav style={{
          padding: '20px',
          backgroundColor: '#1f2937',
          color: 'white',
          marginBottom: '30px'
        }}>
          <a href="/" style={{ color: 'white', marginRight: '20px' }}>Strona Główna</a>
          <a href="/blog" style={{ color: 'white' }}>Blog</a>
        </nav>

        <main style={{ padding: '0 20px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}