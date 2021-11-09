import { types } from 'pg'

export default (): void => {
  types.setTypeParser(types.builtins.NUMERIC , function (value) {
    const parsedValue = parseFloat(value)

    if (parsedValue < 70368744177663) {
      return parseFloat(value)
    } else {
      console.error(value, 'Value to big, overflow risk')
      return value
    }
  })
}
