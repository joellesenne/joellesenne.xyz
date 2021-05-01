import { Link } from 'gatsby'
import styled from 'styled-components'
import { lighten } from 'polished'

export const wrapperBTN = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 3rem;
`

export const linkdBTN = styled(Link)`
  margin-top: 2rem;
  padding: 10px 25px;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.base.white};
  background-color: ${(props) => props.theme.colors.link.gradientRight};
  background-image: ${(props) => props.theme.gradient.btn};
  border-radius: 50px;
  border: 4px solid ${(props) => lighten(0.3, props.theme.colors.base.bg)};
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  transition: ${(props) => props.theme.transition.link};
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1rem;
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.link.bg};
    box-shadow: 0 0 2px 2px ${(props) => lighten(0.1, props.theme.colors.base.bg)};
    background-image: ${(props) => props.theme.gradient.btn};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    background-position: right center;
  }
`
