'use client';
import { ButtonParams } from '../../models/component-inputs/button-params.model';

export default function Button(params: ButtonParams) {
	return <button onClick={params.onClick}>{params.label}</button>;
}
