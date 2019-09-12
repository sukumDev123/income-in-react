import AuthPresenter from '../presenters/AuthPresenter'

it('test user input some fill data.length === data.length result test will false', () => {
  const auth = new AuthPresenter()
  expect(false).toEqual(auth.checkValueMustNotEmpty(['1', '', '3']))
})

it('test user input all fill data.length === data.length result test will true', () => {
  const auth = new AuthPresenter()
  expect(true).toEqual(auth.checkValueMustNotEmpty(['1', '2', '3']))
})
