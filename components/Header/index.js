import React from 'react'
import Image from 'next/image'
import styles from './Header.module.css'

function Header() {
	return (
		<header className={styles.Header}>
			<div className={styles.SideHeader}>
				<Image src='/images/logo.png' width={60} height={20} />
				<h1 title='blue endcode' className={styles.Logo}>
					Blue <span> Endcode</span>
				</h1>
			</div>
			<div className={styles.Contact}>
				Contact Us
			</div>
		</header>
	)
}

export default Header