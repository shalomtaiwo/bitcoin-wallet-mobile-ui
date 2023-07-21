import styled from "styled-components";

export const TextButton = styled.button.attrs((props) => ({
	$size: props.$size || 12.84,
	$color: props.$color || "#fff",
	$bgColor: props.$bgColor || "#1ec070",
	$mt: props.$mt || 0,
	$mb: props.$mb || 0,
	$mr: props.$mt || 0,
	$ml: props.$ml || 0,
}))`
	-webkit-border-radius: 8;
	-moz-border-radius: 8;
	border-radius: 8px;
	font-family: Normal;
	border: 0;
	padding: 10px 18px;
	box-shadow: -1px 2px 15px 2px #cdcbcb4f;
	color: ${(props) => props.$color};
	background: ${(props) => props.$bgColor};
	font-size: ${(props) => props.$size}px;
	margin-top: ${(props) => props.$mt}px;
	margin-bottom: ${(props) => props.$mb}px;
	margin-right: ${(props) => props.$mr}px;
	margin-left: ${(props) => props.$ml}px;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		text-decoration: none;
		box-shadow: inset 11px 12px 15px 2px #cdcbcb4f;
	}
`;

export const IconButton = styled.button.attrs((props) => ({
	$size: props.$size || 12,
	$color: props.$color || "#afb8c4",
}))`
	display: flex;
	-webkit-border-radius: 28;
	-moz-border-radius: 28;
	border-radius: 28px;
	border: 0;
	cursor: pointer;
	background: transparent;
	font-family: Arial;
	color: ${(props) => props.$color};
	font-size: ${(props) => props.$size}px;
	padding: 10px 10px 10px 10px;
	text-decoration: none;

	&:hover {
		text-decoration: none;
	}
`;
