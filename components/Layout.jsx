import { Montserrat } from "@next/font/google";

import Navbar from "./Navbar";
import Footer from "./Footer";

const montserrat = Montserrat({
  weights: [300, 400, 500, 600, 700, 800],
  subsets: ["latin"],
});
export default function Layout({ children }) {
  return (
    <main className={montserrat.className}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </main>
  );
}
