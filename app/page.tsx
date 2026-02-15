"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Card = { title: string; body: string; emoji?: string };

export default function Page() {
  
  export default function Page() {

  useEffect(() => {
    const clearAuth = () => {
      document.cookie =
        "valentine_auth=; path=/; domain=.jaheema.com; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    };

    window.addEventListener("beforeunload", clearAuth);

    return () => {
      window.removeEventListener("beforeunload", clearAuth);
    };
  }, []);
  
  const photos = useMemo(
    () => Array.from({ length: 10 }, (_, i) => `/photos/${i + 1}.jpg`),
    []
  );

  const HER_NAME = "Jaheema";
  const YOUR_NAME = "Kechan";
  const PLAYLIST_URL =
    "https://music.apple.com/us/playlist/jay-k/pl.u-r2yB1W4TR639DW";
  const PASSCODE = "0720";

  const highlights: Card[] = [
    { title: "Favorite thing about you", body: "The smell of your skin.", emoji: "🫶🏾" },
    { title: "Favorite date", body: "Empire Steak House (during & after 😊).", emoji: "🥩" },
    { title: "Funniest moment", body: "You trying to creep back into the bed after sleeping on the hard couch 🤣.", emoji: "😂" },
    { title: "Most comforting moment", body: "Making sure I was okay while I was having an asthma attack.", emoji: "🫂" },
    { title: "A moment I felt proud of us", body: "Getting through your kidney biopsy together and your later hospital visit. Just supporting each other in everything we want to do.", emoji: "🤍" },
    { title: "A small thing you do that melts me", body: "When you say “I love you” and my name in that soft voice.", emoji: "💘" },
    { title: "What I admire most about you", body: "How real and genuine you are.", emoji: "✨" },
    { title: "My favorite version of us", body: "Us in NYC for the holidays.", emoji: "🗽" },
    { title: "My promise to you", body: "To not take our love for granted.", emoji: "🤍" },
  ];

  const greenFlags = [
    "You’re as real as they come.",
    "You have no problem admitting when you’re wrong.",
    "You’re loyal.",
    "You’re appreciative.",
  ];

  const littleThings = [
    "You love me for me.",
    "You want to give me the world too.",
    "You’re the sweetest. The universe just needs to give you a damn break.",
  ]

  const insideJokes = [
    "bleachy",
    "eazy wigz",
    "your in-the-closet bestie",
    "the seafood shack triangle drama with your friend",
    "the noise the boat makes that you try to hide with loud music",
  ];

  const chapters: Card[] = [
    {
      title: "What I learned from you",
      body:
        "You’ve taught me that love is patient, hard but rewarding, and that one person can be everything you’ve ever prayed for.",
      emoji: "✨",
    },
    {
      title: "What I want more of in 2026",
      body:
        "More consistency, and more of us working to communicate effectively and understand each other. And more time holding you in my arms and kissing you all over.",
      emoji: "🗓️",
    },
    {
      title: "The kind of love I want to give you",
      body:
        "A love that feels safe, brings you peace, and brings you insurmountable joy. A love that makes you want to wake up each day and create more memories with me.",
      emoji: "🤍",
    },
  ];

  const secretNote =
    "The next time I see you, we’re going to stay in bed all day for at least two days 🤣🤣🤣. Not doing what you think — just me holding you and appreciating the fact that I get to smell you and cuddle you again.";

  const passHint =
    "Hint: the date of our first kiss (the one you don’t seem to remember lol — month first, then day).";

  const longLetter = `Jaheema…

Loving you feels like a dream I never want to wake up from.

You have been such a perfect addition to my life. There’s no one else like you.

— Kechan`;

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % photos.length), 4500);
    return () => clearInterval(t);
  }, [photos.length]);

  const [finalReveal, setFinalReveal] = useState(false);
  const [passInput, setPassInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [shake, setShake] = useState(false);

  const bg =
    "radial-gradient(1200px 600px at 15% 10%, rgba(255,90,170,.18), transparent 55%)," +
    "radial-gradient(900px 600px at 85% 25%, rgba(120,200,255,.14), transparent 55%)," +
    "radial-gradient(1000px 700px at 50% 95%, rgba(255,220,120,.10), transparent 60%)," +
    "#070711";

  function tryUnlock() {
    if (passInput.trim() === PASSCODE) {
      setUnlocked(true);
      setShake(false);
    } else {
      setUnlocked(false);
      setShake(true);
      setTimeout(() => setShake(false), 450);
    }
  }

  return (
    <main style={{ background: bg }} className="min-h-[100svh] text-white">
     <div className="safe-area mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-10">
        {/* HERO */}
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3"
        >
          <p className="text-sm opacity-80">A little corner of the internet… just for us.</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Happy Valentine’s Day, <span className="opacity-90">{HER_NAME}</span> 💌
          </h1>
          <p className="max-w-2xl text-base md:text-lg opacity-85 leading-relaxed">
            If you ever forget how I feel about you, come back here.
          </p>
        </motion.header>

        {/* SLIDESHOW + HIGHLIGHTS */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="rounded-3xl overflow-hidden border border-white/12 bg-white/5">
            <div className="relative aspect-[4/5] md:aspect-[4/4]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={photos[idx]}
                  src={photos[idx]}
                  alt="Us"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
                <div className="flex gap-1">
                  {photos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      className={`h-3 w-3 md:h-3.5 md:w-3.5 rounded-full transition ${
                        i === idx ? "bg-white" : "bg-white/35 hover:bg-white/60"
                      }`}
                      aria-label={`Go to photo ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setIdx((p) => (p - 1 + photos.length) % photos.length)}
                    className="rounded-full bg-white/10 px-3 py-1 text-sm hover:bg-white/15 border border-white/10"
                    aria-label="Previous photo"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setIdx((p) => (p + 1) % photos.length)}
                    className="rounded-full bg-white/10 px-3 py-1 text-sm hover:bg-white/15 border border-white/10"
                    aria-label="Next photo"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/12 bg-white/5 p-5 md:p-6">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">Us, summarized</h2>
                <p className="mt-1 text-sm opacity-80">Remember this playlist we made, just for us?</p>
              </div>

              <a
                href={PLAYLIST_URL}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 rounded-2xl bg-white text-black font-medium px-4 py-2 hover:opacity-90 transition"
              >
                Our playlist 🎶
              </a>
            </div>

            <div className="mt-5 grid gap-3">
              {highlights.map((h) => (
                <div key={h.title} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-wide opacity-70">{h.title}</div>
                  <div className="mt-1 text-base md:text-lg">
                    {h.body} <span className="opacity-90">{h.emoji ?? ""}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setFinalReveal(true)}
              className="mt-6 w-full rounded-2xl bg-white text-black font-medium px-4 py-3 hover:opacity-90 transition"
            >
              One more thing…
            </button>

            <AnimatePresence>
              {finalReveal && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.35 }}
                  className="mt-3 rounded-2xl border border-white/12 bg-white/5 p-4"
                >
                  <p className="text-sm opacity-85 leading-relaxed">
                    I will choose you over and over again! Happy Valentine’s Day, Jaheema. 🤍
                    <br />
                    <br />— {YOUR_NAME}
                  </p>
                  <button
                    onClick={() => setFinalReveal(false)}
                    className="mt-3 text-sm opacity-80 hover:opacity-100 underline underline-offset-4"
                  >
                    hide
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* LIST SECTIONS */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <ListCard title="Green flags" items={greenFlags} emoji="✅" />
          <ListCard title="Little things I notice" items={littleThings} emoji="🧠" />
          <ListCard title="Inside jokes" items={insideJokes} emoji="🤭" />
        </section>

        {/* CHAPTERS */}
        <section className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <h3 className="text-xl md:text-2xl font-semibold">Chapters</h3>
            <p className="text-sm opacity-70">A soft reminder of who we are.</p>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {chapters.map((c) => (
              <div key={c.title} className="rounded-3xl border border-white/12 bg-white/5 p-5">
                <div className="text-xs uppercase tracking-wide opacity-70">{c.title}</div>
                <div className="mt-2 text-base md:text-lg leading-relaxed opacity-90">
                  {c.body} <span className="opacity-90">{c.emoji ?? ""}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECRET NOTE */}
        <section className="mt-10">
          <div className="rounded-3xl border border-white/12 bg-white/5 p-6">
            <h3 className="text-xl md:text-2xl font-semibold">Secret note 🔒</h3>
            <p className="mt-2 text-sm opacity-80">{passHint}</p>

            <div className="mt-4 flex items-center gap-2">
              <motion.input
                value={passInput}
                onChange={(e) => setPassInput(e.target.value)}
                placeholder="passcode"
                className="w-44 rounded-2xl bg-black/30 border border-white/12 px-4 py-2 text-sm outline-none"
                animate={shake ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : { x: 0 }}
                transition={{ duration: 0.45 }}
                inputMode="numeric"
              />
              <button
                onClick={tryUnlock}
                className="rounded-2xl bg-white text-black font-medium px-4 py-2 hover:opacity-90 transition"
              >
                Unlock
              </button>
            </div>

            <AnimatePresence>
              {unlocked && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.35 }}
                  className="mt-5 rounded-2xl border border-white/12 bg-black/20 p-5"
                >
                  <p className="text-sm md:text-base leading-relaxed opacity-90">{secretNote}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* LONG LETTER */}
        <section className="mt-10">
          <div className="rounded-3xl border border-white/12 bg-white/5 p-6 md:p-8">
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <h3 className="text-xl md:text-2xl font-semibold">For you</h3>
              <p className="text-sm opacity-70">Take your time.</p>
            </div>

            <div className="mt-5 relative">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#070711] to-transparent opacity-70 rounded-2xl" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#070711] to-transparent opacity-70 rounded-2xl" />

              <div className="max-h-[55svh] md:max-h-[60svh] overflow-y-auto rounded-2xl border border-white/10 bg-black/20 p-5 md:p-6">
                <p className="whitespace-pre-line text-sm md:text-base leading-relaxed opacity-90">
                  {longLetter}
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-14 pb-10 text-center opacity-60 text-sm">
          Made with love 💘
        </footer>
      </div>
    </main>
  );
}

function ListCard({ title, items, emoji }: { title: string; items: string[]; emoji: string }) {
  return (
    <div className="rounded-3xl border border-white/12 bg-white/5 p-6">
      <div className="text-xs uppercase tracking-wide opacity-70">
        {title} <span className="opacity-90">{emoji}</span>
      </div>
      <ul className="mt-3 space-y-2 text-sm md:text-base opacity-90 leading-relaxed list-disc pl-5">
        {items.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </div>
  );
}