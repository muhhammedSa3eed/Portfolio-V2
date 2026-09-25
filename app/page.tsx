import { Navbar } from "@/components/shared/Navbar";
import { getProjects } from "@/services/projects";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      {/* Glow Blobs */}
      <div className="fixed rounded-full blur-[120px] pointer-events-none z-0 w-150 h-150 bg-[#00D4FF]/5 -top-50 -right-25"></div>
      <div className="fixed rounded-full blur-[120px] pointer-events-none z-0 w-100 h-100 bg-[#A8FF78]/5 bottom-25 -left-37.5"></div>

      <Navbar />
      
      <main className="flex-1 w-full relative z-10">
        
        {/* HERO */}

        <section id="hero" className="min-h-screen flex items-center pt-25 px-[8%] max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center w-full max-w-300 mx-auto">
            <div className="hero-left">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 font-mono text-[0.75rem] text-[#00D4FF] tracking-[0.15em] uppercase mb-6 shadow-[0_0_15px_rgba(0,212,255,0.15)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D4FF]"></span>
                </span>
                Available for opportunities
              </div>
              <h1 className="font-heading text-[clamp(2.4rem,5vw,3.8rem)] font-bold leading-[1.1] tracking-tight mb-4">
                Frontend Dev.<br/>Going Full<br/><span className="text-[#00D4FF]">Stack.</span>
              </h1>
              <p className="text-[1.1rem] text-[#A8B2D8] max-w-120 mb-10 leading-[1.7]">
                I craft clean, performant UIs — and I&apos;m actively expanding into backend systems, APIs, and databases. Building the full picture.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="#projects" className="bg-[#00D4FF] text-[#0A0F1E] px-7 py-3 rounded-md font-heading font-semibold text-[0.9rem] tracking-wide hover:opacity-85 hover:-translate-y-px transition-all">
                  View Projects
                </Link>
                <Link href="#contact" className="border border-[#00D4FF]/15 text-[#A8B2D8] px-7 py-3 rounded-md font-heading font-medium text-[0.9rem] tracking-wide hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all">
                  Get In Touch
                </Link>
              </div>
            </div>

            <div className="hero-right hidden md:block">
              <div className="bg-[#060A14] border border-[#00D4FF]/15 rounded-xl overflow-hidden shadow-[0_0_60px_rgba(0,212,255,0.08)]">
                <div className="bg-[#0E1528] px-4 py-3 flex items-center gap-2 border-b border-[#00D4FF]/15">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                  <span className="font-mono text-[0.75rem] text-[#8892B0] mx-auto">developer.config.json</span>
                </div>
                <div className="p-6 font-mono text-[0.82rem] leading-loose">
                  <span className="text-[#8892B0]">&#123;</span><br/>
                  &nbsp;&nbsp;<span className="text-[#00D4FF]">&quot;name&quot;</span><span className="text-[#A8B2D8]">:</span> <span className="text-[#A8FF78]">&quot;Your Name&quot;</span>,<br/>
                  &nbsp;&nbsp;<span className="text-[#00D4FF]">&quot;role&quot;</span><span className="text-[#A8B2D8]">:</span> <span className="text-[#A8FF78]">&quot;Frontend → Full Stack&quot;</span>,<br/>
                  &nbsp;&nbsp;<span className="text-[#00D4FF]">&quot;frontend&quot;</span><span className="text-[#A8B2D8]">:</span> <span className="text-[#8892B0]">[</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#A8FF78]">&quot;React&quot;</span>, <span className="text-[#A8FF78]">&quot;Next.js&quot;</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#A8FF78]">&quot;TypeScript&quot;</span>, <span className="text-[#A8FF78]">&quot;CSS&quot;</span><br/>
                  &nbsp;&nbsp;<span className="text-[#8892B0]">]</span>,<br/>
                  &nbsp;&nbsp;<span className="text-[#00D4FF]">&quot;backend&quot;</span><span className="text-[#A8B2D8]">:</span> <span className="text-[#8892B0]">[</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#A8FF78]">&quot;Node.js&quot;</span>, <span className="text-[#A8FF78]">&quot;PostgreSQL&quot;</span>,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#A8FF78]">&quot;REST APIs&quot;</span>, <span className="text-[#A8FF78]">&quot;Docker&quot;</span><br/>
                  &nbsp;&nbsp;<span className="text-[#8892B0]">]</span>,<br/>
                  &nbsp;&nbsp;<span className="text-[#00D4FF]">&quot;status&quot;</span><span className="text-[#A8B2D8]">:</span> <span className="text-[#A8FF78]">&quot;learning&quot;</span>,<br/>
                  &nbsp;&nbsp;<span className="text-[#00D4FF]">&quot;open_to_work&quot;</span><span className="text-[#A8B2D8]">:</span> <span className="text-[#FFB86C]">true</span><span className="inline-block w-2 h-3.5 bg-[#00D4FF] align-middle ml-1 animate-pulse"></span><br/>
                  <span className="text-[#8892B0]">&#125;</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-px mx-[5%] bg-linear-to-r from-transparent via-[#00D4FF]/15 to-transparent relative z-10"></div>

        {/* ABOUT */}
        <section id="about" className="py-30 px-[5%] max-w-300 mx-auto relative z-10">
          <div className="font-mono text-[0.75rem] text-[#00D4FF] tracking-[0.15em] uppercase mb-3">01 — about</div>
          <h2 className="font-heading text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-tight mb-12">The <span className="text-[#00D4FF]">Story</span> So Far</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-start">
            <div className="text-[0.97rem] text-[#A8B2D8] leading-[1.8] space-y-5">
              <p>
                I started as a frontend engineer — obsessed with <strong className="text-[#F0F4FF] font-medium">pixel-perfect interfaces</strong>, smooth animations, and responsive design. I know how to make things look and feel great in the browser.
              </p>
              <p>
                But I kept hitting the same wall: I&apos;d build a beautiful UI and then rely on someone else&apos;s API, someone else&apos;s database schema, someone else&apos;s auth system. I wanted to <strong className="text-[#F0F4FF] font-medium">own the full picture</strong>.
              </p>
              <p>
                So I made the decision to go deep into backend development — not to abandon frontend, but to become the kind of engineer who understands the entire system and can build it end-to-end.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white/5 border border-[#00D4FF]/15 rounded-lg p-6 hover:border-[#00D4FF] transition-colors">
                <span className="font-heading text-[2rem] font-bold text-[#00D4FF] block">3+</span>
                <div className="text-[0.82rem] text-[#8892B0] mt-1">Years in frontend development</div>
              </div>
              <div className="bg-white/5 border border-[#00D4FF]/15 rounded-lg p-6 hover:border-[#00D4FF] transition-colors">
                <span className="font-heading text-[2rem] font-bold text-[#00D4FF] block">10+</span>
                <div className="text-[0.82rem] text-[#8892B0] mt-1">Projects shipped to production</div>
              </div>
              <div className="bg-white/5 border border-[#00D4FF]/15 rounded-lg p-6 hover:border-[#00D4FF] transition-colors">
                <span className="font-heading text-[2rem] font-bold text-[#00D4FF] block">∞</span>
                <div className="text-[0.82rem] text-[#8892B0] mt-1">APIs I wish I had written myself</div>
              </div>
              <div className="bg-white/5 border border-[#00D4FF]/15 rounded-lg p-6 hover:border-[#00D4FF] transition-colors">
                <span className="font-heading text-[2rem] font-bold text-[#00D4FF] block">Now</span>
                <div className="text-[0.82rem] text-[#8892B0] mt-1">Actively learning backend systems</div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="text-center py-8 border-t border-[#00D4FF]/15 font-mono text-[0.75rem] text-[#8892B0] relative z-10">
        <span className="text-[#00D4FF]">// </span>built with intention · 2024
      </footer>
    </div>
  );
}
