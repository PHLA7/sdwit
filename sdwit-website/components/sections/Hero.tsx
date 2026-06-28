import Button from "@/components/Button";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#0F172A]">
            {/* Decorative gradient orbs */}
            <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                aria-hidden="true"
            >
                <div className="absolute -top-24 -right-24 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-3xl" />
                <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl" />
            </div>

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
                aria-hidden="true"
            />

            <div className="mx-auto max-w-7xl relative z-10 flex flex-col items-center gap-8 px-4 py-24 text-center md:py-36 lg:py-44">
                <h1 className="max-w-4xl text-3xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                    Transformamos desafios de tecnologia em resultados para o
                    seu negócio.
                </h1>
                <p className="max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                    Apoiamos empresas na modernização de sua infraestrutura,
                    fortalecimento da segurança da informação e otimização dos
                    investimentos em tecnologia através de uma abordagem
                    consultiva e soluções líderes de mercado.
                </p>
                <div className="flex flex-col gap-4 mt-4 sm:flex-row">
                    <Button href="/contato" variant="primary" size="lg">
                        Falar com um Especialista
                    </Button>
                    <Button href="/solucoes" variant="outline" size="lg">
                        Conhecer Soluções
                    </Button>
                </div>
            </div>
        </section>
    );
}
