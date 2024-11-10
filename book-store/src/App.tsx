import { ThemeProvider } from 'styled-components';
import Header from './components/common/Header';
import Layout from './components/layout/Layout';
import GlobalStyle from './style/global';
import { dark, getTheme, light, ThemeName } from './style/theme';
import ThemeSwitcher from './components/header/ThemeSwitcher';
import { useContext, useState } from 'react';
import { BookStoreThemeProvider, ThemeContext } from './context/themeContext';
import Home from './pages/Home';

function App() {
	// const [themeName, setThemeName] = useState<ThemeName>('light');
	const { themeName, setThemeName } = useContext(ThemeContext);

	return (
		<>
			<BookStoreThemeProvider>
				<ThemeSwitcher />
				<Layout children={<Home />} />
			</BookStoreThemeProvider>
		</>
	);
	// return (
	// 	<Layout>
	// 		<Header />
	// 	</Layout>
	// );
}

export default App;
