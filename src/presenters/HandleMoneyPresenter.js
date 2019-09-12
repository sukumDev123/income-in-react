class HandleMoney {
  dataMoneys = []
  constructor(dataMoneys) {
    this.dataMoneys = dataMoneys
  }

  filterDataEachOfYearAndOfMonthOfDate = (year, month, date, type) =>
    this.filterDataEachOfYearAndOfMonth(year, month, type).filter(data =>
      new Date(data.date).getDate()
    )

  filterDataEachOfYearAndOfMonth = (year, month, type) =>
    this.filterDataEachofYear(year, type).filter(
      data => new Date(data.date).getMonth() + 1 === month
    )

  filterDataEachofYear = (year, type) =>
    this.dataMoneys
      .filter(data => new Date(data.date).getFullYear() === year)
      .filter(data => data.type === type)

  totalOfIncomeEachYarAndMonthAndDate = (year, month, date) =>
    this.filterDataEachOfYearAndOfMonthOfDate(year, month, date, 'income')
      .map(data => data.money)
      .reduce((sumV, val) => sumV + val, 0)

  totalOfOutComeEachYearAndMonth = (year, month) =>
    this.filterDataEachOfYearAndOfMonth(year, month, 'outcome')
      .map(data => data.money)
      .reduce((sumV, val) => sumV + val, 0)

  totalOfIncomeEachYearAndMonth = (year, month) =>
    this.filterDataEachOfYearAndOfMonth(year, month, 'income')
      .map(data => data.money)
      .reduce((sumV, val) => sumV + val, 0)

  totalOfOutComeEachYear = year =>
    this.filterDataEachofYear(year, 'outcome')
      .map(data => data.money)
      .reduce((sumMoney, moneyEachData) => sumMoney + moneyEachData, 0)

  totalOfIncomeEachYear = year =>
    this.filterDataEachofYear(year, 'income')
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
