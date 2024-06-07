import { useState, useEffect } from 'react'
import { Avatar } from '../Avatar'
import { Box } from '../Box'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { CardContainer, CharacterContainer, TextContainer } from './styles'
import { useMediaQuery } from 'react-responsive'

export interface CardProps {
  src?: string
  alt?: string
  label: string
  firstColumnText: string[]
  secondColumnText: string[]
}

export function Card({
  src,
  alt,
  label,
  firstColumnText,
  secondColumnText,
}: CardProps) {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  const [showTextContainer, setShowTextContainer] = useState(false)

  useEffect(() => {
    if (!isMobile) {
      setShowTextContainer(true)
    }
  }, [isMobile])

  const toggleTextContainer = () => {
    setShowTextContainer((prev) => !prev)
  }

  return (
    <Box>
      <CardContainer
        onClick={() => {
          isMobile && toggleTextContainer()
        }}
      >
        <CharacterContainer>
          <Avatar src={src} alt={alt} />
          <Heading>{label}</Heading>
        </CharacterContainer>
        {isMobile && showTextContainer && (
          <>
            <TextContainer>
              {firstColumnText.map((text, index) => (
                <Text key={index}>{text}</Text>
              ))}
            </TextContainer>
            <TextContainer>
              {secondColumnText.map((text, index) => (
                <Text key={index}>{text}</Text>
              ))}
            </TextContainer>
          </>
        )}
        {!isMobile && (
          <>
            <TextContainer>
              {firstColumnText.map((text, index) => (
                <Text key={index}>{text}</Text>
              ))}
            </TextContainer>
            <TextContainer>
              {secondColumnText.map((text, index) => (
                <Text key={index}>{text}</Text>
              ))}
            </TextContainer>
          </>
        )}
      </CardContainer>
    </Box>
  )
}
Card.displayName = 'Card'
