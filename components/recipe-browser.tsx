"use client";

import { useEffect, useState } from "react";
import { recipes } from "@/data/recipes";
import { Filters } from "@/components/filters";
import { RecipeGrid } from "@/components/recipe-grid";
import { LenisProvider } from "@/components/lenis-provider";

export function RecipeBrowser() {
  const [activeGame, setActiveGame] = useState("Todos");

  return (
    <LenisProvider>
      <section id="receitas" className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/60">Receitas</p>
              <h2 className="mt-3 font-display text-2xl text-white md:text-3xl">Escolha seu sabor favorito</h2>
            </div>
            <Filters activeGame={activeGame} onChange={setActiveGame} />
          </div>

          <div className="mb-5 text-sm text-white/60">{recipes.length} receitas disponíveis</div>
          <RecipeGrid activeGame={activeGame} />
        </div>
      </section>
    </LenisProvider>
  );
}
