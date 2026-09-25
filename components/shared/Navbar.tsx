import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-[5%] py-5 bg-[#0A0F1E]/85 backdrop-blur-md border-b border-[#00D4FF]/15">
      <Link href="/" className="font-signature font-semibold text-[2rem] leading-none tracking-tight text-[#F0F4FF] hover:text-[#00D4FF] hover:drop-shadow-[0_0_10px_rgba(0,212,255,0.8)] transition-all duration-300">
        MS
      </Link>
      <ul className="hidden md:flex gap-9 list-none m-0 p-0">
        <li>
          <Link href="#about" className="font-mono text-[0.85rem] text-[#8892B0] tracking-wider hover:text-[#00D4FF] transition-colors">
            about
          </Link>
        </li>
        <li>
          <Link href="#skills" className="font-mono text-[0.85rem] text-[#8892B0] tracking-wider hover:text-[#00D4FF] transition-colors">
            skills
          </Link>
        </li>
        <li>
          <Link href="#projects" className="font-mono text-[0.85rem] text-[#8892B0] tracking-wider hover:text-[#00D4FF] transition-colors">
            projects
          </Link>
        </li>
        <li>
          <Link href="#learning" className="font-mono text-[0.85rem] text-[#8892B0] tracking-wider hover:text-[#00D4FF] transition-colors">
            learning
          </Link>
        </li>
        <li>
          <Link href="#contact" className="font-mono text-[0.85rem] text-[#8892B0] tracking-wider hover:text-[#00D4FF] transition-colors">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
