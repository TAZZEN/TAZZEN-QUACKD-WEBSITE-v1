import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronRight,
  Clipboard,
  Code2,
  Github,
  Heart,
  Menu,
  Play,
  Radio,
  Sparkles,
  Terminal,
  X,
  Zap,
} from 'lucide-react';
import duckAsset from '/assets/file_00000000df04820ab7f4078bfbeda36d_1788601749574.png';
import './index.css';

const CONTRACT = 'GMogeMjrWFaEceasCPathoibjAh8qwhTC3Chw4Bfpump';

const navItems = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Token', 'token'],
  ['How it works', 'how-it-works'],
  ['Community', 'community'],
];

const commandResponses: Record<string, string> = {
  'Find the ball': 'Scanning environment... Route locked. Ball acquired.',
  'Look around': '360° scan complete. Three objects, one curious pigeon.',
  'Follow me': 'Target tagged. Following at a safe and respectful distance.',
  'Say hello': 'Hello, human. It is a beautiful day to build small robots.',
  'Quack loudly': 'QUACK QUACK QUACK. Audio output: maximum personality.',
};

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

function useMedia(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [query]);

  return matches;
}

function scrollToId(id: string) {
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  document.getElementById(id)?.scrollIntoView({ behavior, block: 'start' });
}

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.52, delay: reduceMotion ? 0 : delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

function DuckMark({ small = false }: { small?: boolean }) {
  return (
    <svg viewBox="0 0 90 86" width={small ? 31 : 90} height={small ? 30 : 86} role="img" aria-label="QUACKD robot duck">
      <path d="M17 52c-3-11 2-25 13-31 3-13 14-20 27-18 11 1 19 8 22 17 7 3 10 11 8 18-1 6-5 11-11 14l-3 17H24l-7-17Z" fill="#b69af7" stroke="#8b65ce" strokeWidth="2.3" />
      <path d="M23 38c0-11 8-18 20-18h18c11 0 20 6 20 17v12H23V38Z" fill="#30223b" stroke="#5e477c" strokeWidth="2" />
      <ellipse cx="60" cy="38" rx="7.7" ry="8.4" fill="#f9c72d" />
      <circle cx="62" cy="35.4" r="2.1" fill="#fffdf1" />
      <path d="M71 43c11-5 18-2 17 3-1 6-8 8-18 4Z" fill="#f4b522" stroke="#ffda4d" strokeWidth="1.7" />
      <path d="M29 50v14m43-14v14M31 64l-5 9m40-9 5 9" stroke="#8f6adc" strokeWidth="3" strokeLinecap="round" />
      <path d="M18 73h17m27 0h17" stroke="#f4b522" strokeWidth="5.5" strokeLinecap="round" />
    </svg>
  );
}

