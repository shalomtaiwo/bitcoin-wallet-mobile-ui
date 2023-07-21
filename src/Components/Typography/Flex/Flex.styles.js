import styled from "styled-components";

export const FlexDiv = styled.div.attrs((props) => ({
	$align: props.$align || "center",
	$justify: props.$justify || "inherit",
	$direction: props.$direction || "row",
	$radius: props.$radius || 0,
	$padding: props.$padding || 0,
	$mt: props.$mt || 0,
	$mb: props.$mb || 0,
	$mr: props.$mt || 0,
	$ml: props.$ml || 0,
	$background: props.$background || "transparent",
}))`
	-webkit-border-radius: ${(props) => props.$radius};
	-moz-border-radius: ${(props) => props.$radius};
	border-radius: ${(props) => props.$radius}px;
	border: 0;
	background: ${(props) => props.$background};
	font-family: Semibold;
	display: flex;
	align-items: ${(props) => props.$align};
	justify-content: ${(props) => props.$justify};
	flex-direction: ${(props) => props.$direction};
	padding: ${(props) => props.$padding}px;
	margin-top: ${(props) => props.$mt}px !important;
	margin-bottom: ${(props) => props.$mb}px !important;
	margin-right: ${(props) => props.$mr}px !important;
	margin-left: ${(props) => props.$ml}px !important;
`;
