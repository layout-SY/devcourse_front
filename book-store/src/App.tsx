import Layout from './components/layout/Layout';
import ThemeSwitcher from './components/header/ThemeSwitcher';
import { useContext, useState } from 'react';
import { BookStoreThemeProvider, ThemeContext } from './context/themeContext';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './components/common/Error';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import Login from './pages/Login';
import Books from './pages/Books';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layout>
				<Home />
			</Layout>
		),
		errorElement: <Error />,
	},
	{
		path: '/books',
		element: (
			<div>
				<Books />
			</div>
		),
	},
	{
		path: '/signup',
		element: (
			<Layout>
				<Signup />
			</Layout>
		),
	},
	{
		path: '/reset',
		element: (
			<Layout>
				<ResetPassword />
			</Layout>
		),
	},
	{
		path: '/login',
		element: (
			<Layout>
				<Login />
			</Layout>
		),
	},
]);

function App() {
	// const [themeName, setThemeName] = useState<ThemeName>('light');
	const { themeName, setThemeName } = useContext(ThemeContext);

	return (
		<>
			<BookStoreThemeProvider>
				<RouterProvider router={router} />
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
