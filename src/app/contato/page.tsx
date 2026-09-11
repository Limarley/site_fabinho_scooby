import { redirect } from "next/navigation";

export default async function ContatoRedirect({
  searchParams,
}: {
  searchParams: Promise<{ tipo?: string }>;
}) {
  const { tipo } = await searchParams;
  redirect(tipo ? `/?tipo=${encodeURIComponent(tipo)}#contato` : "/#contato");
}
