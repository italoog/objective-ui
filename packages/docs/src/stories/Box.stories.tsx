import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@objective-ui/react'

export default {
  title: 'Components/Box',
  component: Box,

  args: {
    children: <Text>Testando o elemento Box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
