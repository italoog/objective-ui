import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@objective-ui/react'
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: '1',
    variant: 'primary',
    size: 'sm',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    children: {
      control: {
        type: null,
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: '1',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: '1',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: '1',
  },
}
export const ArrowDoubleR: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: <CaretDoubleRight />,
  },
}

export const ArrowR: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: <CaretRight />,
  },
}

export const ArrowDoubleL: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: <CaretDoubleLeft />,
  },
}

export const ArrowL: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: <CaretLeft />,
  },
}
