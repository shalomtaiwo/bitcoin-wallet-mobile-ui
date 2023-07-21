import styled from "styled-components";

export const P = styled.p.attrs((props) => ({
	$size: props.$size || 12,
	$color: props.$color || "#596573",
	$family: props.$family || "Semibold",
	$radius: props.$radius || 0,
	$space: props.$space || 0,
	$padding: props.$padding || 0,
	$mt: props.$mt || 12,
	$mb: props.$mb || 12,
	$mr: props.$mt || 0,
	$ml: props.$ml || 0,
	$pt: props.$pt || 0,
	$pb: props.$pb || 0,
	$pr: props.$pr || 0,
	$pl: props.$pl || 0,
	$background: props.$background || "transparent",
}))`
	-webkit-border-radius: ${(props) => props.$radius};
	-moz-border-radius: ${(props) => props.$radius};
	border-radius: ${(props) => props.$radius}px;
	border: 0;
	background: ${(props) => props.$background};
	font-family: ${(props) => props.$family};
	font-size: ${(props) => props.$size}px;
	color: ${(props) => props.$color};
	padding: ${(props) => props.$padding}px;
	margin-top: ${(props) => props.$mt}px !important;
	margin-block-start: ${(props) => props.$mt}px !important;
	margin-block-end: ${(props) => props.$mb}px !important;
	margin-bottom: ${(props) => props.$mb}px !important;
	margin-right: ${(props) => props.$mr}px !important;
	margin-left: ${(props) => props.$ml}px !important;
	padding-top: ${(props) => props.$pt}px;
	padding-bottom: ${(props) => props.$pb}px;
	padding-right: ${(props) => props.$pr}px;
	padding-left: ${(props) => props.$pl}px;
	letter-spacing: ${(props) => props.$space}px;
	text-decoration: none;

	&:hover {
		text-decoration: none;
	}
`;
