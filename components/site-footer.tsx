import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#090c13] px-4 py-16 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="font-display text-2xl text-white">Game Kitchen</p>
          <p className="mt-4 max-w-md text-white/70">
            Site de receitas de fã, sem vínculo oficial com os jogos, studios ou marcas citadas.
          </p>

          <form className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              aria-label="E-mail para newsletter"
              type="email"
              placeholder="Seu e-mail"
              className="h-12 flex-1 rounded-full border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/35"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-5 text-xs font-medium uppercase tracking-[0.18em] text-[#0b0d12]"
            >
              Inscrever
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-4 text-sm text-white/70">
          <Link href="/">Home</Link>
          <Link href="/#receitas">Receitas</Link>
          <Link href="/recipes/ensopado-de-zelda">Receita destaque</Link>
          <Link href="/about">Sobre</Link>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl items-center justify-between border-t border-white/10 pt-6 text-xs text-white/50">
        <span>© 2026 Game Kitchen</span>
        <span>Aviso: site de fã, não oficial.</span>
      </div>
    </footer>
  );
}
