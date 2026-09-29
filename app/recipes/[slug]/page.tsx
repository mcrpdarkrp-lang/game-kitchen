import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, ChefHat, Clock3 } from "lucide-react";
import { recipes } from "@/data/recipes";

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export default function RecipeDetailPage({ params }: { params: { slug: string } }) {
  const recipe = recipes.find((item) => item.slug === params.slug);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 md:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/60">{recipe.game}</p>
          <h1 className="mt-4 font-display text-3xl text-white md:text-5xl">{recipe.title}</h1>
          <p className="mt-4 text-white/75">{recipe.summary}</p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <Clock3 className="h-4 w-4 text-accent" />
              {recipe.prepTime}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <ChefHat className="h-4 w-4 text-mint" />
              {recipe.difficulty}
            </span>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <div className="relative h-[380px]">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-5">
            <h2 className="font-display text-xl text-white">Ingredientes</h2>
            <ul className="mt-5 space-y-3">
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient} className="flex items-center gap-3 text-white/80">
                  <span className="flex h-5 w-5 items-center justify-center rounded-sm border border-white/20 bg-white/5">
                    <Check className="h-3.5 w-3.5 text-mint" />
                  </span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-white/60">No jogo</p>
            <p className="mt-4 text-white/80">{recipe.inGame}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-white/60">Modo cozinha</p>
            <div className="mt-4 space-y-4">
              {recipe.steps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-[#0f172a] p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.18em] text-white/60">
                      Passo {index + 1}
                    </span>
                  </div>
                  <p className="text-white/80">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
