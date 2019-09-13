import HandleMoney from '../presenters/HandleMoneyPresenter'
it('i want to kone income of date 05 and month 02 and year 2000 result ==500', () => {
  // totalOfIncomeEachYarAndMonthAndDate
  const dataMoneys = [
    { type: 'income', money: 500, date: +new Date('02/05/2000') },
    { type: 'income', money: 500, date: +new Date('02/06/2000') },
    { type: 'income', money: 500, date: +new Date('02/06/2000') },

    { type: 'income', money: 1000, date: +new Date('02/05/1990') },
    { type: 'income', money: 1000, date: +new Date('03/05/1990') },
    { type: 'income', money: 1000, date: +new Date('05/03/1990') },
    { type: 'income', money: 1000, date: +new Date('05/03/2000') },
    { type: 'outcome', money: 500, date: +new Date('06/02/2000') }
  ]
  const hm = new HandleMoney(dataMoneys)
  expect(500).toEqual(hm.totalOfIncomeEachYarAndMonthAndDate(2000, 2, 5))
})
it('i want to know income of month 02 and year 2000 result will return 1000', () => {
  const dataMoneys = [
    { type: 'income', money: 500, date: +new Date('02/05/2000') },
    { type: 'income', money: 1000, date: +new Date('02/05/1990') },
    { type: 'income', money: 1000, date: +new Date('03/05/1990') },
    { type: 'income', money: 1000, date: +new Date('05/03/1990') },
    { type: 'income', money: 1000, date: +new Date('05/03/2000') },
    { type: 'outcome', money: 500, date: +new Date('06/02/2000') }
  ]
  const hm = new HandleMoney(dataMoneys)
  expect(0).toEqual(hm.totalOfOutComeEachYearAndMonth(1000, 6))
})
it('i want to know income of month 02 and year 2000 result will return 1000', () => {
  const dataMoneys = [
    { type: 'income', money: 500, date: +new Date('02/05/2000') },
    { type: 'income', money: 1000, date: +new Date('02/05/1990') },
    { type: 'income', money: 1000, date: +new Date('03/05/1990') },
    { type: 'income', money: 1000, date: +new Date('05/03/1990') },
    { type: 'income', money: 1000, date: +new Date('05/03/2000') },
    { type: 'outcome', money: 500, date: +new Date('06/02/2000') }
  ]
  const hm = new HandleMoney(dataMoneys)
  expect(500).toEqual(hm.totalOfOutComeEachYearAndMonth(2000, 6))
})

it('i want to know income of month 02 and year 2000 result will return 1000', () => {
  const dataMoneys = [
    { type: 'income', money: 500, date: +new Date('02/05/2000') },
    { type: 'income', money: 1000, date: +new Date('03/05/2000') },
    { type: 'outcome', money: 1000, date: +new Date('02/05/2000') },
    { type: 'income', money: 1000, date: +new Date('05/03/1990') },
    { type: 'income', money: 1000, date: +new Date('05/03/1990') },
    { type: 'income', money: 1000, date: +new Date('05/03/2000') },
    { type: 'outcome', money: 500, date: +new Date('06/02/2000') }
  ]
  const hm = new HandleMoney(dataMoneys)
  expect(500).toEqual(hm.totalOfIncomeEachYearAndMonth(2000, 2))
})

it('i want to know outcome of year is 2000 result will return 500', () => {
  const dataMoneys = [
    { type: 'income', money: 1000, date: +new Date('02/05/1990') },
    { type: 'income', money: 1000, date: +new Date('02/05/1990') },
    { type: 'income', money: 1000, date: +new Date('05/03/1990') },
    { type: 'income', money: 1000, date: +new Date('05/03/2000') },
    { type: 'outcome', money: 500, date: +new Date('06/02/2000') }
  ]
  const hm = new HandleMoney(dataMoneys)
  expect(500).toEqual(hm.totalOfOutComeEachYear(2000))
})

it('i want to know income of year is 2000 result will return 1000', () => {
  const dataMoneys = [
    { type: 'income', money: 1000, date: +new Date('02/05/1990') },
    { type: 'income', money: 1000, date: +new Date('02/05/1990') },
    { type: 'income', money: 1000, date: +new Date('05/03/1990') },
    { type: 'income', money: 1000, date: +new Date('05/03/2000') },
    { type: 'outcome', money: 500, date: +new Date('06/02/2000') }
  ]
  const hm = new HandleMoney(dataMoneys)
  expect(1000).toEqual(hm.totalOfIncomeEachYear(2000))
})

it('i want to know income of year is 1990 result will retrun is 2000', () => {
  const dataMoneys = [
    { type: 'income', money: 1000, date: +new Date('02/05/1990') },
    { type: 'income', money: 1000, date: +new Date('02/05/1990') },
    { type: 'income', money: 1000, date: +new Date('05/03/2000') },
    { type: 'income', money: 1000, date: +new Date('05/03/2000') },
    { type: 'outcome', money: 500, date: +new Date('06/02/2000') }
  ]
  const hm = new HandleMoney(dataMoneys)
  expect(2000).toEqual(hm.totalOfIncomeEachYear(1990))
})

it('test average of income and out come result == 500 when income == 1000 and outcome == 500', () => {
  const dataMoneys = [
    { type: 'income', money: 1000, date: +new Date('05/02/1990') },
    { type: 'outcome', money: 500, date: +new Date('06/02/1990') }
  ]
  const hm = new HandleMoney(dataMoneys)
  const resIncome = hm.totalOfIncome()
  const resOut = hm.totalOfOutComeMoney()
  expect(500).toEqual(hm.averageTransection(resIncome, resOut))
})
it('test total of outcome == 1000', () => {
  const dataMoneys = [
    { type: 'outcome', money: 1000, date: +new Date('05/02/1990') },
    { type: 'income', money: 500, date: +new Date('06/02/1990') }
  ]
  const hm = new HandleMoney(dataMoneys)
  expect(1000).toEqual(hm.totalOfOutComeMoney())
})
it('test total of outcome == 0', () => {
  const dataMoneys = [
    { type: 'income', money: 500, date: +new Date('05/02/1990') },
    { type: 'income', money: 500, date: +new Date('06/02/1990') }
  ]
  const hm = new HandleMoney(dataMoneys)
  expect(0).toEqual(hm.totalOfOutComeMoney())
})

it('test total of income == 1000', () => {
  const dataMoneys = [
    { type: 'income', money: 500, date: +new Date('05/02/1990') },
    { type: 'income', money: 500, date: +new Date('06/02/1990') }
  ]
  const hm = new HandleMoney(dataMoneys)
  expect(1000).toEqual(hm.totalOfIncome())
})

it('test total of income == 500', () => {
  const dataMoneys = [
    { type: 'income', money: 500, date: +new Date('05/02/1990') },
    { type: 'outcome', money: 500, date: +new Date('06/02/1990') }
  ]
  const hm = new HandleMoney(dataMoneys)
  expect(500).toEqual(hm.totalOfIncome())
})
