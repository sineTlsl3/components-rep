import styles from './styles/checkbox.module.css'

interface ICheckboxProps {
  id: string
  text?: string
  isChecked: boolean
  isDisabled: boolean
  handleChange: () => void
  size?: 'small' | 'medium' | 'large'
}

export default function Checkbox({ id, text, isChecked, isDisabled, handleChange, size = 'small' }: ICheckboxProps) {
  return (
    <div className={styles['checkbox-container']}>
      <input
        type="checkbox"
        id={id}
        className={`{styles['custom-checkbox']} ${styles[size]}`}
        disabled={isDisabled}
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={id}>
        <span>{text || ''}</span>
      </label>
    </div>
  )
}
