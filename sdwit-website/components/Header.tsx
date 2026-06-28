"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "./Button";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/quem-somos", label: "Quem Somos" },
    { href: "/solucoes", label: "Soluções" },
    { href: "/contato", label: "Contato" },
];

export default function Header() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#0F172A]/95 backdrop-blur-sm border-b border-slate-800">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8"
                aria-label="Navegação principal"
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    SDW<span className="text-accent">IT</span>
                </Link>

                {/* Desktop nav */}
                <ul className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-accent ${
                                    pathname === link.href
                                        ? "text-accent"
                                        : "text-slate-300"
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile hamburger */}
                <button
                    type="button"
                    className="flex flex-col gap-1.5 p-2 md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-expanded={mobileOpen}
                    aria-label="Abrir menu"
                >
                    <span
                        className={`block h-0.5 w-6 bg-white transition-transform ${
                            mobileOpen ? "translate-y-2 rotate-45" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-white transition-opacity ${
                            mobileOpen ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-6 bg-white transition-transform ${
                            mobileOpen ? "-translate-y-2 -rotate-45" : ""
                        }`}
                    />
                </button>
            </nav>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="border-t border-slate-800 bg-[#0F172A] px-4 pb-6 pt-4 md:hidden">
                    <ul className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block text-base font-medium transition-colors hover:text-accent ${
                                        pathname === link.href
                                            ? "text-accent"
                                            : "text-slate-300"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-2">
                            <Button
                                href="/contato"
                                variant="primary"
                                size="md"
                                className="w-full"
                            >
                                Falar com um Especialista
                            </Button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
