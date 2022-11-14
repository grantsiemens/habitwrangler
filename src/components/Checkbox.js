import styled from "styled-components";

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
const Icon = styled.svg`
  fill: none;
  stroke: ${props => props.theme.colorSecondary2};
  stroke-width: .2em;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  margin-right: 1em;
  background: ${props => props.checked ? props => props.theme.colorPrimary1 : props => props.theme.colorSecondary2};
  border-radius: 3px;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${props => props.theme.colorPrimary2};
  }

  ${Icon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'}
  }
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Checkbox = ({ className, checked, id, ...props }) => (
    <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} id={id} {...props} />
        <StyledCheckbox checked={checked}>
            <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </Icon>
        </StyledCheckbox>

    </CheckboxContainer>
)

export default Checkbox