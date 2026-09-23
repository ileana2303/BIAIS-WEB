export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-[1920px] px-4 sm:px-6 md:px-10 xl:px-16 ${className}`}>
      {children}
    </div>
  )
}
