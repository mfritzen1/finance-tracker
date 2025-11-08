'use client';

import { InputParams } from '@/app/models/component-inputs/input-params.model';

export default function Input(params: InputParams) {
	return <input type={params.type} />;
}
