import { styled } from '../../styles'

export const PaginationContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

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

  [`@media (max-width: 768px)`]: {
    width: '$8',
    height: '$8',
    margin: '$1',
  },
})

export const ImageController = styled('button', {
  margin: '$2',
  border: 'none',
  backgroundColor: 'transparent',

  [`@media (max-width: 768px)`]: {
    width: '$4',
    height: '$4',
    margin: '$1',
  },
})
