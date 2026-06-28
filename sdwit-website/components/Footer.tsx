import Link from "next/link";

const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/quem-somos", label: "Quem Somos" },
    { href: "/solucoes", label: "Soluções" },
    { href: "/parceiros", label: "Parceiros" },
    { href: "/contato", label: "Contato" },
];

export default function Footer() {
    return (
        <footer className="bg-[#0F172A] text-slate-400">
            <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="text-xl font-bold tracking-tight text-white"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            SDW<span className="text-accent">IT</span>
                        </Link>
                        <p className="mt-4 max-w-xs text-sm leading-relaxed">
                            Consultoria especializada em Tecnologia, Segurança
                            da Informação e Transformação Digital.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Links
                        </h3>
                        <ul className="flex flex-col gap-2">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm transition-colors hover:text-accent"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Contato
                        </h3>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li>
                                <a
                                    href="mailto:contato@sdwit.com.br"
                                    className="transition-colors hover:text-accent"
                                >
                                    contato@sdwit.com.br
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+5511981460800"
                                    className="transition-colors hover:text-accent"
                                >
                                    +55 11 98146-0800
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/gustavo-abreu-8a700726/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors hover:text-accent"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                        <p className="mt-4 text-xs text-slate-500">
                            Atendimento em todo o Brasil.
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
                    &copy; {new Date().getFullYear()} SDWIT. Todos os direitos
                    reservados.
                </div>
            </div>
        </footer>
    );
}
