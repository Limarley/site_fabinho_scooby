"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NativeSelect } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, projectTypes, type ContactInput } from "@/lib/validations";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", website: "" },
  });

  const onSubmit = async (values: ContactInput) => {
    setStatus("submitting");
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setServerError(data.error ?? "Não foi possível enviar. Tente novamente.");
        setStatus("error");
        return;
      }
      reset();
      setStatus("success");
    } catch {
      setServerError("Falha de conexão. Verifique sua internet e tente novamente.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-start gap-4 rounded-[2rem] border border-accent/40 bg-accent/5 p-8"
      >
        <CheckCircle2 aria-hidden="true" className="size-8 text-accent" />
        <div>
          <p className="font-display text-2xl font-bold">Mensagem enviada.</p>
          <p className="mt-2 text-muted">
            Obrigado pelo contato. O Fabinho responde em breve no e-mail informado.
          </p>
        </div>
        <Button type="button" variant="outline" onClick={() => setStatus("idle")}>
          Enviar outra mensagem
        </Button>
      </div>
    );
  }

  const field = (name: keyof ContactInput) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Seu nome"
            {...field("name")}
            {...register("name")}
          />
          <FieldError id="name-error" message={errors.name?.message} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="voce@exemplo.com"
            {...field("email")}
            {...register("email")}
          />
          <FieldError id="email-error" message={errors.email?.message} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectType">Tipo de projeto</Label>
        <NativeSelect
          id="projectType"
          defaultValue=""
          {...field("projectType")}
          {...register("projectType")}
        >
          <option value="" disabled>
            Selecione…
          </option>
          {projectTypes.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </NativeSelect>
        <FieldError id="projectType-error" message={errors.projectType?.message} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          placeholder="Conte sobre o projeto: datas, cidade, formato, referências…"
          {...field("message")}
          {...register("message")}
        />
        <FieldError id="message-error" message={errors.message?.message} />
      </div>

      {/* Honeypot — invisível para humanos, fora da ordem de tabulação. */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      {status === "error" && serverError && (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-red-600/40 bg-red-50 p-4 text-sm text-red-800"
        >
          <TriangleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
          {serverError}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          Seus dados são usados apenas para responder a esta mensagem.
        </p>
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <Loader2 className="animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              <Send />
              Enviar mensagem
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <p
      id={id}
      className={cn("min-h-[1.25rem] text-sm text-red-700", !message && "sr-only")}
      role={message ? "alert" : undefined}
    >
      {message ?? ""}
    </p>
  );
}
