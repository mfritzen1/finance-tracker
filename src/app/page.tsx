'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Button from './components/button/button';
import { InputTypes } from './enums/input-types.enum';
import Input from './components/input/input';

export default function Home() {
	const buttonOnClick = () => console.log('HEY!');
	return (
		<>
			<Button label="test" onClick={buttonOnClick}></Button>
			<Input type={InputTypes.TEXT} />
			<Input type={InputTypes.RADIO} />
		</>
	);
}
