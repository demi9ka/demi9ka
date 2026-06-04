type Props = {
  title: string
  subTitle: string
}

export const FlexItem = ({ title, subTitle }: Props) => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center py-4 px-2 bg-muted rounded-lg h-full">
      <span className="text-2xl sm:text-4xl font-bold text-indigo-600 tabular-nums">{title}</span>
      <span className="text-center text-xs sm:text-sm text-muted-foreground leading-tight">{subTitle}</span>
    </div>
  )
}
