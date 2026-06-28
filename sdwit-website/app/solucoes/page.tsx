import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
    title: "Soluções",
    description:
        "Soluções da SDWIT em Segurança da Informação, Infraestrutura & Cloud e Consultoria Estratégica para o seu negócio.",
};

const fabricantes = [
    {
        name: "Thales",
        description:
            "Proteção de dados e identidades, criptografia e gestão de chaves para ambientes corporativos.",
        area: "Proteção de Dados e Identidades",
    },
    {
        name: "Proofpoint",
        description:
            "Segurança de e-mail corporativo, proteção contra ameaças avançadas e prevenção de perda de dados.",
        area: "Segurança de E-mail",
    },
    {
        name: "Halcyon",
        description:
            "Proteção contra ransomware com capacidades de detecção, prevenção e recuperação rápida.",
        area: "Anti-Ransomware",
    },
    {
        name: "Cato Networks",
        description:
            "Plataforma SASE que convergência rede e segurança em uma arquitetura cloud-native.",
        area: "SASE / Rede Segura",
    },
    {
        name: "Akamai",
        description:
            "Segurança de aplicações web, proteção contra DDoS e otimização de performance.",
        area: "Segurança de Aplicações",
    },
    {
        name: "Gigamon",
        description:
            "Visibilidade profunda de rede e tráfego para monitoramento e segurança.",
        area: "Visibilidade de Rede",
    },
    {
        name: "Vectra AI",
        description:
            "Detecção avançada de ameaças utilizando inteligência artificial e análise comportamental.",
        area: "Detecção de Ameaças",
    },
];

const consultoriaItems = [
    {
        title: "Assessment",
        description:
            "Avaliação completa do ambiente tecnológico atual para identificar riscos, gargalos e oportunidades de melhoria.",
    },
    {
        title: "Arquitetura",
        description:
            "Desenho de arquiteturas tecnológicas escaláveis, seguras e alinhadas aos objetivos de negócio.",
    },
    {
        title: "Roadmap Tecnológico",
        description:
            "Planejamento estratégico da evolução tecnológica com marcos, prioridades e justificativas de negócio.",
    },
    {
        title: "Planejamento",
        description:
            "Estruturação de projetos de tecnologia com escopo, recursos, cronograma e métricas de sucesso.",
    },
    {
        title: "Governança",
        description:
            "Definição de políticas, processos e controles para garantir conformidade, eficiência e segurança.",
    },
];

export default function Solucoes() {
    return (
        <>
            {/* Page header */}
            <section className="bg-[#0F172A] px-4 py-20 text-center md:py-28">
                <div className="mx-auto max-w-7xl">
                    <h1 className="text-3xl font-bold text-white md:text-5xl">
                        Soluções
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                        Combinamos conhecimento técnico, visão estratégica e um
                        ecossistema de parceiros para entregar soluções
                        completas.
                    </p>
                </div>
            </section>

            {/* Segurança da Informação */}
            <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">
                        Segurança da Informação
                    </h2>
                    <p className="mb-10 max-w-2xl leading-relaxed text-slate-600">
                        A segurança da informação não é apenas sobre ferramentas
                        — é sobre proteger o que realmente importa para o seu
                        negócio: dados, operações e reputação. Atuamos na
                        definição da estratégia de segurança, seleção de
                        soluções e implementação com parceiros líderes de
                        mercado.
                    </p>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {fabricantes.map((f) => (
                            <div
                                key={f.name}
                                className="rounded-2xl p-6 md:p-8 bg-white border border-slate-100 shadow-sm transition-shadow duration-300 hover:shadow-md"
                            >
                                <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-wider text-accent">
                                    {f.area}
                                </span>
                                <h3 className="mb-2 text-lg font-bold text-primary">
                                    {f.name}
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-600">
                                    {f.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Infraestrutura & Cloud */}
            <section className="py-16 md:py-24 px-4 md:px-8 bg-[#F8FAFC]">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">
                        Infraestrutura & Cloud
                    </h2>
                    <p className="mb-4 max-w-2xl leading-relaxed text-slate-600">
                        Projetos de infraestrutura e cloud realizados em
                        parceria com a ScaleUp IT, combinando expertise
                        consultiva com capacidade de execução.
                    </p>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Cloud",
                                desc: "Migração, arquitetura e gestão de ambientes em nuvem pública, privada ou híbrida.",
                            },
                            {
                                title: "FinOps",
                                desc: "Otimização de custos em nuvem com visibilidade, controle e governança financeira.",
                            },
                            {
                                title: "Observabilidade",
                                desc: "Monitoramento proativo, análise de logs, métricas e rastreamento distribuído.",
                            },
                            {
                                title: "Modernização",
                                desc: "Evolução de infraestruturas legadas para arquiteturas modernas e escaláveis.",
                            },
                            {
                                title: "Governança",
                                desc: "Políticas de acesso, conformidade e gestão de recursos tecnológicos.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl p-6 md:p-8 bg-white border border-slate-100 shadow-sm transition-shadow duration-300 hover:shadow-md"
                            >
                                <h3 className="mb-2 text-lg font-bold text-primary">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-600">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
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

            {/* Consultoria Estratégica */}
            <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">
                        Consultoria Estratégica
                    </h2>
                    <p className="mb-10 max-w-2xl leading-relaxed text-slate-600">
                        Nossa abordagem consultiva vai além da recomendação de
                        ferramentas. Atuamos junto aos nossos clientes para
                        estruturar a estratégia tecnológica que sustentará o
                        crescimento do negócio.
                    </p>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {consultoriaItems.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl p-6 md:p-8 bg-white border border-slate-100 shadow-sm transition-shadow duration-300 hover:shadow-md"
                            >
                                <h3 className="mb-2 text-lg font-bold text-primary">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-600">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
