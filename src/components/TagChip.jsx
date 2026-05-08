export function TagChip({ children, tone = 'soft', active = false }) {
  const className = [
    'chip',
    `chip--${tone}`,
    active ? 'chip--active' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return <span className={className}>{children}</span>
}
