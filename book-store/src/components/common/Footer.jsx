import React from 'react';

import logo from '../../assets/images/logo192.png';
import styled from 'styled-components';
export default function Footer() {
	return (
		<div>
			<h1 className="logo">
				<img src={logo} alt="book store" />
			</h1>
			<div className="copyright">
				<p>copyright(c), 2024, Book Store</p>
			</div>
		</div>
	);
}

const FooterStyle = styled.footer`
	width: 100%;
	margin: 0 auto;
	max-width: ${({ theme }) => theme.layout.width.large};
	border-top: 1px solid ${({ theme }) => theme.color.background};
	padding: 20px 0;
	display: flex;
	justify-content: space-between;

	.logo {
		img {
			width: 140px;
		}
	}

	.copyright {
		p {
			font-size: 0.75px;
			color: ${({ theme }) => theme.color.text};
		}
	}
`;
