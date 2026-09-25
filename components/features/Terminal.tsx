"use client";

import { useState, useEffect } from "react";

export function Terminal() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Handle escape key to close maximized state
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMaximized) {
        setIsMaximized(false);
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMaximized]);

  // Prevent hydration mismatch
  if (!mounted) return null;

  const terminalContent = (
    <div className="font-mono flex flex-col gap-1">
      <span className="text-muted-foreground">&#123;</span>
      <div className="pl-4 sm:pl-6 flex flex-col gap-1">
        <div>
          <span className="text-primary">&quot;name&quot;</span>
          <span className="text-muted-foreground/80">:</span>{" "}
          <span className="text-green-400">&quot;Your Name&quot;</span>,
        </div>
        <div>
          <span className="text-primary">&quot;role&quot;</span>
          <span className="text-muted-foreground/80">:</span>{" "}
          <span className="text-green-400">&quot;Frontend → Full Stack&quot;</span>,
        </div>
        
        <div>
          <span className="text-primary">&quot;frontend&quot;</span>
          <span className="text-muted-foreground/80">:</span>{" "}
          <span className="text-muted-foreground">[</span>
          <div className="pl-4 sm:pl-6">
            <span className="text-green-400">&quot;React&quot;</span>,{" "}
            <span className="text-green-400">&quot;Next.js&quot;</span>,
            <br />
            <span className="text-green-400">&quot;TypeScript&quot;</span>,{" "}
            <span className="text-green-400">&quot;CSS&quot;</span>
          </div>
          <span className="text-muted-foreground">]</span>,
        </div>

        <div>
          <span className="text-primary">&quot;backend&quot;</span>
          <span className="text-muted-foreground/80">:</span>{" "}
          <span className="text-muted-foreground">[</span>
          <div className="pl-4 sm:pl-6">
            <span className="text-green-400">&quot;Node.js&quot;</span>,{" "}
            <span className="text-green-400">&quot;PostgreSQL&quot;</span>,
            <br />
            <span className="text-green-400">&quot;REST APIs&quot;</span>,{" "}
            <span className="text-green-400">&quot;Docker&quot;</span>
          </div>
          <span className="text-muted-foreground">]</span>,
        </div>

        <div>
          <span className="text-primary">&quot;status&quot;</span>
          <span className="text-muted-foreground/80">:</span>{" "}
          <span className="text-green-400">&quot;learning&quot;</span>,
        </div>
        
        <div className="flex items-center">
          <span className="text-primary">&quot;open_to_work&quot;</span>
          <span className="text-muted-foreground/80 mr-2">:</span> 
          <span className="text-orange-400">true</span>
          <span className="inline-block w-2 h-4 bg-primary align-middle ml-2 animate-pulse"></span>
        </div>
      </div>
      <span className="text-muted-foreground">&#125;</span>
    </div>
  );

  const getHeader = (isMaxContext: boolean) => (
    <div className="bg-background/80 px-4 py-3 flex items-center gap-2 border-b border-border select-none shrink-0">
      <button
        onClick={() => {
          if (isMaxContext) setIsMaximized(false);
          setIsMinimized(true);
        }}
        className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-400 active:scale-95 transition-all flex items-center justify-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
        aria-label="Close terminal"
        title="Close"
      >
        <span className="opacity-0 group-hover:opacity-100 text-[#4c0000] text-[9px] leading-none font-bold">✕</span>
      </button>
      <button
        onClick={() => {
          if (isMaxContext) setIsMaximized(false);
          setIsMinimized(!isMinimized);
        }}
        className="w-3.5 h-3.5 rounded-full bg-yellow-500 hover:bg-yellow-400 active:scale-95 transition-all flex items-center justify-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
        aria-label="Minimize terminal"
        title="Minimize"
      >
        <span className="opacity-0 group-hover:opacity-100 text-[#593b00] text-[9px] leading-none font-bold">−</span>
      </button>
      <button
        onClick={() => {
          setIsMinimized(false);
          setIsMaximized(!isMaximized);
        }}
        className="w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-400 active:scale-95 transition-all flex items-center justify-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
        aria-label="Maximize terminal"
        title="Maximize"
      >
        <span className="opacity-0 group-hover:opacity-100 text-[#004d00] text-[9px] leading-none font-bold">＋</span>
      </button>
      <span className="font-mono text-[0.75rem] text-muted-foreground mx-auto font-medium">
        developer.config.json
      </span>
    </div>
  );

  return (
    <>
      {/* 1. Backdrop (Fades in when maximized) */}
      <div
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMaximized ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMaximized(false)}
        aria-hidden="true"
      />

      {/* 2. Maximized Terminal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Maximized Developer Configuration Terminal"
        className={`fixed inset-4 sm:inset-10 md:inset-20 z-50 flex flex-col bg-[#060A14] border border-primary/30 rounded-xl overflow-hidden shadow-[0_0_100px_rgba(var(--color-primary-rgb),0.15)] transition-all duration-300 ease-out ${
          isMaximized ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        {getHeader(true)}
        <div className="p-6 sm:p-8 md:p-12 text-[0.9rem] md:text-base leading-loose overflow-y-auto flex-1 h-full scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border">
          {terminalContent}
        </div>
      </div>

      {/* 3. Original Grid Terminal */}
      <div 
        className={`hero-right hidden md:block w-full transition-all duration-300 ${
          isMaximized ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <div className="relative z-10 bg-[#060A14] border border-border rounded-xl overflow-hidden shadow-2xl flex flex-col">
          {getHeader(false)}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              isMinimized ? "max-h-0 opacity-0" : "max-h-200 opacity-100"
            }`}
          >
            <div className="p-6 text-[0.82rem] leading-loose">
              {terminalContent}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
