"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/Button";

// Metadata must be in a separate layout since this is a client component
// It will be handled via the root layout template

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function Contato() {
    const [status, setStatus] = useState<FormStatus>("idle");
    const [formData, setFormData] = useState({
        nome: "",
        empresa: "",
        email: "",
        telefone: "",
        mensagem: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("/api/contato", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Falha no envio");
            setStatus("sent");
            setFormData({
                nome: "",
                empresa: "",
                email: "",
                telefone: "",
                mensagem: "",
            });
        } catch {
            setStatus("error");
        }
    };

    return (
        <>
            {/* Page header */}
            <section className="bg-[#0F172A] px-4 py-20 text-center md:py-28">
                <div className="mx-auto max-w-7xl">
                    <h1 className="text-3xl font-bold text-white md:text-5xl">
                        Contato
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                        Entre em contato com a nossa equipe. Estamos prontos
                        para entender seus desafios e encontrar as melhores
                        soluções.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
                <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2">
                    {/* Contact info */}
                    <div>
                        <h2 className="mb-6 text-2xl font-bold text-primary">
                            Fale Conosco
                        </h2>

                        <ul className="flex flex-col gap-6">
                            <li>
                                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-slate-400">
                                    E-mail
                                </h3>
                                <a
                                    href="mailto:contato@sdwit.com.br"
                                    className="text-lg text-secondary hover:text-accent transition-colors"
                                >
                                    contato@sdwit.com.br
                                </a>
                            </li>
                            <li>
                                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-slate-400">
                                    Telefone e WhatsApp
                                </h3>
                                <a
                                    href="tel:+5511981460800"
                                    className="text-lg text-secondary hover:text-accent transition-colors"
                                >
                                    +55 11 98146-0800
                                </a>
                            </li>
                            <li>
                                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-slate-400">
                                    LinkedIn
                                </h3>
                                <a
                                    href="https://www.linkedin.com/in/gustavo-abreu-8a700726/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg text-secondary hover:text-accent transition-colors"
                                >
                                    Gustavo Abreu
                                </a>
                                <br />
                                <a
                                    href="https://www.linkedin.com/in/phla7/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg text-secondary hover:text-accent transition-colors"
                                >
                                    Pedro Abreu
                                </a>
                            </li>
                        </ul>

                        <p className="mt-8 rounded-lg bg-[#F8FAFC] p-4 text-sm text-slate-600">
                            Atendimento em todo o Brasil.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
