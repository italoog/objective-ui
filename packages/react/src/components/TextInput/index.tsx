import { ComponentProps } from 'react'
import { TextInputContainer, Input, Label } from './styles'
import { Box } from '../Box'

export interface TextInputProps extends ComponentProps<typeof Input> {
  icon?: React.ReactNode
  label?: string
}

export function TextInput({ label, icon, ...props }: TextInputProps) {
  return (
    <>
      {label ? (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            padding: 0,
            borderRadius: 0,
          }}
        >
          {!!label && <Label>{label}</Label>}
          <TextInputContainer>
            <Input {...props} />
            {!!icon && <>{icon}</>}
          </TextInputContainer>
        </Box>
      ) : (
        <TextInputContainer>
          <Input {...props} />
          {!!icon && <>{icon}</>}
        </TextInputContainer>
      )}
    </>
  )
}

TextInput.displayName = 'TextInput'
