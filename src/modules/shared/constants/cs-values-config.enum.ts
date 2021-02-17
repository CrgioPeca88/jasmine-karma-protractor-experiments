enum JustifyStates {
	available = 1,
	inactive = 6
}
Object.freeze(JustifyStates);

export interface JustifyStatesValue {
	value: JustifyStates;
	description: string;
}

export const JUSTIFY_STATES_VALUE: JustifyStatesValue[] = [
	{ value: JustifyStates.available, description: 'DISPONIBLE' },
	{ value: JustifyStates.inactive, description: 'INACTIVO' }
];
Object.freeze(JUSTIFY_STATES_VALUE);

export const CL: (p: any, m?: string) => void = (param: any, message: string = '') => {
	console.log(`%c ${message} =====> `, "color: greenyellow; background-color: black; font-weight: bold; border: 1.5px solid red; border-radius: 5px", param);
}
