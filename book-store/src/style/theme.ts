export type ThemeName = 'light' | 'dark';
export type colorKey = 'primary' | 'background' | 'secondary' | 'third' | 'border' | 'text';
export type HeadingSize = 'large' | 'medium' | 'small';
export type ButtonSize = 'large' | 'medium' | 'small';
export type ButtonScheme = 'primary' | 'normal';
export type LayoutWidth = 'large' | 'medium' | 'small';

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
	heading: {
		[key in HeadingSize]: {
			fontSize: string;
		};
	};

	button: {
		[key in ButtonSize]: {
			fontSize: string;
			padding: string;
		};
	};
	buttonScheme: {
		[key in ButtonScheme]: {
			color: string;
			backgroundColor: string;
		};
	};
	borderRadius: {
		default: string;
	};

	layout: {
		width: {
			[key in LayoutWidth]: string;
		};
	};
}

export const light: Theme = {
	name: 'light',
	color: {
		primary: '##ff5800',
		background: 'lightgray',
		secondary: '#5F5F5F',
		third: 'green',
		border: 'grey',
		text: 'black',
	},
	heading: {
		large: {
			fontSize: '2rem',
		},
		medium: {
			fontSize: '1.5rem',
		},
		small: {
			fontSize: '1rem',
		},
	},
	button: {
		large: {
			fontSize: '1.5rem',
			padding: '1rem 2rem',
		},
		medium: {
			fontSize: '1rem',
			padding: '0.5rem 1rem',
		},
		small: {
			fontSize: '0.75rem',
			padding: '0.25rem 0.5rem',
		},
	},
	buttonScheme: {
		primary: {
			color: 'white',
			backgroundColor: 'red',
		},
		normal: {
			color: 'black',
			backgroundColor: 'lightgrey',
		},
	},
	borderRadius: {
		default: '4px',
	},
	layout: {
		width: {
			large: '1020px',
			medium: '760px',
			small: '320px',
		},
	},
};

export const dark: Theme = {
	...light,
	name: 'dark',
	color: {
		primary: 'coral',
		background: 'midnightblue',
		secondary: 'red',
		third: 'yellow',
		border: 'grey',
		text: 'white',
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
