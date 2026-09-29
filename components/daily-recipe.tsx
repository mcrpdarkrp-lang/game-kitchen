"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { recipes } from "@/data/recipes";

export function DailyRecipe() {
  const [selected, setSelected] = useState(recipes[0]);
  const [rolling, setRolling] = useState(false);

  useEffect(() => {
    if (!rolling) return;

    const timeout = setTimeout(() => {
      const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
      setSelected(randomRecipe);
      setRolling(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, [rolling]);

  return (
    <section className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">Receita do dia</p>
            <h2 className="mt-3 font-display text-2xl text-white">Roleta de sabores</h2>
          </div>
          <button
            onClick={() => setRolling(true)}
            className="rounded-full border border-accent/80 bg-accent px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#0b0d12]"
          >
            Sortear
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid gap-8 md:grid-cols-[1fr_1.2fr]"
          >
            <div className="rounded-2xl border border-white/10 bg-[#111827] p-4">
              <div
                className="mb-4 h-56 rounded-2xl border border-white/10 bg-cover bg-center"
                style={{ backgroundImage: `url('${selected.image}')` }}
              />
              <p className="text-xs uppercase tracking-[0.18em] text-white/60">{selected.game}</p>
              <h3 className="mt-3 font-display text-xl text-white">{selected.title}</h3>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/75">
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  {rolling ? "Sorteando..." : "Prato escolhido"}
                </div>
                <p className="max-w-xl text-base text-white/75">{selected.summary}</p>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <Link
                  href={`/recipes/${selected.slug}`}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white hover:bg-white/10"
                >
                  Ver receita
                </Link>
                <span className="text-sm text-white/60">
                  {selected.prepTime} • {selected.difficulty}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
