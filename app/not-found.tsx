import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-4xl text-white">404</h1>
      <p className="mt-4 text-white/70">Receita não encontrada no menu.</p>
      <Link href="/" className="mt-6 rounded-full bg-accent px-5 py-3 text-sm uppercase tracking-[0.18em] text-[#0b0d12]">
        Voltar ao início
      </Link>
    </main>
  );
}
