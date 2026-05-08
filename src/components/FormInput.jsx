export function FormInput({
  label,
  hint,
  icon,
  as = 'input',
  options = [],
  className = '',
  ...props
}) {
  const controlClassName = ['field__control', className].filter(Boolean).join(' ')

  return (
    <label className="field">
      <span className="field__label">{label}</span>
      {as === 'textarea' ? (
        <div className="field__shell">
          {icon ? <span className="field__icon">{icon}</span> : null}
          <textarea className={controlClassName} {...props} />
        </div>
      ) : null}
      {as === 'select' ? (
        <div className="field__shell">
          {icon ? <span className="field__icon">{icon}</span> : null}
          <select className={controlClassName} {...props}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ) : null}
      {as === 'input' ? (
        <div className="field__shell">
          {icon ? <span className="field__icon">{icon}</span> : null}
          <input className={controlClassName} {...props} />
        </div>
      ) : null}
      {hint ? <span className="field__hint">{hint}</span> : null}
    </label>
  )
}
