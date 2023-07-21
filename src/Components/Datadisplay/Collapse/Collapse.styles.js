import styled from "styled-components";

export const MainCollapse = styled.div.attrs((props) => ({
	$family: props.$family || "Semibold",
	$radius: props.$radius || 8,
	$borderweight: props.$borderweight || 0,
	$borderColor: props.$borderColor || "#ccc",
}))`
	-webkit-border-radius: ${(props) => props.$radius};
	-moz-border-radius: ${(props) => props.$radius};
	border-radius: ${(props) => props.$radius}px;
	overflow: hidden;
	font-family: ${(props) => props.$family};
	border: ${(props) => props.$borderweight}px solid
		${(props) => props.$borderColor};
	margin-bottom: 10px !important;

	&:hover {
		text-decoration: none;
	}
`;

export const CollapseHeader = styled.div.attrs((props) => ({
	$padding: props.$padding || 10,
	$background: props.$background || "#fff",
}))`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${(props) => props.$background};
	padding: ${(props) => props.$padding}px;
	text-decoration: none;

	&:hover {
		text-decoration: none;
	}
`;

export const CollapseContent = styled.div.attrs((props) => ({
	$padding: props.$padding || 10,
	$background: props.$background || "#fff",
}))`
	overflow: hidden;
	background: ${(props) => props.$background};
	height: fit-content;
	padding: ${(props) => props.$padding}px;
	text-decoration: none;

	&:hover {
		text-decoration: none;
	}
`;
