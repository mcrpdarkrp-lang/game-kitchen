"use client";

import { motion } from "framer-motion";
import { RecipeCard } from "@/components/recipe-card";
import { recipes } from "@/data/recipes";

export function RecipeGrid({ activeGame }: { activeGame: string }) {
  const visibleRecipes =
    activeGame === "Todos" ? recipes : recipes.filter((recipe) => recipe.game === activeGame);

  return (
    <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {visibleRecipes.map((recipe, index) => (
        <motion.div
          key={recipe.slug}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: index * 0.05 }}
        >
          <RecipeCard {...recipe} />
        </motion.div>
      ))}
    </motion.div>
  );
}
