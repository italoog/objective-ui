import { styled } from '../../styles'

export const CardContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  [`@media (max-width: 768px)`]: {
    width: '100%',
    flexDirection: 'column',
  },
})
export const CharacterContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$6',
  width: '30%',

  [`@media (max-width: 768px)`]: {
    width: '100%',
    padding: '$3 $4',
  },
})
export const TextContainer = styled('div', {
  display: 'flex',
  alignItems: ' flex-start',
  width: '30%',
  flexDirection: 'column',

  [`@media (max-width: 768px)`]: {
    paddingTop: '$3',
    width: '100%',
  },
})
