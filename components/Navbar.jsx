import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center h-10 bg-slate-100">
      <p className="text-xl font-bold pl-4">
        <svg
          width="100.1111145019531"
          height="25.83783608022537"
          viewBox="0 0 370.3333333333333 97.47223041675707"
          className="css-1j8o68f"
        >
          <defs id="SvgjsDefs2624">
            <linearGradient id="SvgjsLinearGradient2629">
              <stop
                id="SvgjsStop2630"
                stopColor="#006838"
                offset="0"
              ></stop>
              <stop
                id="SvgjsStop2631"
                stopColor="#96cf24"
                offset="1"
              ></stop>
            </linearGradient>
          </defs>
          <g
            id="SvgjsG2625"
            featurekey="pxMwYC-0"
            transform="matrix(1.3425925925925923,0,0,1.3425925925925923,-12.08333333333333,-11.680555299476339)"
            fill="url(#SvgjsLinearGradient2629)"
          >
            <polygon
              xmlns="http://www.w3.org/2000/svg"
              points="71,48.7 71,18.2 54.8,9 38.7,9 63,22.8 63,36.7 63,53.3 "
            ></polygon>
            <polygon
              xmlns="http://www.w3.org/2000/svg"
              points="29,66 54.8,81 54.7,81 55.1,81.3 71.7,71.7 79.7,57.8 55.3,72 29,56.8 "
            ></polygon>
            <polygon
              xmlns="http://www.w3.org/2000/svg"
              points="61.2,57 61.3,57 46.9,65.2 54.8,69.8 81,54.5 81,35.2 73,21.3 73,49.8 "
            ></polygon>
            <polygon
              xmlns="http://www.w3.org/2000/svg"
              points="61,23.9 34.8,8.7 18.2,18.3 10.2,32.3 35,18 47,25 46.8,25 61,33.2 "
            ></polygon>
            <polygon
              xmlns="http://www.w3.org/2000/svg"
              points="35.2,20.3 9,35.6 9,54.8 17,68.7 17,40.2 28.8,33.2 28.8,33.2 43.2,24.9 "
            ></polygon>
            <polygon
              xmlns="http://www.w3.org/2000/svg"
              points="19,41.3 19,71.8 35.2,81 51.4,81 27,67.2 27,53.3 27,36.7 "
            ></polygon>
          </g>
          <g
            id="SvgjsG2626"
            featurekey="Vx5QiU-0"
            transform="matrix(3.2960363839234232,0,0,3.2960363839234232,114.56093540197215,6.915342069252265)"
            fill="#04292a"
          >
            <path d="M12.65 19.18 q-1.85 1.1 -4.03 1.1 q-2.14 0 -3.95 -1.02 t-2.87 -2.76 t-1.06 -3.8 q0 -2.04 1.06 -3.78 t2.87 -2.76 t3.95 -1.02 q2.16 0 4.02 1.09 t2.92 2.91 l-2.94 1.14 q-0.7 -1 -1.77 -1.64 t-2.23 -0.64 q-1.28 0 -2.36 0.65 t-1.71 1.73 t-0.63 2.32 t0.63 2.33 t1.71 1.74 t2.36 0.65 q1.16 0 2.23 -0.65 t1.77 -1.67 l2.94 1.14 q-1.06 1.84 -2.91 2.94 z M20.009999999999998 19.49 q-1.37 -0.77 -2.17 -2.09 t-0.8 -2.88 q0 -1.54 0.8 -2.86 t2.17 -2.09 t2.99 -0.77 t3 0.77 t2.19 2.09 t0.81 2.86 q0 1.56 -0.81 2.88 t-2.19 2.09 t-3 0.77 t-2.99 -0.77 z M21.48 11.83 q-0.7 0.41 -1.1 1.12 t-0.4 1.57 q0 0.9 0.39 1.61 t1.08 1.12 t1.55 0.41 q0.84 0 1.53 -0.41 t1.09 -1.13 t0.4 -1.6 q0 -0.86 -0.4 -1.57 t-1.09 -1.12 t-1.53 -0.41 q-0.82 0 -1.52 0.41 z M33.89 19.49 q-1.37 -0.77 -2.17 -2.09 t-0.8 -2.88 q0 -1.54 0.8 -2.86 t2.17 -2.09 t2.99 -0.77 t3 0.77 t2.19 2.09 t0.81 2.86 q0 1.56 -0.81 2.88 t-2.19 2.09 t-3 0.77 t-2.99 -0.77 z M35.36 11.83 q-0.7 0.41 -1.1 1.12 t-0.4 1.57 q0 0.9 0.39 1.61 t1.08 1.12 t1.55 0.41 q0.84 0 1.53 -0.41 t1.09 -1.13 t0.4 -1.6 q0 -0.86 -0.4 -1.57 t-1.09 -1.12 t-1.53 -0.41 q-0.82 0 -1.52 0.41 z M48.34 4.880000000000001 l0 8.8 l3.74 -4.62 l3.66 0 l-4.42 5.12 l4.6 5.82 l-3.62 0 l-2.88 -3.6 l-1.08 1.24 l0 2.36 l-3 0 l0 -15.12 l3 0 z M60.09 19.74 q-1.37 -0.54 -2.35 -1.83 t-0.98 -3.37 t0.99 -3.36 t2.37 -1.82 t2.62 -0.54 q1.44 0 2.74 0.64 t2.13 1.88 t0.87 2.94 q0 0.52 -0.02 0.9 t-0.04 0.48 l-8.68 0 q0.24 1.16 1.2 1.58 t1.8 0.42 q1.08 0 1.72 -0.39 t1.1 -0.89 l2.32 1.34 q-1.88 2.56 -5.14 2.56 q-1.28 0 -2.65 -0.54 z M60.7 12.05 q-0.78 0.61 -0.88 1.49 l5.5 0 q-0.06 -0.52 -0.4 -1 t-0.91 -0.79 t-1.29 -0.31 q-1.24 0 -2.02 0.61 z M76.14000000000001 11.87 q-0.86 0.21 -1.58 0.99 t-0.72 2.28 l0 4.86 l-2.98 0 l0 -11 l2.98 0 l0 1.46 q0.74 -0.98 1.81 -1.33 t1.95 -0.33 l0 2.92 q-0.6 -0.06 -1.46 0.15 z"></path>
          </g>
        </svg>
      </p>
      <div className="flex text-sm font-light h-full items-center">
        <Link
          className="px-3 h-full items-center flex hover:bg-primary_green duration-500"
          href="/"
        >
          <p className="font-bold text-[#04292a]">About</p>
        </Link>
        <Link
          className="px-3 h-full items-center flex hover:bg-primary_green duration-500"
          href="/"
        >
          <p className="font-bold text-[#04292a]">New</p>
        </Link>
        <Link
          className="px-3 h-full items-center flex hover:bg-primary_green duration-500"
          href="/login"
        >
          <p className="font-bold text-[#04292a]">Login</p>
        </Link>
        <Link
          className=" bg-primary_green px-3 h-full items-center flex hover:bg-primary_green duration-500"
          href="/"
        >
          <p className="font-bold text-[#04292a]">Home</p>
        </Link>
      </div>
    </nav>
  );
}
