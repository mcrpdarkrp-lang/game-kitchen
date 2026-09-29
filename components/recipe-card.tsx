"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChefHat, Clock3 } from "lucide-react";

type RecipeCardProps = {
  title: string;
  game: string;
  difficulty: string;
  prepTime: string;
  image: string;
  summary: string;
  slug: string;
};

export function RecipeCard({
  title,
  game,
  difficulty,
  prepTime,
  image,
  summary,
  slug,
}: RecipeCardProps) {
  return (
    <motion.article
      layout
      whileHover={{ rotateX: 4, rotateY: -4, y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-pixel"
    >
      <Link href={`/recipes/${slug}`} className="block h-full">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d12] via-transparent to-transparent" />
        </div>

        <div className="space-y-4 p-5">
          <div className="flex items-center justify-between gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-white/70">
              {game}
            </span>
            <span className="text-xs text-white/70">{difficulty}</span>
          </div>

          <h3 className="font-display text-lg text-white">{title}</h3>
          <p className="line-clamp-3 text-sm text-white/70">{summary}</p>

          <div className="flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/65">
            <span className="inline-flex items-center gap-1">
              <Clock3 className="h-3.5 w-3.5" />
              {prepTime}
            </span>
            <span className="inline-flex items-center gap-1">
              <ChefHat className="h-3.5 w-3.5" />
              Cozinha
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
