import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SDWIT — Consultoria em Tecnologia e Segurança da Informação",
    template: "%s | SDWIT",
  },
  description:
    "Transformamos desafios de tecnologia em resultados para o seu negócio. Consultoria especializada em Segurança da Informação, Infraestrutura, Cloud e Transformação Digital.",
  keywords: [
    "consultoria tecnologia",
    "segurança da informação",
    "infraestrutura cloud",
    "transformação digital",
    "SDWIT",
  ],
  openGraph: {
    title: "SDWIT — Consultoria em Tecnologia e Segurança da Informação",
    description:
      "Transformamos desafios de tecnologia em resultados para o seu negócio.",
    type: "website",
    locale: "pt_BR",
    siteName: "SDWIT",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}