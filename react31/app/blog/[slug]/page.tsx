interface Props {
    params: Promise<{ slug: string }>;
  }
  
  export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
  
    return (
      <div>
        <h1>Artykuł: {slug.replace(/-/g, ' ')}</h1>
        <p>Slug: <strong>{slug}</strong></p>
        <p>To jest przykładowa treść artykułu o slugu "{slug}".</p>
        
        <br />
        <a href="/blog">← Powrót do listy artykułów</a>
      </div>
    );
  }