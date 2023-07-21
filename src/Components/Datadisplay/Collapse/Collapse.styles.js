import styled from "styled-components";

export const MainCollapse = styled.div`
	-webkit-border-radius: 8;
	-moz-border-radius: 8;
	border-radius: 8px;
	overflow: hidden;
	font-family: Semibold;
	border: 0;
	margin-bottom: 10px !important;

	&:hover {
		text-decoration: none;
	}
`;

export const CollapseHeader = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #fff;
	padding: 10px;
	text-decoration: none;

	&:hover {
		text-decoration: none;
	}
`;

export const CollapseContent = styled.div`
	overflow: hidden;
	background: #fff;
	height: fit-content;
	padding: 10px;
	text-decoration: none;

	&:hover {
		text-decoration: none;
	}
`;
