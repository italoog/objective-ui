import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@objective-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat soluta ratione tenetur. Tenetur, reiciendis. Repudiandae ullam dolorem aliquam quo est, sapiente debitis blanditiis temporibus suscipit nobis, illo cupiditate, voluptatibus ratione?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
