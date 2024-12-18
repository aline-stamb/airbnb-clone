import {Nunito} from "next/font/google";

import Navbar from "./components/Navbar/navbar";
import "./globals.css";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

const font = Nunito({
  subsets:["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
