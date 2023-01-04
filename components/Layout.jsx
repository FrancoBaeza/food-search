import { Montserrat } from "@next/font/google";
import { useRouter } from "next/router";

import Navbar from "./Navbar";
import Footer from "./Footer";

const montserrat = Montserrat({
  weights: [300, 400, 500, 600, 700, 800],
  subsets: ["latin"],
});
export default function Layout({ children }) {
  const router = useRouter();

  return (
    <main className={montserrat.className}>
      {router.pathname != "/login" && <Navbar />}
      <main>{children}</main>
      {router.pathname != "/login" && <Footer />}
    </main>
  );
}
