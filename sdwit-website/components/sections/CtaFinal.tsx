import Button from "@/components/Button";

export default function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] to-[#1E3A5F]">
      {/* Decorative element */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #06B6D4 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl relative z-10 px-4 py-20 text-center md:py-28">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          Vamos conversar?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300">
          Se sua empresa busca mais eficiência, segurança e inovação, estamos
          prontos para ajudar.
        </p>
        <Button href="/contato" variant="primary" size="lg">
          Falar com um Especialista
        </Button>
      </div>
    </section>
  );
}