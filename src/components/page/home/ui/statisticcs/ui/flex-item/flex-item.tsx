type Props = {
  title: string
  subTitle: string
}

export const FlexItem = ({ title, subTitle }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center py-6 px-4 bg-[hsl(var(--card))] w-full group hover:bg-[hsl(var(--muted))] transition-colors duration-200">
      <span
        className="font-mono font-bold text-glow text-indigo-400 leading-none tabular-nums"
        style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)' }}
      >
        {title}
      </span>
      <span className="font-mono text-[10px] tracking-widest uppercase text-[hsl(var(--muted-foreground))] mt-2 text-center">
        {subTitle}
      </span>
    </div>
  )
}
