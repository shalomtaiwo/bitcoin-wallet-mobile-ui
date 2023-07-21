import React from 'react'
import { DeviceFrameset } from "react-device-frameset";
import "./marvel-devices.min.css";
import { Outlet } from 'react-router-dom';
import styled from "styled-components";
import BottomNav from '../Navigation/BottomBar/BottomBar';

export const Div = styled.div`
	padding-top: 30px;
	text-decoration: none;
    height: 100%;
`;
export const SecondDiv = styled.div`
    text-decoration: none;
    background: #f6f8fe;
    flex: 1;
    min-height: max-content;
`;
export const MainDiv = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    position: relative;
`;

const Container = ({ matches }) => {
    if (matches) {
        return (
            <>
                <MainDiv>
                    <SecondDiv>
                        <Outlet />
                    </SecondDiv>
                    <BottomNav matches={matches} />
                </MainDiv>
            </>
        )
    }
    return (
        <DeviceFrameset
            device="iPhone X"
        >
            <Div>
                <Outlet />
            </Div>
            <BottomNav matches={matches} />
        </DeviceFrameset>
    )
}

export default Container