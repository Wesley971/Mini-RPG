import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "KyōkenFlow",
  description: "Portfolio immersif de développeur front-end créatif",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-black text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}

