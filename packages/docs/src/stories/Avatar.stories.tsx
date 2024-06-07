import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@objective-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/italoog.png',
    alt: 'Italo Gomes',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
