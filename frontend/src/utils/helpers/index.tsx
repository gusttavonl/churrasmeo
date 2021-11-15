import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const getImageUrl = (url: string | undefined) => {
  if (process.env.NEXT_PUBLIC_IMAGE_HOST) {
    return `${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`
  }

  if (url) {
    return url
  }

  return null
}

export const formatData = (valueToFormat: string): string => {
  return format(new Date(valueToFormat), 'dd/MM/yyyy', {
    locale: ptBR
  })
}

export const accumulatorSum = (
  accumulator: number,
  increment: number
): number => {
  return accumulator + increment
}

export const sumValues = (numbersToSum: number[]): number => {
  const sum = numbersToSum.reduce(accumulatorSum, 0)
  return sum
}
