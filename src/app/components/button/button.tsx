'use client';
import { ButtonInput } from '../../models/component-inputs/button-input';

export default function Button(params: ButtonInput) {
	return <button onClick={params.onClick}>{params.label}</button>;
}
