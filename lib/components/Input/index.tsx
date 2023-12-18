import styles from './styles.module.css'

export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { className, ...restProps } = props


  return <input className={`${className} ${styles.input}`} {...restProps} />
}
Input.displayName = 'Input'

