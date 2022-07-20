import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.css'

function Footer() {
	return (
		<footer className={styles.Footer}>
			<div className={styles.Icons}>
				<Link href="https://www.facebook.com/BlueEncode/">
					<a target="_blank" href="https://www.facebook.com/BlueEncode/" rel="noopener noreferrer">
						<Image src='/icons/instagram.svg' width={24} height={24} />
					</a>
				</Link>
				<Link href="https://www.facebook.com/BlueEncode/">
					<a target="_blank" href="https://www.facebook.com/BlueEncode/" rel="noopener noreferrer">
						<Image src='/icons/twitter.svg' width={24} height={24} />
					</a>
				</Link>
				<Link href="https://www.facebook.com/BlueEncode/">
					<a target="_blank" href="https://www.facebook.com/BlueEncode/" rel="noopener noreferrer">
						<Image src='/icons/facebook.svg' width={24} height={24} />
					</a>
				</Link>
			</div>
		</footer>
	)
}

export default Footer