import styled from "styled-components";

export const MainTab = styled.div.attrs((props) => ({
}))`
	border-radius: 0;
    margin-bottom: 15px
`;

export const TabHeader = styled.div`
	display: flex;
    justify-content: space-between;
`;

export const TabItem = styled.div`
	padding: 4px 12px;
	cursor: pointer;
	border-radius: 20px;
	transition: background-color 1s ease;
`;
