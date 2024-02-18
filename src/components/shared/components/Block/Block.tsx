import { ComponentProps, ReactElement, ReactHTMLElement } from "react";
import styles from './Block.module.scss'
import cl from 'classnames'


type BlockProps = ComponentProps<"div"> & {
  width?: 'auto' | number;
  height?: 'auto' | number;
  children: ReactElement | ReactElement[];
  display?: 'flex',
  customClass?: string  
}

export function Block({children, width='auto', height='auto', display, customClass, ...other}: BlockProps) {
  return (
    <div className={cl(styles.block, customClass)} style={{width, height, display: display || 'block'}} {...other}>
      {children}
    </div>
  )
}