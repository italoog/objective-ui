import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$white',
  border: '1px solid $darkSnow',
  boxSizing: 'border-box',
  borderRadius: '$sm',
  display: 'flex',
  padding: '$2 $4',
  alignItems: 'center',

  '&:has(input:focus)': {
    border: '1px solid $darkBlue',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})
export const Label = styled('label', {
  fontFamily: '$default',
  fontSize: '$md',
  fontWeight: '$bold',
  lineHeight: '$shorter',
  margin: 0,
  color: '$darkSmoke',
})
export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$darkSmoke',
  fontWeight: '$regular',
  backgroundColor: 'transparent',
  border: 'none',
  width: '100%',

  '&:focus': {
    outline: 'none',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    fontWeight: '$regular',
    color: '$smoke',
    fontStyle: 'italic',
  },
})
