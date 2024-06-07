import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'

export const Box = styled('div', {
  padding: '$5 $6',
  borderRadius: '$sm',
  backgroundColor: '$white',
  boxShadow: '0px 0px 5px #00000033',

  [`@media (max-width: 768px)`]: {
    padding: '$3 $4',
  },
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}
Box.displayName = 'Box'
