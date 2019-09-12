class AuthPresenter {
  /**
   *
   * @param {Array<String>} inputFill type is Array string
   * @returns Boolean
   */
  checkValueMustNotEmpty(inputFill) {
    return inputFill.filter(val => val !== '').length === inputFill.length
  }
}

export default AuthPresenter
