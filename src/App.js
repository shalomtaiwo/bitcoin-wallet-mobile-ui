import React from "react";
import { Route, Routes } from "react-router-dom";
import Container from "./Components/Container/Container";
import Wallet from "./Pages/Wallet/Wallet";
import "./App.css";
import { useMedia } from "react-use";
import { styled } from "styled-components";
import NotFound from "./Pages/NotFound/NotFound";

// Fonts
import "./Components/Fonts/sf-pro-display-font/SF-Pro-Display-Regular.woff";
import "./Components/Fonts/sf-pro-display-font/SF-Pro-Display-Semibold.woff";
import "./Components/Fonts/sf-pro-display-font/SF-Pro-Display-Bold.woff";

export const Div = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 50px;
`;

const App = () => {
	const matches = useMedia("(max-width: 414px)");

	if (!matches) {
		return (
			<Div>
				<Routes>
					<Route
						path="/"
						element={<Container matches={matches} />}
					>
						<Route
							path="/"
							element={<Wallet />}
						/>
						<Route
							path="*"
							element={<NotFound />}
						/>
					</Route>
				</Routes>
			</Div>
		);
	}

	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={<Container matches={matches} />}
				>
					<Route
						path="/"
						element={<Wallet />}
					/>
					<Route
						path="*"
						element={<NotFound />}
					/>
				</Route>
			</Routes>
		</div>
	);
};

export default App;
