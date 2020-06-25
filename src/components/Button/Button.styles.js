import styled from '@emotion/styled'
import { Colors } from '../../utils/colors'

const ButtonStyled = styled.button((props) => ({
  color: props.theme.color,
  padding: '0.5em 1.5em',
  backgroundColor: Colors.white,
  border: '1px solid currentColor',
  borderRadius: '0.3em'
}))

export default ButtonStyled
