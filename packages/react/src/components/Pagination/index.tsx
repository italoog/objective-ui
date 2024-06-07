import { Button, ImageController, PaginationContainer } from './styles'
import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from 'phosphor-react'

export interface PaginationProps {
  onPageChange: (action: string | number) => void
  currentPage: number
  totalPages: number
}

export function Pagination({
  onPageChange,
  currentPage,
  totalPages,
}: PaginationProps) {
  const createPageButtons = () => {
    const buttons = []
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <Button
          key={i}
          active={currentPage === i}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Button>,
      )
    }
    return buttons
  }

  return (
    <PaginationContainer>
      <ImageController
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        <CaretDoubleLeft />
      </ImageController>
      <ImageController
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <CaretLeft />
      </ImageController>
      {createPageButtons()}
      <ImageController
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <CaretRight />
      </ImageController>
      <ImageController
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        <CaretDoubleRight />
      </ImageController>
    </PaginationContainer>
  )
}

Pagination.displayName = 'Pagination'
