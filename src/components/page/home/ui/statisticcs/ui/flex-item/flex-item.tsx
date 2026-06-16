type Props = {
  title: string
  subTitle: string
}

export const FlexItem = ({ title, subTitle }: Props) => {
  return (
    <div className="flex flex-col items-start px-6 sm:px-8">
      <span className="text-2xl font-semibold tabular-nums tracking-tight text-[hsl(var(--foreground))] sm:text-3xl">
        {title}
      </span>
      <span className="mt-1.5 text-[11px] leading-tight text-[hsl(var(--muted-foreground))]">
        {subTitle}
      </span>
    </div>
  )
}
