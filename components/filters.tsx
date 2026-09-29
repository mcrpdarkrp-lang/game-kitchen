"use client";

import { motion } from "framer-motion";
import { gameFilters } from "@/data/recipes";

export function Filters({
  activeGame,
  onChange,
}: {
  activeGame: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {gameFilters.map((game) => {
        const isActive = activeGame === game;
        return (
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            key={game}
            onClick={() => onChange(game)}
            className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] transition ${
              isActive
                ? "border-accent bg-accent text-[#0b0d12]"
                : "border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:text-white"
            }`}
          >
            {game}
          </motion.button>
        );
      })}
    </div>
  );
}
