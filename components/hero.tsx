"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingPlate } from "@/components/floating-plate";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-18 pt-10 md:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80">
            <Sparkles className="mr-2 h-3.5 w-3.5 text-accent" />
            Fan-made recipes
          </div>

          <h1 className="font-display max-w-xl text-[clamp(2.2rem,5vw,5rem)] leading-[1.1] text-white">
            Game Kitchen
          </h1>

          <p className="mt-5 max-w-lg text-base text-white/75 md:text-lg">
            Receitas reais inspiradas em comidas de videogames, com o espírito de uma cozinha de fã:
            aconchegante, exagerada e irresistível.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="group">
              Ver receitas
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="secondary" size="lg">
              Receita do dia
            </Button>
          </div>

          <div className="mt-10 flex gap-6 text-sm text-white/65">
            <div>
              <span className="block font-display text-xl text-accent">8+</span>
              receitas
            </div>
            <div>
              <span className="block font-display text-xl text-mint">4+</span>
              jogos
            </div>
            <div>
              <span className="block font-display text-xl text-violet">100%</span>
              fã
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute h-[300px] w-[300px] rounded-full bg-accent/20 blur-3xl" />
          <FloatingPlate />
        </motion.div>
      </div>
    </section>
  );
}
