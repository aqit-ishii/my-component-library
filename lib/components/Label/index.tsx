import styles from './styles.module.css'

export const Label = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => {
  const { className, ...restProps } = props

  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  return <label className={`${className} ${styles.label}`} {...restProps} />
}
Label.displayName = 'Label'
