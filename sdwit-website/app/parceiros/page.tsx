import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
    title: "Parceiros",
    description:
        "Ecossistema de parceiros da SDWIT — ScaleUp IT e fabricantes líderes em tecnologia corporativa.",
};

const fabricantes = [
    {
        name: "Thales",
        description: "Proteção de dados e identidades.",
    },
    {
        name: "Proofpoint",
        description: "Segurança de e-mail corporativo.",
    },
    {
        name: "Halcyon",
        description: "Proteção contra ransomware.",
    },
    {
        name: "Cato Networks",
        description: "Plataforma SASE.",
    },
    {
        name: "Akamai",
        description: "Segurança de aplicações.",
    },
    {
        name: "Gigamon",
        description: "Visibilidade de rede.",
    },
    {
        name: "Vectra AI",
        description: "Detecção avançada de ameaças.",
    },
];

export default function Parceiros() {
    return (
        <>
            {/* Page header */}
            <section className="bg-[#0F172A] px-4 py-20 text-center md:py-28">
                <div className="mx-auto max-w-7xl">
                    <h1 className="text-3xl font-bold text-white md:text-5xl">
                        Parceiros
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                        Atuamos com um ecossistema de parceiros estratégicos e
                        fabricantes líderes para entregar soluções completas.
                    </p>
                </div>
            </section>

            {/* Parceiro Estratégico */}
            <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">
                        Parceiro Estratégico
                    </h2>
                    <p className="mb-10 max-w-2xl leading-relaxed text-slate-600">
                        A SDWIT estabelece parcerias estratégicas com
                        organizações que compartilham nossa visão de excelência
                        técnica e foco no cliente.
                    </p>

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
                            A ScaleUp IT é o parceiro estratégico da SDWIT para
                            projetos de Infraestrutura, Cloud, Observabilidade,
                            FinOps e Transformação Digital. Juntos, combinamos
                            visão consultiva com capacidade de execução para
                            entregar projetos completos e de alta qualidade.
                        </p>
                        <Button
                            href="https://scaleupit.com.br"
                            variant="primary"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Conheça a ScaleUp IT
                        </Button>
                    </div>
                </div>
            </section>

            {/* Fabricantes */}
            <section className="py-16 md:py-24 px-4 md:px-8 bg-[#F8FAFC]">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">
                        Fabricantes
                    </h2>
                    <p className="mb-10 max-w-2xl leading-relaxed text-slate-600">
                        Trabalhamos com tecnologias líderes reconhecidas pelos
                        principais analistas de mercado, selecionadas com base
                        nas necessidades específicas de cada cliente.
                    </p>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {fabricantes.map((f) => (
                            <div
                                key={f.name}
                                className="rounded-2xl p-6 md:p-8 bg-white border border-slate-100 shadow-sm transition-shadow duration-300 hover:shadow-md flex flex-col items-center text-center"
                            >
                                {/* Logo placeholder */}
                                <div className="mb-4 flex h-16 w-full max-w-[160px] items-center justify-center rounded-lg bg-slate-200">
                                    <span className="text-xs font-semibold text-slate-500">
                                        {f.name}
                                    </span>
                                </div>
                                <p className="text-sm text-slate-600">
                                    {f.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
