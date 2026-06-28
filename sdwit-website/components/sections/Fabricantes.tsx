import Image from "next/image";

import akamaiLogo from "../logos/akamai.png";
import catoLogo from "../logos/cato.png";
import proofpointLogo from "../logos/proofpoint.png";
import thalesLogo from "../logos/thales.png";
import vectraaiLogo from "../logos/vectraai.png";
import halcyonLogo from "../logos/halcyon.png";
import gigamonLogo from "../logos/gigamon.png";

const fabricantes = [
    {
        name: "Thales",
        description: "Proteção de dados e identidades.",
        logo: thalesLogo,
    },
    {
        name: "Proofpoint",
        description: "Segurança de e-mail corporativo.",
        logo: proofpointLogo,
    },
    {
        name: "Halcyon",
        description: "Proteção contra ransomware.",
        logo: halcyonLogo,
    },
    {
        name: "Cato Networks",
        description: "Plataforma SASE.",
        logo: catoLogo,
    },
    {
        name: "Akamai",
        description: "Segurança de aplicações.",
        logo: akamaiLogo,
    },
    {
        name: "Gigamon",
        description: "Visibilidade de rede.",
        logo: gigamonLogo,
    },
    {
        name: "Vectra AI",
        description: "Detecção avançada de ameaças.",
        logo: vectraaiLogo,
    },
];

export default function Fabricantes() {
    return (
        <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-4 text-center text-3xl font-bold text-primary md:text-4xl">
                    Tecnologias líderes para ambientes corporativos modernos
                </h2>
                <p className="mb-12 text-center text-slate-500">
                    Atuamos com soluções reconhecidas pelos principais analistas
                    de mercado.
                </p>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {fabricantes.map((f) => (
                        <div
                            key={f.name}
                            className="rounded-2xl p-6 md:p-8 bg-white border border-slate-100 shadow-sm transition-shadow duration-300 hover:shadow-md flex flex-col items-center text-center"
                        >
                            {f.logo ? (
                                <div className="mb-4 flex h-16 w-full max-w-[160px] items-center justify-center">
                                    <Image
                                        src={f.logo}
                                        alt={`Logo ${f.name}`}
                                        height={64}
                                        width={160}
                                        className="object-contain"
                                    />
                                </div>
                            ) : (
                                <div className="mb-4 flex h-16 w-full max-w-[160px] items-center justify-center rounded-lg bg-slate-100">
                                    <span className="text-xs font-semibold text-slate-400">
                                        {f.name}
                                    </span>
                                </div>
                            )}
                            <p className="text-sm text-slate-600">
                                {f.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
