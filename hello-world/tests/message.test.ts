import { getMessage } from '../src/message'

test('message is expected one', () => {
  const message = getMessage('foo')
  expect(message).toBe('Hello World foo')
})
