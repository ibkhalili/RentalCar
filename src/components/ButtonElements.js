
import styled from "styled-components";

import {Link as LinkRouter} from "react-router-dom";

export const Button = styled(LinkRouter)`
border-raduis: 50px;
background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({fontBig}) => (fontBig ? '20px' : '16ppx')};
outline: one;
borer: none;
cursor: pointer;
diplay: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ?  '#fff' : '#01BF71')};
}
`