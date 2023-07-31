import { firstCharToUpperCase } from './firstCharToUpperCase'

test('firstCharToUpperCase', () => {
  expect(firstCharToUpperCase('string')).toEqual('String')
  expect(firstCharToUpperCase('oh, hi Mark')).toEqual('Oh, hi Mark')
  expect(firstCharToUpperCase('City')).toEqual('City')
})
