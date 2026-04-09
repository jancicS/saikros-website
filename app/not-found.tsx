import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-void px-4 text-ink">
      <h1 className="font-display text-2xl font-bold">Page not found</h1>
      <Link href="/" className="text-signal underline-offset-4 hover:underline">
        Back home
      </Link>
    </main>
  );
}
