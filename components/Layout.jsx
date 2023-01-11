import { Montserrat } from "@next/font/google";
import { useRouter } from "next/router";

import { usePromiseTracker } from "react-promise-tracker";
import { TailSpin } from  'react-loader-spinner'

import Navbar from "./Navbar";
import Footer from "./Footer";

const montserrat = Montserrat({
  weights: [300, 400, 500, 600, 700, 800],
  subsets: ["latin"],
});
export default function Layout({ children }) {
  const router = useRouter();
  const { promiseInProgress } = usePromiseTracker();

  	return (
		<main className={montserrat.className}>
			{/* loading indicator */}
			{promiseInProgress && 
			(<div className='fixed h-screen w-screen grid place-items-center backdrop-brightness-50 z-50'>
				<TailSpin
					height="80"
					width="80"
					color="#82c126"
					ariaLabel="tail-spin-loading"
					radius="1"
					
					visible={true}
				/>
			</div>)}
			{router.pathname != "/unauthorized" && router.pathname != "/login" && router.pathname != "/register" && <Navbar />}
			<main>{children}</main>
			{router.pathname != "/unauthorized" && router.pathname != "/login" && router.pathname != "/register" && <Footer />}
		</main>
 	);
}
