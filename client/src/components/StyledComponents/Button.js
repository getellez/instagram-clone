import styled from 'styled-components'
import { colors } from '../../config/theme'

export const Button = styled.button`
  background-color: ${props => props.color ? colors[props.color] : colors.primary};
  border: 1px solid transparent;
  border-radius: .4rem;
  color: ${colors.white};
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
`
