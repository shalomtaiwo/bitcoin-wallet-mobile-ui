import { styled } from "styled-components";

export const Img = styled.img.attrs((props) => ({
	$height: props.$height || 24,
	$radius: props.$radius || 0,
	$borderWidth: props.$borderWidth || 0,
}))`
	-webkit-border-radius: ${(props) => props.$radius};
	-moz-border-radius: ${(props) => props.$radius};
	border-radius: ${(props) => props.$radius}px;
	border-width: ${(props) => props.$borderWidth}px;
	height: ${(props) => props.$height}px;
	cursor: pointer;
	background: transparent;
	text-decoration: none;

	&:hover {
		text-decoration: none;
	}
`;
