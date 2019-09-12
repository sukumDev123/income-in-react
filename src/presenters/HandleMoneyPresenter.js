class HandleMoney {
  dataMoneys
  constructor(dataMoneys) {
    this.dataMoneys = dataMoneys
  }

  totalOfIncomeEachYearAndMonth = (year, month) =>
    this.filterDataEachOfYearAndOfMonth(year, month, 'income')
      .map(data => data.money)
      .reduce((sumV, val) => sumV + val)

  filterDataEachOfYearAndOfMonth = (year, month, type) =>
    this.filterDataEachofYear(year, type).filter(
      data => new Date(data.date).getMonth() + 1 === month
    )

  filterDataEachofYear = (year, type) =>
    this.dataMoneys
      .filter(data => new Date(data.date).getFullYear() === year)
      .filter(data => data.type === type)

  totalOfOutComeEachYear = year =>
    this.filterDataEachofYear(year, 'outcome')
      .map(data => data.money)
      .reduce((sumMoney, moneyEachData) => sumMoney + moneyEachData)

  totalOfIncomeEachYear = year =>
    this.filterDataEachofYear(year, 'income')
      .map(data => data.money)
      .reduce((sumMoney, moneyEachData) => sumMoney + moneyEachData)

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

  averageTransection() {
    const resultIncome = this.totalOfIncome()
    const resultOutcome = this.totalOfOutComeMoney()
    return resultIncome - resultOutcome
  }
}

export default HandleMoney
