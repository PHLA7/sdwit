import Button from "@/components/Button";

export default function ParceiroEstrategico() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            Ecossistema de Parcerias Estratégicas
          </h2>
          <p className="mb-12 text-lg leading-relaxed text-slate-600">
            A SDWIT atua em conjunto com parceiros especializados para ampliar
            sua capacidade de entrega e oferecer soluções completas para seus
            clientes.
          </p>
        </div>

        <div className="rounded-2xl p-6 md:p-8 bg-white border border-slate-100 shadow-sm mx-auto max-w-lg text-center">
          {/* ScaleUp Logo Placeholder */}
          <div className="mx-auto mb-6 flex h-20 w-48 items-center justify-center rounded-lg bg-slate-100">
            <span className="text-sm font-semibold text-slate-400">
              Logo ScaleUp IT
            </span>
          </div>
          <h3 className="mb-3 text-2xl font-bold text-primary">
            ScaleUp IT
          </h3>
          <p className="mb-6 text-sm leading-relaxed text-slate-600">
            Parceiro estratégico para projetos de Infraestrutura, Cloud,
            Observabilidade, FinOps e Transformação Digital.
          </p>
          <Button
            href="https://scaleupit.com.br"
            variant="primary"
            size="md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conheça a ScaleUp
          </Button>
        </div>
      </div>
    </section>
  );
}