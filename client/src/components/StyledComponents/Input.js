import styled from 'styled-components'
import { colors } from '../../config/theme'

export const Input = styled.input`
  font-size: 1.6rem;
  color: ${colors.blueCharcoal};
  font-weight: 400;
  padding: .6rem 1.2rem;
  line-height: 1.5;
  background-color: ${colors.white};
  border: 1px solid #ced4da;
  border-radius: .4rem;

  &:focus {
    box-shadow: 0 0 0 0.4rem rgb(13 110 253 / 25%);
    border-color: #86b7fe;
    color: ${colors.secondary};
    background-color: #fff;
    outline: 0;
  }
`