function Mascot() {
  const reduceMotion = useReducedMotion();
  const isMobile = useMedia('(max-width: 767px)');
  const shouldIdle = !reduceMotion && !isMobile;
  const particles = [
    { x: '9%', y: '24%', delay: 0, icon: Heart },
    { x: '86%', y: '15%', delay: 1.2, icon: Sparkles },
    { x: '90%', y: '68%', delay: 2, icon: Heart },
    { x: '14%', y: '76%', delay: 1.5, icon: Sparkles },
  ];
  const visibleParticles = isMobile ? particles.slice(0, 2) : particles;

  return (
    <div className="mascot-stage relative mx-auto h-[350px] w-full max-w-[510px] sm:h-[500px]" aria-label="Animated robot duck mascot">
      <div className="mascot-halo absolute left-1/2 top-1/2 h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
      <div className="mascot-orbit absolute inset-[7%] rounded-[44%] border border-dashed border-[#b691ec]/35" />
      <div className="mascot-orbit absolute inset-[16%] rounded-[42%] border border-[#f4b8cf]/45" />
      {visibleParticles.map(({ x, y, delay, icon: Icon }, index) => (
        <motion.span
          key={index}
          className={`mascot-particle absolute z-10 text-[#db7ca8] ${shouldIdle ? 'is-idle' : ''}`}
          style={{ left: x, top: y }}
          initial={{ opacity: shouldIdle ? 0.38 : 0.65 }}
          animate={shouldIdle ? { opacity: [0.38, 1, 0.38], y: [0, -9, 0], rotate: [-8, 8, -8] } : undefined}
          transition={{ duration: 3.4, repeat: Infinity, delay, ease: 'easeInOut' }}
        >
          <Icon size={index % 2 ? 18 : 21} fill={index % 2 ? 'none' : 'currentColor'} />
        </motion.span>
      ))}
      <motion.div
        className={`mascot-image-wrap absolute left-1/2 top-[3%] w-[min(75vw,360px)] -translate-x-1/2 overflow-hidden rounded-[42%] shadow-[0_26px_55px_rgba(119,83,165,.18)] ${shouldIdle ? 'is-idle' : ''}`}
        animate={shouldIdle ? { y: [0, -9, 0], rotate: [-1.2, 1.2, -1.2] } : undefined}
        transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img src={duckAsset} alt="Glossy lavender QUACKD robot duck with a yellow eye and articulated legs" className="block h-auto w-full" />
      </motion.div>
      <div className="absolute bottom-[5%] left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#d7c5ee] bg-[#fffdf7]/95 px-3.5 py-2 font-mono text-[10px] font-medium tracking-[.12em] text-[#624b77] shadow-[0_10px_30px_rgba(119,83,165,.12)]">
        <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#efab2c]" /> BRAIN ONLINE
      </div>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  const navigate = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav className={`nav-shell mx-auto flex max-w-[1220px] items-center justify-between rounded-[20px] px-4 py-3 sm:px-5 ${scrolled ? 'nav-shell-scrolled' : ''}`} aria-label="Main navigation">
        <button type="button" onClick={() => navigate('home')} className="focus-ring flex items-center gap-2 text-left" data-testid="button-brand-home">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#eee3ff]"><DuckMark small /></span>
          <span className="font-mono text-sm font-medium tracking-[.18em] text-[#3e294e]">QUACKD</span>
        </button>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map(([label, id]) => (
            <button key={id} type="button" onClick={() => navigate(id)} className="focus-ring nav-link text-[11px] font-bold uppercase tracking-[.13em]" data-testid={`link-nav-${id}`}>{label}</button>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <a href="https://github.com/rokbenko/quackd" target="_blank" rel="noreferrer" className="focus-ring social-button hidden rounded-xl p-2 sm:block" aria-label="QUACKD on GitHub" data-testid="link-nav-github"><Github size={17} /></a>
          <a href="https://x.com/rokbenko" target="_blank" rel="noreferrer" className="focus-ring social-button hidden rounded-xl p-2 sm:block" aria-label="QUACKD on X" data-testid="link-nav-x"><X size={17} /></a>
          <button type="button" onClick={() => navigate('token')} className="focus-ring button-yellow hidden rounded-xl px-4 py-2.5 text-[11px] font-bold uppercase tracking-[.08em] sm:block" data-testid="button-nav-buy">Buy $QUACKD <ArrowUpRight className="ml-1 inline" size={14} /></button>
          <button type="button" onClick={() => setOpen((current) => !current)} className="focus-ring nav-menu rounded-xl p-2 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" data-testid="button-mobile-menu">{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ opacity: 0, y: -6, scale: .98, clipPath: 'inset(0 0 100% 0 round 16px)' }} animate={{ opacity: 1, y: 0, scale: 1, clipPath: 'inset(0 0 0% 0 round 16px)' }} exit={{ opacity: 0, y: -6, scale: .98, clipPath: 'inset(0 0 100% 0 round 16px)' }} transition={{ duration: .22, ease: EASE_OUT }} className="nav-shell mx-auto mt-2 max-w-[1220px] rounded-2xl p-3 md:hidden">
            {navItems.map(([label, id]) => <button key={id} type="button" onClick={() => navigate(id)} className="focus-ring nav-mobile-link block w-full rounded-xl px-3 py-3 text-left text-xs font-bold uppercase tracking-[.13em]" data-testid={`link-mobile-${id}`}>{label}</button>)}
            <button type="button" onClick={() => navigate('token')} className="button-yellow mt-2 w-full rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-[.1em]" data-testid="button-mobile-buy">Buy $QUACKD</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function ContractCard() {
  const [copied, setCopied] = useState(false);
  const copiedTimer = useRef<number | null>(null);

  useEffect(() => () => {
    if (copiedTimer.current) window.clearTimeout(copiedTimer.current);
  }, []);

  const copyContract = async () => {
    try {
      await navigator.clipboard?.writeText(CONTRACT);
      setCopied(true);
      if (copiedTimer.current) window.clearTimeout(copiedTimer.current);
      copiedTimer.current = window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };
  return (
    <div className="soft-card relative rounded-2xl p-4 sm:p-5">
      <div className="mb-3 flex min-w-0 items-center justify-between gap-3">
        <span className="eyebrow">Solana contract</span>
        <span className="flex min-w-0 items-center gap-1.5 truncate whitespace-nowrap font-mono text-[10px] text-[#806c8d]"><span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#eeb52e]" /> LIVE ON MAINNET</span>
      </div>
      <div className="contract-row flex items-center gap-3 rounded-xl p-3">
        <code className="min-w-0 flex-1 truncate font-mono text-[11px] text-[#5c486c] sm:text-xs" data-testid="text-contract-address">{CONTRACT}</code>
        <button type="button" onClick={copyContract} className="focus-ring copy-button flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 font-mono text-[10px]" aria-label="Copy contract address" data-testid="button-copy-contract">
          {copied ? <Check size={14} /> : <Clipboard size={14} />} <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>
      <AnimatePresence mode="wait">
        {copied && <motion.p initial={{ opacity: 0, y: 3 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute bottom-[-28px] left-0 font-mono text-[10px] text-[#b65c86]" role="status" data-testid="status-contract-copied">Contract copied. Quack!</motion.p>}
      </AnimatePresence>
    </div>
  );
}

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return <div className="mb-5 flex items-center gap-3"><span className="font-mono text-[10px] text-[#b65c86]">{number}</span><span className="h-px w-8 bg-[#e7a7c4]" /><span className="eyebrow">{children}</span></div>;
}

function App() {
  const [activeCommand, setActiveCommand] = useState('Find the ball');
  const [missionRunning, setMissionRunning] = useState(false);
  const missionTimer = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => () => {
    if (missionTimer.current) window.clearTimeout(missionTimer.current);
  }, []);

  const runMission = (command: string) => {
    if (missionTimer.current) window.clearTimeout(missionTimer.current);
    setActiveCommand(command);
    setMissionRunning(true);
    missionTimer.current = window.setTimeout(() => setMissionRunning(false), 700);
  };

  return (
    <main className="quackd-page" id="home">
      <Nav />
      <section className="hero-section relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-40">
        <div className="grid-field absolute inset-x-0 top-0 h-[650px]" />
        <div className="section-wrap relative grid items-center gap-2 lg:grid-cols-[1.05fr_.95fr] lg:gap-8">
          <div className="relative z-10">
            <Reveal><div className="status-pill mb-6 inline-flex items-center gap-2 rounded-full px-3 py-2 font-mono text-[10px] font-medium tracking-[.13em]"><span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[#e9a92a]" /> OPEN-SOURCE ROBOTICS / COMMUNITY TOKEN</div></Reveal>
            <Reveal delay={.08}><h1 className="hero-title max-w-[780px] text-balance font-bold leading-[.88] tracking-[-.075em] text-[#3e294e]">Give the Meme Duck a <span className="relative whitespace-nowrap text-[#9a6bd2]">Brain<span className="hero-underline absolute -bottom-2 left-1/2 h-1.5 w-[70%] -translate-x-1/2 rounded-full" /></span><span className="text-[#e9ae2c]">.</span></h1></Reveal>
            <Reveal delay={.16}><p className="mt-8 max-w-[440px] text-lg leading-relaxed text-[#76627f] sm:text-xl">Small robot. Big brain. <span className="font-semibold text-[#52385f]">Maximum quack.</span></p></Reveal>
            <Reveal delay={.24}><div className="mt-9 flex flex-wrap items-center gap-3"><button type="button" onClick={() => scrollToId('mission')} className="focus-ring button-yellow group rounded-xl px-5 py-3.5 text-sm font-bold" data-testid="button-hero-try">Try the brain <Play className="ml-2 inline-block fill-current" size={14} /></button><button type="button" onClick={() => scrollToId('about')} className="focus-ring button-outline rounded-xl px-5 py-3.5 text-sm font-bold" data-testid="button-hero-learn">Meet QUACKD <ArrowDown className="ml-2 inline-block" size={14} /></button></div></Reveal>
            <Reveal delay={.32}><div className="mt-11 max-w-[560px]"><ContractCard /></div></Reveal>
          </div>
          <Reveal delay={.18} className="relative z-0"><Mascot /></Reveal>
        </div>
      </section>

      <section id="about" className="section-wrap scroll-mt-28 py-20 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <Reveal><SectionLabel number="01">The idea</SectionLabel><h2 className="max-w-sm text-4xl font-bold leading-[.98] tracking-[-.05em] text-[#3e294e] sm:text-5xl">A tiny body deserves a <span className="text-[#9a6bd2]">serious mind.</span></h2></Reveal>
          <Reveal delay={.12}><div className="max-w-2xl"><p className="text-xl leading-relaxed text-[#5b4568] sm:text-2xl">QUACKD is a community-powered experiment in making small robots feel a little more alive.</p><p className="mt-6 leading-7 text-[#806d88]">Inspired by the open-source quackd robotics project, QUACKD connects an approachable robot body to the expressive power of large language models. Instead of wiring every behavior by hand, you tell it what you want in plain language. The duck translates intent into action, one curious mission at a time.</p><div className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.14em] text-[#b65c86]"><BrainCircuit size={17} /> Language in. Motion out.</div></div></Reveal>
        </div>
        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Tiny body', 'Compact hardware, expressive movement, an unreasonable amount of charm.', Zap],
            ['Cloud brain', 'Large language models turn fuzzy human intent into concrete next steps.', BrainCircuit],
            ['Simple commands', 'No control panel degree required. Say what you mean.', Code2],
            ['Maximum personality', 'Every mission ships with a little more duck in it.', Sparkles],
          ].map(([title, copy, Icon], index) => {
            const FeatureIcon = Icon as typeof Zap;
            return <Reveal key={title as string} delay={index * .07}><article className="pastel-card group h-full rounded-2xl p-5 transition-transform hover:-translate-y-1"><div className="icon-tile mb-12 flex h-10 w-10 items-center justify-center rounded-xl transition-colors"><FeatureIcon size={19} /></div><h3 className="text-base font-bold text-[#4a3157]">{title as string}</h3><p className="mt-2 text-sm leading-6 text-[#806d88]">{copy as string}</p></article></Reveal>;
          })}
        </div>
      </section>

      <section className="section-wrap py-12 sm:py-24">
        <Reveal><div className="soft-card relative overflow-hidden rounded-3xl p-5 sm:p-8"><div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#d9c5fa]/40 blur-3xl" /><div className="relative grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><SectionLabel number="02">Mission control</SectionLabel><h2 className="max-w-sm text-3xl font-bold leading-tight tracking-[-.04em] text-[#493253] sm:text-4xl">Intent goes in.<br /><span className="text-[#9a6bd2]">Quack happens.</span></h2><p className="mt-5 max-w-sm text-sm leading-6 text-[#806d88]">A glimpse at the language-to-motion loop. No magic, just thoughtfully connected systems.</p></div><div className="terminal-window overflow-hidden rounded-2xl"><div className="terminal-top flex items-center gap-2 border-b px-4 py-3"><Terminal size={14} className="text-[#bd77a7]" /><span className="font-mono text-[10px] text-[#9d829f]">quackd / mission-runner</span><span className="ml-auto flex gap-1"><i className="h-1.5 w-1.5 rounded-full bg-[#ef8eaa]" /><i className="h-1.5 w-1.5 rounded-full bg-[#efc451]" /><i className="h-1.5 w-1.5 rounded-full bg-[#87c798]" /></span></div><div className="space-y-3 p-5 font-mono text-xs leading-relaxed sm:p-7 sm:text-sm"><p className="text-[#f1c642]"><span className="text-[#aa90a8]">you &gt;</span> Find the ball and kick it</p><p className="text-[#c4afc3]"><span className="mr-2 text-[#bd85de]">01</span> Scanning environment...</p><p className="text-[#c4afc3]"><span className="mr-2 text-[#bd85de]">02</span> Planning route...</p><p className="text-[#8bc797]"><span className="mr-2 text-[#bd85de]">03</span> Mission complete. Quack!</p><div className="beam mt-5" /></div></div></div></div></Reveal>
      </section>

      <section id="token" className="section-wrap scroll-mt-28 py-20 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <Reveal><SectionLabel number="03">The token</SectionLabel><h2 className="max-w-md text-4xl font-bold leading-[.95] tracking-[-.05em] text-[#3e294e] sm:text-6xl">A signal for the <span className="text-[#d09b24]">flock.</span></h2></Reveal>
          <Reveal delay={.1}><p className="max-w-lg text-base leading-7 text-[#806d88]">$QUACKD is the community meme coin supported by this project. It gives the flock a shared symbol around the open-source robotics idea: small robots, big personalities, and a community that wants to build together.</p></Reveal>
        </div>
        <Reveal delay={.15}><div className="token-panel mt-12 grid overflow-hidden rounded-3xl sm:grid-cols-2"><div className="token-art relative min-h-[280px] overflow-hidden p-7 sm:min-h-[390px]"><div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[#eadbff]/70 blur-3xl" /><div className="relative flex h-full flex-col justify-between"><div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.15em] text-[#a76689]"><Zap size={14} /> Token identity</div><div><div className="font-mono text-7xl font-medium tracking-[-.09em] text-[#59416a] sm:text-8xl">$Q</div><p className="mt-2 text-sm text-[#806783]">Built on Solana. Powered by curious people.</p></div></div></div><div className="token-facts grid sm:grid-cols-2"><div className="token-fact border-b p-6 sm:border-r"><span className="eyebrow">Name</span><p className="mt-3 text-xl font-bold text-[#4c3459]">QUACKD</p></div><div className="token-fact border-b p-6"><span className="eyebrow">Symbol</span><p className="mt-3 text-xl font-bold text-[#4c3459]">$QUACKD</p></div><div className="token-fact border-b p-6 sm:border-b-0 sm:border-r"><span className="eyebrow">Network</span><p className="mt-3 text-xl font-bold text-[#4c3459]">Solana</p></div><div className="token-fact p-6"><span className="eyebrow">Contract</span><p className="mt-3 break-all font-mono text-[11px] leading-5 text-[#765d80]">{CONTRACT}</p></div></div></div></Reveal>
      </section>

      <section id="how-it-works" className="how-section scroll-mt-28 border-y py-20 sm:py-32">
        <div className="section-wrap">
          <Reveal><SectionLabel number="04">How it works</SectionLabel><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className="max-w-xl text-4xl font-bold leading-[.95] tracking-[-.05em] text-[#3e294e] sm:text-6xl">Four moves from <span className="text-[#9a6bd2]">thought</span> to <span className="text-[#d09b24]">quack.</span></h2><p className="max-w-xs text-sm leading-6 text-[#806d88]">The loop is simple on purpose. More room for the duck to surprise you.</p></div></Reveal>
          <div className="mt-14 grid gap-3 md:grid-cols-4">
            {[
              ['01', 'Speak', 'Give QUACKD a natural-language command.'],
              ['02', 'Interpret', 'The cloud brain maps intent to a plan.'],
              ['03', 'Move', 'The robot turns that plan into motion.'],
              ['04', 'Learn', 'The flock makes every next quack better.'],
            ].map(([number, title, copy], index) => <Reveal key={number} delay={index * .08}><article className="step-card relative min-h-[205px] rounded-2xl p-5"><span className="font-mono text-xs text-[#b65c86]">{number}</span><div className="mt-14"><h3 className="text-xl font-bold text-[#4e365b]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#806d88]">{copy}</p></div>{index < 3 && <ChevronRight className="absolute -right-3 top-1/2 z-10 hidden text-[#d39a2d] md:block" size={18} />}</article></Reveal>)}
          </div>
        </div>
      </section>

      <section id="mission" className="section-wrap scroll-mt-28 py-20 sm:py-32">
        <Reveal><div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-stretch"><div className="mission-yellow flex flex-col justify-between rounded-3xl p-7 text-[#4a3527] sm:p-9"><div><div className="mb-6 flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[.15em]"><Radio size={15} /> Live interface</div><h2 className="max-w-sm text-4xl font-bold leading-[.94] tracking-[-.06em] sm:text-5xl">Tell the duck what to do.</h2><p className="mt-5 max-w-sm text-sm leading-6 text-[#795c43]">Pick a mission. QUACKD will handle the rest. This is what a small robot with a big brain feels like.</p></div><div className="mt-14 flex items-center gap-3 border-t border-[#684a2b]/15 pt-5 font-mono text-[10px] uppercase tracking-[.12em]"><span className="pulse-dot h-2 w-2 rounded-full bg-[#684a2b]" /> brain status: ready</div></div><div className="soft-card rounded-3xl p-5 sm:p-8"><div className="mb-7 flex items-center justify-between"><div><span className="eyebrow">Mission panel</span><h3 className="mt-2 text-xl font-bold text-[#4c3459]">What should I do?</h3></div><div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dbc7e8] bg-[#f6ecff]"><DuckMark small /></div></div><div className="grid gap-2 sm:grid-cols-2">{Object.keys(commandResponses).map((command) => <button key={command} type="button" onClick={() => runMission(command)} className={`focus-ring mission-button group flex items-center justify-between rounded-xl border p-3.5 text-left text-sm transition-all ${activeCommand === command ? 'mission-active' : ''}`} data-testid={`button-mission-${command.toLowerCase().replaceAll(' ', '-')}` }><span>{command}</span><ArrowUpRight className={`transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${activeCommand === command ? 'text-[#b65c86]' : 'text-[#a990ac]'}`} size={15} /></button>)}</div><div className="response-box mt-5 min-h-[94px] rounded-xl p-4 font-mono text-[11px] leading-6" aria-live="polite" aria-busy={missionRunning}><div className="mb-1 text-[#9d829f]">quackd.response</div><AnimatePresence mode="wait"><motion.p key={`${activeCommand}-${missionRunning ? 'thinking' : 'done'}`} initial={reduceMotion ? false : { opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -3 }} transition={{ duration: .18, ease: EASE_OUT }} className={missionRunning ? 'text-[#b9822a]' : 'text-[#8567a2]'} data-testid="text-mission-response">{missionRunning ? 'Thinking...' : commandResponses[activeCommand]}</motion.p></AnimatePresence></div></div></div></Reveal>
      </section>

      <section id="community" className="scroll-mt-28 pb-20 sm:pb-32">
        <div className="section-wrap"><Reveal><div className="community-card relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-24"><div className="absolute left-1/2 top-0 h-56 w-96 -translate-x-1/2 rounded-full bg-[#e1cbff]/80 blur-3xl" /><div className="relative"><span className="eyebrow">05 / Join the flock</span><h2 className="mx-auto mt-5 max-w-3xl text-5xl font-bold leading-[.9] tracking-[-.065em] text-[#4c3459] sm:text-7xl">Ready to Quack the <span className="text-[#9a6bd2]">Future?</span></h2><p className="mx-auto mt-6 max-w-md text-sm leading-6 text-[#806d88]">Follow the build. Read the code. Bring your weirdest robot idea. The flock is just getting started.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><a href="https://github.com/rokbenko/quackd" target="_blank" rel="noreferrer" className="focus-ring community-github inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold" data-testid="link-community-github"><Github size={17} /> Explore on GitHub <ArrowUpRight size={14} /></a><a href="https://x.com/rokbenko" target="_blank" rel="noreferrer" className="focus-ring button-yellow inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold" data-testid="link-community-x"><X size={17} /> Follow on X <ArrowUpRight size={14} /></a></div></div></div></Reveal></div>
      </section>

      <footer className="footer-shell border-t py-10">
        <div className="section-wrap flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"><div><div className="flex items-center gap-2"><DuckMark small /><span className="font-mono text-sm tracking-[.17em] text-[#4c3459]">QUACKD</span></div><p className="mt-4 max-w-md text-xs leading-5 text-[#806d88]">QUACKD is the community meme coin supported by this website, inspired by the open-source quackd robotics idea and powered by the flock.</p></div><div className="flex flex-col items-start gap-4 sm:items-end"><div className="flex gap-5 font-mono text-[10px] uppercase tracking-[.13em] text-[#806d88]"><button type="button" onClick={() => scrollToId('about')} className="focus-ring hover:text-[#b65c86]" data-testid="link-footer-about">About</button><button type="button" onClick={() => scrollToId('token')} className="focus-ring hover:text-[#b65c86]" data-testid="link-footer-token">Token</button><a href="https://github.com/rokbenko/quackd" target="_blank" rel="noreferrer" className="focus-ring hover:text-[#b65c86]" data-testid="link-footer-github">GitHub</a><a href="https://x.com/rokbenko" target="_blank" rel="noreferrer" className="focus-ring hover:text-[#b65c86]" data-testid="link-footer-x">X</a></div><div className="max-w-[440px] text-left font-mono text-[9px] leading-4 text-[#9d899f] sm:text-right">CONTRACT: {CONTRACT}<br />QUACKD community meme coin on Solana. DYOR.</div></div></div>
      </footer>
    </main>
  );
}

export default App;
