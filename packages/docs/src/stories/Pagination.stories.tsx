import type { Meta, StoryObj } from '@storybook/react'
import { Pagination, PaginationProps } from '@objective-ui/react'
import { useState } from 'react'

export default {
  title: 'Components/Pagination',
  component: Pagination,

  args: {
    currentPage: 1,
    totalPages: 5,
    onPageChange: (action: string | number) => {
      console.log('onPageChange called with:', action)
      // Aqui você pode adicionar sua lógica de mudança de página
      // Por exemplo, você pode atualizar o estado do componente com a nova página:
      // this.setState({ currentPage: action });

      // Ou você pode fazer uma solicitação à API para carregar os dados da nova página:
      // fetch(`sua-url-da-api?page=${action}`)
      //   .then(response => response.json())
      //   .then(data => {
      //     this.setState({ currentPage: action, data: data });
      //   })
      //   .catch(error => console.error('Error fetching data:', error));
    },
  },
  decorators: [
    (Story) => {
      const [currentPage, setCurrentPage] = useState(5)

      const handlePageChange = (action: string | number) => {
        console.log('onPageChange called with:', action)
        setCurrentPage(action as number)
      }

      return (
        <Story
          args={{
            currentPage,
            totalPages: 5,
            onPageChange: handlePageChange,
          }}
        />
      )
    },
  ],
} as Meta<PaginationProps>

export const Primary: StoryObj<PaginationProps> = {}
