import { Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";

const barlow_semi = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Rock Paper Scissors | NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow_semi.className}>{children}</body>
    </html>
  );
}
