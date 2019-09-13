class AuthPresenter {
  KEY = 'AUTH'
  /**
   *
   * @param {Array<String>} inputFill type is Array string
   * @returns Boolean
   */
  checkValueMustNotEmpty(inputFill) {
    return inputFill.filter(val => val !== '').length === inputFill.length
  }

  logInUser(idUser) {
    localStorage.setItem(this.KEY, idUser)
  }
  getUser() {}
}

export default AuthPresenter
