type Props = {
  src: string
  alt: string
  /** show a pulsing "online" indicator */
  online?: boolean
}

export const Avatar = ({ src, alt, online = true }: Props) => {
  return (
    <div className="relative shrink-0">
      <img
        src={src}
        alt={alt}
        className="h-20 w-20 rounded-full border border-[hsl(var(--border))] object-cover sm:h-24 sm:w-24"
      />
      {online && (
        <span className="absolute bottom-1.5 right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[hsl(var(--background))]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
        </span>
      )}
    </div>
  )
}
