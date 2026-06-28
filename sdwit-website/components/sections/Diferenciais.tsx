const diferenciais = [
  {
    title: "Atendimento Consultivo",
    description:
      "Entendemos o seu negócio antes de recomendar qualquer solução tecnológica.",
  },
  {
    title: "Soluções Integradas",
    description:
      "Combinamos segurança, infraestrutura e estratégia em projetos coesos.",
  },
  {
    title: "Ecossistema de Parceiros",
    description:
      "Ampliamos nossa capacidade de entrega com parceiros especializados.",
  },
  {
    title: "Foco em Resultado",
    description:
      "Eficiência operacional, governança e inovação como entregáveis concretos.",
  },
];

export default function Diferenciais() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-4xl">
          Nossos Diferenciais
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((d) => (
            <div key={d.title} className="rounded-2xl p-6 md:p-8 bg-white border border-slate-100 shadow-sm transition-shadow duration-300 hover:shadow-md text-center">
              <h3 className="mb-2 text-lg font-bold text-primary">
                {d.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}