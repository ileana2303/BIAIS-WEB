"use client"

export default function TrustedBy() {

    const companies = [
        "Cloudly",
        "A.I.",
        "Startup",
        "Apply",
        "Software",
    ]

    return (
        <div className="mt-24 w-full overflow-hidden">

            <p className="text-center text-sm uppercase tracking-widest text-gray-400 mb-10">
                Trusted by innovative teams
            </p>

            {/* Logo container */}
            <div className="relative w-full">

                {/* Gradient fades */}
                <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

                {/* Moving logos */}
                <div className="flex gap-16 animate-scroll whitespace-nowrap">

                    {[...companies, ...companies].map((company, index) => (
                        <div
                            key={index}
                            className="text-lg md:text-xl font-semibold text-gray-500 hover:text-black transition duration-300"
                        >
                            {company}
                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}