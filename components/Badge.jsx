import styled, { css } from "styled-components";
import { pokeBadgeColor } from "../utils/utility";

const Badge = styled.span`
  ${(props) =>
    props.type &&
    css`
      background-color: ${pokeBadgeColor[props.type]};
    `}

  font-size: 1.33rem;
  border-radius: 3rem;
  color: white;
  display: inline;
  margin: 0;
  margin-right: 0.7rem;
  padding: 0.5rem 1rem;
  font-weight: 500;
  text-transform: capitalize;
`;

export default Badge;
