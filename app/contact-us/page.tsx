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
        <section className="min-h-screen bg-gray-50 px-6 py-24">

            <div className="max-w-6xl mx-auto">

                <div className="mb-16 space-y-6">

                    <h1 className="text-5xl md:text-6xl text-gray-900 tracking-tight">We Are Happy to Listen
                    </h1>

                    <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                        Not sure where to start?
                        <br />
                        Tell us about your product to get the ball rolling.
                    </p>

                    <Link
                        href="/contact-us/careers"
                        className="inline-block text-gray-500 text-sm underline underline-offset-4 hover:text-black transition"
                    >
                        Looking for a job? →
                    </Link>

                </div>
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-12 rounded-2xl shadow-sm"
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
                            className="w-full border-b py-3 outline-none resize-none focus:border-black"
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
                            className="bg-black text-white px-8 py-4 rounded-full hover:opacity-90 transition"
                        >
                            Contact us →
                        </button>
                    </div>

                </form>

            </div>
        </section >
    );
}
