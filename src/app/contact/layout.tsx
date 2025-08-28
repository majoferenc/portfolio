export const metadata = {
    title: 'Ing. Marián Ferenc - Contact',
    description: 'Contact Page of Ing. Marián Ferenc portfolio'
  };
  
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
        {children}
    </>
  );
}