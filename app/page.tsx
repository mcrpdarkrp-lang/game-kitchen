import { Hero } from "@/components/hero";
import { RecipeBrowser } from "@/components/recipe-browser";
import { DailyRecipe } from "@/components/daily-recipe";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <RecipeBrowser />
      <DailyRecipe />
      <SiteFooter />
    </main>
  );
}
