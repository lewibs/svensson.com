import styled from "styled-components";
import { blue, yellow } from "../styles/colors";
import { z } from "../styles/z-index";

const Slant = styled.div`
    background-color: ${props=>props.background};
    height: 100%;
    width: 150vw;
    transform : rotate(0deg);
`;

const Main = styled.div`
    position: fixed;
    z-index: ${z.back};
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
`;

export function Background() {
    return <Main>
        <Slant background={yellow} />
        <Slant background={blue} />
        <Slant background={yellow} />
    </Main>
}
