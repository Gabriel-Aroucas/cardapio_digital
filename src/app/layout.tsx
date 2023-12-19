import Header from "@/components/header/Header"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Header pagina="Início"/>
      <body>{children}</body>
    </html>
  )
}
