import "./globals.css";

export const metadata = {
  title: "Clinica Pediatria",
  description: "Projeto DevMedia",
  author: "Robson Jr",
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
