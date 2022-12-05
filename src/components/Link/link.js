import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkHref = styled(Link)`
  margin: 1.5em 0;
  color: #000;
  cursor: pointer;
  &:hover{
    text-decoration: underline;
  }
`;
