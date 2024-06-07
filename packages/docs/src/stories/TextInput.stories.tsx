import type { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputProps } from '@objective-ui/react'
import { MagnifyingGlass } from 'phosphor-react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Search',
  },
}
export const Disabled: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Search',
    disabled: true,
  },
}
export const WithLabel: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Search',
    label: 'Nome do personagem',
  },
}

export const WithIcon: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Search',
    icon: <MagnifyingGlass size={15} />,
  },
}
