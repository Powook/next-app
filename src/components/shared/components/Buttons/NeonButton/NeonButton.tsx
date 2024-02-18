import styles from './NeonButton.module.scss'

type NeonButtonProps = {
  onClick: (e: any)=>void;
  text: string;
  center?: boolean
}

export function NeonButton ({onClick, text, center}: NeonButtonProps) {
  return <button onClick={onClick} style={center ? {margin:'0 auto', display:'block'} : {}} className={styles.button}>{text}</button>
}