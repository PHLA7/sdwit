import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quem Somos",
    description:
        "Conheça a SDWIT — consultoria especializada em Tecnologia, Segurança da Informação e Transformação Digital. Nossa origem, missão, visão e forma de atuação.",
};

export default function QuemSomos() {
    return (
        <>
            {/* Page header */}
            <section className="bg-[#0F172A] px-4 py-20 text-center md:py-28">
                <div className="mx-auto max-w-7xl">
                    <h1 className="text-3xl font-bold text-white md:text-5xl">
                        Quem Somos
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                        Uma consultoria que nasceu para ajudar organizações a
                        transformar tecnologia em resultados de negócio.
                    </p>
                </div>
            </section>

            {/* Origem */}
            <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
                <div className="mx-auto max-w-7xl mx-auto max-w-3xl">
                    <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
                        Nossa Origem
                    </h2>
                    <p className="mb-4 leading-relaxed text-slate-600">
                        A SDWIT foi fundada com a convicção de que a tecnologia
                        deve ser um meio para gerar resultados concretos de
                        negócio — não um fim em si mesma.
                    </p>
                    <p className="leading-relaxed text-slate-600">
                        Nossa trajetória começou com a percepção de que muitas
                        organizações investem em tecnologia sem uma estratégia
                        clara, resultando em ambientes complexos, custos
                        elevados e riscos crescentes. A SDWIT surgiu para
                        preencher essa lacuna: oferecer uma abordagem
                        verdadeiramente consultiva, focada em entender os
                        desafios de cada cliente antes de recomendar qualquer
                        solução.
                    </p>
                </div>
            </section>

            {/* Missão */}
            <section className="py-16 md:py-24 px-4 md:px-8 bg-[#F8FAFC]">
                <div className="mx-auto max-w-7xl mx-auto max-w-3xl">
                    <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
                        Missão
                    </h2>
                    <p className="leading-relaxed text-slate-600">
                        Ajudar organizações a extrair mais valor de seus
                        investimentos em tecnologia, entregando eficiência
                        operacional, segurança, governança e inovação por meio
                        de uma abordagem consultiva e independente.
                    </p>
                </div>
            </section>

            {/* Visão */}
            <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
                <div className="mx-auto max-w-7xl mx-auto max-w-3xl">
                    <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
                        Visão
                    </h2>
                    <p className="leading-relaxed text-slate-600">
                        Ser reconhecida como a consultoria de referência para
                        empresas que buscam excelência em segurança da
                        informação, infraestrutura tecnológica e transformação
                        digital, diferenciando-se pela profundidade técnica e
                        pela proximidade com cada cliente.
                    </p>
                </div>
            </section>

            {/* Forma de Atuação */}
            <section className="py-16 md:py-24 px-4 md:px-8 bg-[#F8FAFC]">
                <div className="mx-auto max-w-7xl mx-auto max-w-3xl">
                    <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
                        Forma de Atuação
                    </h2>
                    <p className="mb-4 leading-relaxed text-slate-600">
                        Atuamos de forma consultiva e independente. Isso
                        significa que nossa primeira etapa é sempre entender o
                        contexto, os objetivos e os desafios específicos de cada
                        cliente.
                    </p>
                    <p className="leading-relaxed text-slate-600">
                        A partir desse entendimento, recomendamos estratégias,
                        arquiteturas e soluções (próprias ou em parceria com
                        fabricantes líderes de mercado) sempre alinhadas às
                        necessidades reais do negócio.
                    </p>
                </div>
            </section>

            {/* Abordagem Consultiva */}
            <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
                <div className="mx-auto max-w-7xl mx-auto max-w-3xl">
                    <h2 className="mb-6 text-2xl font-bold text-primary md:text-3xl">
                        Abordagem Consultiva
                    </h2>
                    <p className="leading-relaxed text-slate-600">
                        Mais do que implementar tecnologias, buscamos construir
                        relacionamentos de longo prazo com nossos clientes,
                        atuando como um parceiro estratégico que compreende seus
                        desafios de negócio e contribui ativamente para sua
                        evolução tecnológica. Nossa abordagem combina
                        conhecimento técnico profundo, visão estratégica e
                        compromisso com resultados mensuráveis.
                    </p>
                </div>
            </section>
        </>
    );
}
