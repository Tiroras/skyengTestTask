import { transformDate } from './transformDate'

test('transformDate', () => {
  expect(transformDate('2012-01-01T00:31:50Z')).toEqual('01.01.2012')
})
