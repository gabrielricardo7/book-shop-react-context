import styled from "@emotion/styled";

export const Figure = styled.figure({
  border: "thin #c0c0c0 solid",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "5px",
  maxWidth: "220px",
  width: "240px",
  height: "288px",
  margin: "5px",
  borderRadius: "5px",
  fontFamily: "var(--readex)",
  fontSize: "16px",
  backgroundColor: "white",
  color: "black",
}, `
  .magic, .cover {
    width:100px;
    height:150px;
    float:left;
  }
  .magic {
    background:red;
    background-image:url("images/magiclink.gif");
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center;
  }
  .cover {
    background:black;
  }
  .book {
    perspective:1000px;
    perspective-origin:100px 100px;
    -webkit-perspective:1000px;
    -webkit-perspective-origin:100px 100px;
  }
  .book .magic {
    transform:rotateY(180deg);
    transform-origin:100px 0;
    transition:transform 1s;
    -webkit-transform:rotateY(180deg);
    -webkit-transform-origin:100px 0;
    -webkit-transition:-webkit-transform 1s;
  }
  .book:hover .magic {
    transform:rotateY(0deg);
    transform-origin:100px 0;
    transition:transform 1s;
    -webkit-transform:rotateY(0deg);
    -webkit-transform-origin:100px 0;
    -webkit-transition:-webkit-transform 1s;
  }
  p, small {
    margin: 0;
    width: 200px;
    height: 36px;
    height: 40px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`);