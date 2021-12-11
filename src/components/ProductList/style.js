import styled from "@emotion/styled";

export const Container = styled.div({
    padding: "5px",
    margin: "5px",
    fontFamily: "var(--readex)",
}, `
h2 {
    font-size: 20px;
    margin: 0;
}
`);

export const List = styled.ul({
    listStyle: "none",
    padding: "0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
});

export const RestoreBtn = styled.button({
    backgroundColor: "#009edc",
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
            backgroundColor: "#ea4c89",
            transition: ".5s"
        },
    }
);