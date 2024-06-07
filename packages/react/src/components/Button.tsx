import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 40,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$darkBlue',
      },

      secondary: {
        color: 'darkSmoke',
        backgroundColor: '$white',
      },

      tertiary: {
        color: '$darkSmoke',
        backgroundColor: '$snow',
        border: '1px solid $darkSnow',
      },
    },

    size: {
      sm: {
        padding: '$2 $4',
        height: '$8',
      },
      md: {
        padding: '$2 $4',
        height: 46,
        width: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
Button.displayName = 'Button'
