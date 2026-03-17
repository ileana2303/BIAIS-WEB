"use client";

import { useEffect, useState } from "react";

const tech = [
    "SoftOne",
    "Power BI",
    "AWS",
    "Azure",
    "OpenAI",
    "React",
    "Next.js",
    "Stripe",
];

export default function TechOrbit() {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const radius = 140;
        const center = 160;

        const newPositions = tech.map((_, i) => {
            const angle = (i / tech.length) * 2 * Math.PI;

            return {
                x: center + radius * Math.cos(angle),
                y: center + radius * Math.sin(angle),
                delay: i * 0.2,
            };
        });

        setPositions(newPositions);
    }, []);

    return (
        <section id="techorbit" className="pt-6 pb-24 md:pt-8 md:pb-28">
            <div className="flex flex-col items-center">
                <h2 className="mb-12 flex items-center justify-center gap-3 text-center text-sm font-bold tracking-wide text-black">
                    <span className="w-2 h-2 bg-black rounded-full" />
                    TECHNOLOGY ECOSYSTEM
                    <span className="w-2 h-2 bg-black rounded-full" />
                </h2>

                <div className="relative h-[320px] w-[320px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-sm font-medium text-white shadow-lg">
                            BIAIS
                        </div>
                    </div>

                    {positions.map((pos, i) => (
                        <div
                            key={i}
                            className="absolute rounded-full border bg-white px-4 py-2 text-sm text-gray-700 shadow-sm transition hover:shadow-md"
                            style={{
                                left: pos.x,
                                top: pos.y,
                                transform: "translate(-50%, -50%)",
                                animation: `float 6s ease-in-out infinite`,
                                animationDelay: `${pos.delay}s`,
                            }}
                        >
                            {tech[i]}
                        </div>
                    ))}
                </div>

                <p className="mt-12 max-w-md text-center text-sm text-gray-500">
                    We integrate across your entire stack — from enterprise systems to modern AI platforms
                </p>
            </div>
        </section>
    );
}
