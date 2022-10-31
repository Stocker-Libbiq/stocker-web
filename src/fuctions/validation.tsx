function ValidationNumber (chain: string): boolean {
  const regex = '/^[0-9]+$/'
  if (chain.match(regex) != null){
    return true
  } else {
    return false
  }
}

export default ValidationNumber
