import styled from "@emotion/styled";

export const MyHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: -webkit-fill-available;
    justify-content: space-between;
    font-family: var(--readex);
    background-color: black;
    color: white;
    position: fixed;
    top: 0;
    z-index: 1;
    padding: 0 7px;
    h1 {
        font-size: 22px;
        margin: 0;
    }
    img {
        width: 64px;
        height: 64px;
    }
`;