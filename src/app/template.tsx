'use client';
export default function Template({ children }: { children: React.ReactNode }) {

  return (
    <>
      {/* Fallback */}
      <title>Carregando...</title>
      <main className='flex-1'>
        {children}
      </main>
    </>
  );
}
