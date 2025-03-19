import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
