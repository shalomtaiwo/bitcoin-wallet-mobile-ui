import styled from "styled-components";

export const BottomBar = styled.div.attrs((props) => ({
	$matches: props.$matches,
}))`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	align-items: center;
	padding: 0px !important;
	background-color: white;
	position: ${(props) => (props.$matches ? "fixed" : "absolute")};
	bottom: 0;
	right: 0;
	height: 70px;
	border-top-left-radius: 0;
	border-bottom-left-radius: ${(props) => (props.$matches ? "0px" : "35px")};
	border-top-right-radius: 0;
	border-bottom-right-radius: ${(props) => (props.$matches ? "0px" : "35px")};
`;

export const Div = styled.div`
	cursor: pointer;

	${BottomBar} .active button svg {
        color: #4c5968;
	}
`;
