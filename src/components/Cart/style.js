import styled from "@emotion/styled";

export const CartBtn = styled.button`
background-color: transparent;
border: none;
width: 64px;
height: 64px;
padding: 0;
&:hover {
    cursor: pointer;
}
b {
    color: #fff;
    font-size: 32px;
    position: absolute;
    text-align: center;
    text-shadow: 2px 2px 3px #000;
    transform: translateX(21px);
    width: 36px;
    height: 36px;
}
`;

export const ClearBtn = styled.button({
    backgroundColor: "#e19433",
    borderStyle: "none",
    borderRadius: "10px",
    color: "white",
    cursor: "pointer",
    fontFamily: "var(--readex)",
    fontSize: "14px",
    fontWeight: "bold",
    margin: "5px",
    minHeight: "30px",
},
    {
        "&:hover": {
            backgroundColor: "#f2be2e",
            transition: ".5s"
        },
    }
);

export const List = styled.ul`
color: #000;
height: 360px;
padding: 0;
li {
    display: flex;
    align-items: center;
    height: 99px;
}
figure {
    display: flex;
    align-items: center;
    width: -webkit-fill-available;
    justify-content: space-between;
}
img {
    width: 50px;
    height: 75px;
}
figcaption {
    font-size: 14px;
}
hr {
    color: #003b6f;
}
`;