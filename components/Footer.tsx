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
        {/* Microsoft learn Icon */}
        <Link
          href="https://learn.microsoft.com/en-us/users/wajamasara-5731/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity p-0.5"
        >
          {/*  Microsoft learn Icon */}
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-9 h-9"
            aria-hidden="true"
          >
            <path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z" />
          </svg>
        </Link>
        {/* youtube Icon */}
        <Link
          href="https://www.youtube.com/@WAJAmasara"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity p-0.5"
        >
          {/*  youtube Icon */}
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-9 h-9"
            aria-hidden="true"
          >
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
          </svg>
        </Link>
        {/* Leetcode Icon */}
        <Link
          href="https://www.hackerrank.com/profile/wajamasara"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity p-0.5"
        >
          {/*  Leetcode Icon */}
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-9 h-9"
            aria-hidden="true"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12s12-5.372 12-12c0-6.627-5.373-12-12-12zm4.333 16.5h-1.666v-2.25H13.5v2.25h-1.5v-2.25h-1.167v2.25h-1.5v-6H10.5v2.25h1.167v-2.25H13.5v-2.25h1.666v2.25H16.5v2.25h-1.667v1.5zm-2.833-3.75v-1.5h1.667v1.5H13.5z" />
          </svg>
        </Link>
      </div>
    </footer>
  );
}
