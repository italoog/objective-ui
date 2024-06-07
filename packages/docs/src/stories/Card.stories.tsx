import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardProps } from '@objective-ui/react'

export default {
  title: 'Components/Card',
  component: Card,

  args: {
    src: 'https://i.imgur.com/3q5HQUJ.png',
    alt: 'Abner Jenkins',
    label: 'Abner Jenkins',
    firstColumnText: [
      'Iron Man: Armor Wars',
      'Old Man Hawkeye',
      'Fantastic Four Visionaries: Walter Simonson Vol. 1',
    ],
    secondColumnText: ['AvX', 'Demon in the Bottle', 'Dynasty M'],
  },

  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<CardProps>

export const Primary: StoryObj<CardProps> = {}
