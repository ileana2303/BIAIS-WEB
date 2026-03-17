"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactUs() {
    const labelClassName = "text-lg text-[#FFFAF0] tracking-wide";

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
    };

    return (
        <>
            <div
                className="fixed inset-y-0 right-0 hidden w-1/2 bg-black lg:block"
                aria-hidden="true"
            />

            <section className="relative z-10 h-[calc(100dvh-6rem)] overflow-hidden">

                <div className="grid h-full grid-cols-1 lg:grid-cols-[50%_50%]">

                    {/* LEFT */}
                    <div className="flex items-center px-10 lg:px-20">
                        <div>
                            <h1 className="text-[90px] md:text-[120px] leading-[0.9] font-semibold text-black">
                                Get in <br /> touch
                            </h1>

                            <p className="mt-6 text-lg text-gray-600 max-w-md">
                                Not sure where to start?
                                <br />
                                Tell us about your product to get the ball rolling.
                            </p>

                            <Link
                                href="/contact-us/careers"
                                className="inline-block mt-6 text-sm text-gray-500 underline underline-offset-4 hover:text-black transition"
                            >
                                Looking for a job? →
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div
                        className="bg-black flex items-center justify-center px-6 py-8 lg:bg-transparent"
                        data-cursor-theme="dark"
                    >

                        <form
                            onSubmit={handleSubmit}
                            className="w-full max-w-2xl lg:max-w-3xl border-2 border-[#FFFAF0] rounded-3xl p-10 text-[#FFFAF0]"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                                <div>
                                    <label className={labelClassName}>
                                        FULL NAME
                                    </label>
                                    <input
                                        name="name"
                                        required
                                        onChange={handleChange}
                                        className="w-full mt-2 bg-transparent border-b-2 border-[#FFFAF0] py-2 outline-none focus:border-white"
                                    />
                                </div>

                                <div>
                                    <label className={labelClassName}>
                                        EMAIL
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        onChange={handleChange}
                                        className="w-full mt-2 bg-transparent border-b-2 border-[#FFFAF0] py-2 outline-none focus:border-white"
                                    />
                                </div>

                                <div>
                                    <label className={labelClassName}>
                                        PHONE NUMBER
                                    </label>
                                    <input
                                        name="phone"
                                        required
                                        onChange={handleChange}
                                        className="w-full mt-2 bg-transparent border-b-2 border-[#FFFAF0] py-2 outline-none focus:border-white"
                                    />
                                </div>

                                <div>
                                    <label className={labelClassName}>
                                        SUBJECT
                                    </label>
                                    <select className="w-full mt-2 bg-transparent  border-b-2 border-[#FFFAF0] py-2 focus:outline-none">
                                        <option>Select one of the following</option>
                                        <option>Project Inquiry</option>
                                        <option>Partnership</option>
                                        <option>General Question</option>
                                    </select>
                                </div>

                                <div className="md:col-span-2">
                                    <label className={labelClassName}>
                                        COMPANY
                                    </label>
                                    <input
                                        name="company"
                                        required
                                        onChange={handleChange}
                                        className="w-full mt-2 bg-transparent border-b-2 border-[#FFFAF0] py-2 outline-none focus:border-white"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className={labelClassName}>
                                        MESSAGE
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        onChange={handleChange}
                                        placeholder="Write your message"
                                        className="w-full mt-2 bg-transparent border-b-2 border-[#FFFAF0] py-2 outline-none resize-none focus:border-white"
                                    />
                                </div>

                                {/* <div className="md:col-span-2 flex items-center gap-3 text-gray-400 text-sm">
                                    <input
                                        type="checkbox"
                                        name="newsletter"
                                        onChange={handleChange}
                                    />
                                    I want to receive news and updates once in a while
                                </div> */}

                            </div>

                            <button
                                type="submit"
                                className="w-full mt-10 border-2 border-[#FFFAF0] py-4 rounded-full hover:bg-[#FFFAF0] hover:text-black transition"
                            >
                                SEND MESSAGE
                            </button>

                        </form>

                    </div>
                </div>
            </section>
        </>
    );
}
