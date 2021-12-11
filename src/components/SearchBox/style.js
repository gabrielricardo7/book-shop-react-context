import styled from "@emotion/styled";

export const SearchForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
margin: 10px auto;
input {
    border-style: none;
    border-radius: 10px 0 0 10px;
    border: 2px solid #009edc;
    font-family: var(--readex);
    font-size: 16px;
    width: 256px;
    outline: none;
    padding: 5px;
    &:focus {
        border-color: #ea4c89;
    }
}
button {
    background-color: #009edc;
    border-style: none;
    border-radius: 0 10px 10px 0;
    border: 2px solid #009edc;
    &:hover {
        background-color: #ea4c89;
        border-color: #ea4c89;
        cursor: pointer;
    }
}
`;