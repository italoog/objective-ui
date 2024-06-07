import { styled } from '../../styles'

export const Button = styled('button', {
  width: '$10',
  height: '$8',
  border: '1px solid $darkSnow',
  backgroundColor: '$darkSnow',
  borderRadius: '$xs',
  margin: '$2',
  color: '$darkSmoke',

  variants: {
    active: {
      true: {
        backgroundColor: '$darkBlue',
        color: '$white',
        border: '1px solid $darkBlue',
      },
    },
  },
})

export const ImageController = styled('button', {
  margin: '$2',
  border: 'none',
  backgroundColor: 'transparent',
})
