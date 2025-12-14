import Link from "next/link";

export default function Navbar() {
  return (
    <footer className="flex w-full items-center justify-between bg-[#231F20] px-8 py-5 text-white">
      <Link
        href="/"
        className="text-xl tracking-wide hover:opacity-80 transition-opacity"
      >
        <span className="font-bold">Jiyath</span>Amasara
      </Link>

      <div className="hidden md:flex gap-28 font-medium text-sm"></div>
      <div className="flex items-center gap-4">
        {/* RIGHT: GitHub Icon */}
        <Link
          href="https://github.com/WAJAMASARA"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          {/* GitHub SVG Icon */}
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-9 h-9"
            aria-hidden="true"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </Link>
        {/*  LinkedIn Icon */}
        <Link
          href="https://www.linkedin.com/in/jiyath-amasara/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity p-0.5"
        >
          {/* LinkedIN SVG Icon */}
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-9 h-9"
            aria-hidden="true"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
        </Link>
        {/* Stackoverflow Icon */}
        <Link
          href="https://stackoverflow.com/users/24306402/w-a-j-amasara"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity p-0.5"
        >
          {/* Stackoverflow Icon */}
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-9 h-9"
            aria-hidden="true"
          >
            <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282h9.984zM11.524 5.245L8.17 6.686l.572 1.332 3.353-1.44-.571-1.333zM6.887 8.213l3.473 1.261.491-1.353-3.472-1.26-.492 1.352zm-.5 3.196l3.66 0 .002-1.426-3.662 0 .002 1.426zm2.337-7.228l-1.383 1.375 2.457 2.453 1.383-1.375-2.457-2.453zm4.26-2.618L14.657 0l-2.762 1.95 1.667 2.372 2.762-1.95z" />
          </svg>
        </Link>
      </div>
    </footer>
  );
}
