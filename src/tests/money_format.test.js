import { money_format } from '../presenters/money_format'

it('test money format 12,567.123', () => {
  const money_handle = money_format(12567.123)
  expect('12,567.12').toEqual(money_handle)
})

it('test money format 567', () => {
  const money_handle = money_format(567)
  expect('567.00').toEqual(money_handle)
})

it('test money format 4,567', () => {
  const money_handle = money_format(4567)
  expect('4,567.00').toEqual(money_handle)
})

it('test money format 1,234,567', () => {
  const money_handle = money_format(1234567)
  expect('1,234,567.00').toEqual(money_handle)
})
