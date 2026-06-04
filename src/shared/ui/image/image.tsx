import { useState } from 'react'
import { Skeleton } from '@/shared/ui/skeleton'
import { cn } from '@/shared/ui/lib/utils'

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  w?: string | number
  h?: string | number
}

export const Image = ({ src, alt, w, h, className, style, ...props }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative" style={{ width: w, height: h }}>
      {!isLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'w-full h-auto transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        style={style}
        {...props}
      />
    </div>
  )
}
