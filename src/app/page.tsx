'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Button from './components/button/button';

export default function Home() {
	const buttonOnClick = () => console.log('HEY!');
	return <Button label="test" onClick={buttonOnClick}></Button>;
}
