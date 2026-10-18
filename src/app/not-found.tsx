import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-site flex min-h-[70vh] flex-col items-start justify-center pt-[106px] sm:pt-24">
      <p className="eyebrow mb-4">Erro 404</p>
      <h1 className="heading-display text-5xl sm:text-7xl">
        Essa página saiu do setlist.
      </h1>
      <p className="mt-6 max-w-md text-muted">
        O endereço não existe ou foi movido. Volte para o início.
      </p>
      <div className="mt-8 flex gap-3">
        <Button asChild>
          <Link href="/#home">Voltar para a Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/#bio">Ver a Bio</Link>
        </Button>
      </div>
    </div>
  );
}
