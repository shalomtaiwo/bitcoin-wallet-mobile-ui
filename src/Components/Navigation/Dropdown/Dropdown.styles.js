import styled from "styled-components";

export const DropDnLi = styled.li`
	padding: 2px 10px;
	cursor: pointer;
    color: #596573;
    border-bottom: 1px solid #cdcbcb4f;
    margin-left: 5px;

    &:hover {
        background-color:#f7f9fa ;
    }
`;

export const DropDnOptions = styled.ul`
	position: absolute;
	top: 100%;
	right: 0;
	list-style: none;
	padding: 0;
    width: 150px;
	margin: 5px 20px 5px 0;
	background-color: #fff;
	border: 1px solid #fff;
	border-radius: 10px;
	box-shadow: -1px 3px 17px 3px #cdcbcb4f;
	opacity: 0;
	transform: scaleY(0);
	transform-origin: top;
	transition: opacity 0.3s ease, transform 0.3s ease;

    ${DropDnLi}:last-child{
        color: red;
        border-bottom: 0;
    }
`;
export const DropDn = styled.div`
	position: relative;
	display: inline-block;

	&:hover ${DropDnOptions} {
		opacity: 1;
		transform: scaleY(1);
	}
`;

