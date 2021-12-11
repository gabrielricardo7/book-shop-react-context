import styled from "@emotion/styled";

export const MyButton = styled.button(
    (props) => ({ backgroundColor: props.color }),
    {
        borderStyle: "none",
        borderRadius: "10px",
        color: "white",
        cursor: "pointer",
        fontFamily: "var(--readex)",
        fontSize: "14px",
        fontWeight: "bold",
        margin: "5px",
        minWidth: "30px",
        minHeight: "30px",
    },
    {
        "&:hover": { filter: "brightness(1.125)", transition: ".5s" },
    }
);