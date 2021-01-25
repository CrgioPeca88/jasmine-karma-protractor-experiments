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
