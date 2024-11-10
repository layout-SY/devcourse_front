export type ThemeName = 'light' | 'dark';
type colorKey = 'primary' | 'background' | 'secondary' | 'third';

interface Theme {
	name: string;
	// color: {
	// 	// primary: string;
	// 	// background: string;
	// 	// secondary?: string;
	// 	// [key: string]: string;
	// 	// [key in colorKey]: string;

	// };
	color: Record<colorKey, string>;
}

export const light: Theme = {
	name: 'light',
	color: {
		primary: 'brown',
		background: 'lightgray',
		secondary: 'blue',
		third: 'green',
	},
};

export const dark: Theme = {
	name: 'dark',
	color: {
		primary: 'coral',
		background: 'midnightblue',
		secondary: 'red',
		third: 'yellow',
	},
};
export const getTheme = (themeName: ThemeName): Theme => {
	switch (themeName) {
		case 'light':
			return light;
		case 'dark':
			return dark;
	}
};
