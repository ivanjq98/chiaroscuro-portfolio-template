import { cn } from '@/lib/utils'

interface TagProps {
  label: string
  className?: string
}

export default function Tag({ label, className }: TagProps) {
  return (
    <span
      className={cn(
        'text-xs tracking-widest uppercase px-3 py-1 border border-accent-muted text-text-muted font-body',
        className
      )}
    >
      {label}
    </span>
  )
}