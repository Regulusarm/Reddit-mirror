import React from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.scss';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

 const NOOP = () => {}

export function Dropdown({ button, children, isOpen = false, onOpen = NOOP, onClose = NOOP}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
 
  React.useEffect(() =>  setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() =>  isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);


  return (
   <div className={styles.container}>
     <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
       { button }
     </div>
     { isDropdownOpen && (
       <div className={styles.listContainer}>
         <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
           { children }
         </div>
       </div>
     )}
   </div>
  )
}
