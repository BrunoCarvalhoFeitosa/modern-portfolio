import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./providers"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bruno Carvalho Feitosa",
  description: "Portfólio feito em Next.js, Typescript, Framer Motion, Three.js, ShadcnUi e TailwindCSS.",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico"
  },
  authors: {
    name: "Bruno Carvalho Feitosa",
    url: "https://br.linkedin.com/in/bruno-carvalho-feitosa"
  },
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ]
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
