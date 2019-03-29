import styled from "styled-components";

const Search = styled.div`
    position: absolute;
    font-size: 0.8rem;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    z-index: 999;
    right: 100px;
    display: ${({ show }) => (show === true ? "none" : "block")};
    .search-bar {
    text-align: right;
`;

export default Search;
