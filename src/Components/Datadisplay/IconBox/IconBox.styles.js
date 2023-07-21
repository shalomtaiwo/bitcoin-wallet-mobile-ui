import styled from "styled-components";

export const IconBoxCard = styled.div.attrs((props) => ({
	$height: props.$height || 180,
    $width: `${props.$width}%` || 'initial',
    $pt: props.$pt || 10,
    $pb: props.$pb || 5,
    $pr: props.$pr || 18,
    $pl: props.$pl || 18,
    $mt: props.$mt || 0,
	$mb: props.$mb || 0,
	$mr: props.$mt || 0,
	$ml: props.$ml || 0,
}))`
	box-shadow: -1px 7px 17px 7px #cdcbcb4f;
    background-color: #FFF;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: ${(props) => props.$height}px;
    width: ${(props) => props.$width};
    padding-top: ${(props) => props.$pt}px;
    padding-bottom: ${(props) => props.$pb}px;
    padding-right: ${(props) => props.$pr}px;
    padding-left: ${(props) => props.$pl}px;
    margin-top: ${(props) => props.$mt}px;
	margin-bottom: ${(props) => props.$mb}px;
	margin-right: ${(props) => props.$mr}px;
	margin-left: ${(props) => props.$ml}px;
`;