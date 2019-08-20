import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.jc || ''};
  align-items: ${(props) => props.ai || ''};
  flex-direction: ${(props) => props.fd || ''};
  flex-wrap: ${(props) => props.fw || ''};
  flex-shrink: ${(props) => props.fs || ''};
  flex-basis: ${(props) => props.fb || ''};
`

export default Flex
