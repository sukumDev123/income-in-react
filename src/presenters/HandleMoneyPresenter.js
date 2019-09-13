class HandleMoney {
  dataMoneys = []
  constructor(dataMoneys) {
    this.dataMoneys = dataMoneys
  }
  totalOfOutcomeFromFilterDataAllFromDAte = date =>
    this.filterDataAllFromDate(date)
      .filter(data => data.type === 'outcome')
      .map(data => data.money)
      .reduce((sumV, val) => sumV + val, 0)

  totalOfIncomeFromFilterDataAllFromDate = date =>
    this.filterDataAllFromDate(date)
      .filter(data => data.type === 'income')
      .map(data => data.money)
      .reduce((sumVal, val) => sumVal + val, 0)

  totalOfOutComeFromFilterDataAllFromMonth = month =>
    this.filterDataAllFromMonth(month)
      .filter(data => data.type === 'outcome')
      .map(data => data.money)
      .reduce((sumVal, val) => sumVal + val, 0)

  totalOfInComeFromFilterDataAllFromMonth = month =>
    this.filterDataAllFromMonth(month)
      .filter(data => data.type === 'income')
      .map(data => data.money)
      .reduce((sumVal, val) => sumVal + val, 0)

  filterDataAllFromDate = date =>
    this.dataMoneys.filter(data => new Date(data.date).getDate() === date)

  filterDataAllFromMonth = month =>
    this.dataMoneys.filter(data => new Date(data.date).getMonth() + 1 === month)

  filterDataEachOfYearAndOfMonthOfDate = (year, month, date) =>
    this.filterDataEachOfYearAndOfMonth(year, month).filter(
      data => new Date(data.date).getDate() === date
    )

  filterDataEachOfYearAndOfMonth = (year, month) =>
    this.filterDataEachofYear(year).filter(
      data => new Date(data.date).getMonth() + 1 === month
    )

  filterDataEachofYear = year =>
    this.dataMoneys.filter(data => new Date(data.date).getFullYear() === year)

  totalOfIncomeEachYarAndMonthAndDate = (year, month, date) =>
    this.filterDataEachOfYearAndOfMonthOfDate(year, month, date)
      .filter(data => data.type === 'income')
      .map(data => data.money)
      .reduce((sumV, val) => sumV + val, 0)

  totalOfOutComeEachYearAndMonth = (year, month) =>
    this.filterDataEachOfYearAndOfMonth(year, month)
      .filter(data => data.type === 'outcome')
      .map(data => data.money)
      .reduce((sumV, val) => sumV + val, 0)

  totalOfIncomeEachYearAndMonth = (year, month) =>
    this.filterDataEachOfYearAndOfMonth(year, month)
      .filter(data => data.type === 'income')
      .map(data => data.money)
      .reduce((sumV, val) => sumV + val, 0)

  totalOfOutComeEachYear = year =>
    this.filterDataEachofYear(year)
      .filter(data => data.type === 'outcome')
      .map(data => data.money)
      .reduce((sumMoney, moneyEachData) => sumMoney + moneyEachData, 0)

  totalOfIncomeEachYear = year =>
    this.filterDataEachofYear(year)
      .filter(data => data.type === 'income')
      .map(data => data.money)
      .reduce((sumMoney, moneyEachData) => sumMoney + moneyEachData, 0)

  totalOfIncome = () =>
    this.dataMoneys
      .filter(data => data.type === 'income')
      .map(data => data.money)
      .reduce((sumV, val) => sumV + val, 0)

  totalOfOutComeMoney = () =>
    this.dataMoneys
      .filter(data => data.type === 'outcome')
      .map(data => data.money)
      .reduce((sumV, val) => sumV + val, 0)

  averageTransection = (resultIncome, resultOutcome) =>
    resultIncome - resultOutcome
}

export default HandleMoney
