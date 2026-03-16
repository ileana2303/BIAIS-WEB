"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactUs() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        country: "Greece",
        message: "",
        newsletter: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        setForm({
            ...form,
            [name]:
                type === "checkbox"
                    ? (e.target as HTMLInputElement).checked
                    : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);

        // Here you would call your API
        // fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })
    };

    return (
        <section className="min-h-screen bg-[#FFFAF0] py-20">
            <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center px-6 py-20 lg:px-12 xl:px-16">
                    <div className="max-w-xl space-y-6">
                        <h1 className="text-4xl tracking-tight md:text-8xl">
                            Get in touch
                        </h1>

                        <p className="max-w-xl text-lg leading-relaxed text-gray-300">
                            Not sure where to start?
                            <br />
                            Tell us about your product to get the ball rolling.
                        </p>

                        <Link
                            href="/contact-us/careers"
                            className="inline-block text-sm text-gray-400 underline underline-offset-4 transition hover:text-white"
                        >
                            Looking for a job? →
                        </Link>
                    </div>
                </div>

                <div className="flex items-center px-6 py-20 lg:px-12 xl:px-16">
                    <form
                        onSubmit={handleSubmit}
                        className="grid w-full grid-cols-1 gap-10 rounded-2xl bg-white p-8 text-black shadow-sm md:grid-cols-2 lg:max-w-2xl"
                    >
                        <div>
                            <label className="text-gray-500">Full name *</label>
                            <input
                                name="name"
                                required
                                onChange={handleChange}
                                className="w-full border-b py-3 outline-none focus:border-black"
                            />
                        </div>

                        <div>
                            <label className="text-gray-500">Email *</label>
                            <input
                                name="email"
                                type="email"
                                required
                                onChange={handleChange}
                                className="w-full border-b py-3 outline-none focus:border-black"
                            />
                        </div>

                        <div>
                            <label className="text-gray-500">Phone number *</label>
                            <input
                                name="phone"
                                required
                                onChange={handleChange}
                                className="w-full border-b py-3 outline-none focus:border-black"
                            />
                        </div>

                        <div>
                            <label className="text-gray-500">Country *</label>
                            <input
                                name="country"
                                value={form.country}
                                onChange={handleChange}
                                className="w-full border-b py-3 outline-none focus:border-black"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="text-gray-500">Company *</label>
                            <input
                                name="company"
                                required
                                onChange={handleChange}
                                className="w-full border-b py-3 outline-none focus:border-black"
                            />
                        </div>

                        <div className="md:col-span-2">
                            <label className="text-gray-500">Message</label>
                            <textarea
                                name="message"
                                required
                                rows={4}
                                onChange={handleChange}
                                className="w-full resize-none border-b py-3 outline-none focus:border-black"
                            />
                        </div>

                        <div className="md:col-span-2 flex items-center gap-3 text-gray-600">
                            <input
                                type="checkbox"
                                name="newsletter"
                                onChange={handleChange}
                            />
                            I want to receive news and updates once in a while
                        </div>

                        <div className="md:col-span-2 pt-4">
                            <button
                                type="submit"
                                className="rounded-full bg-black px-8 py-4 text-white transition hover:opacity-90"
                            >
                                Contact us →
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
