export default function currenciesCodeTransform(curr) {
  switch (curr) {
    case 'clf':
      return 'clp'
    case 'cnh':
      return 'cny'
    case 'cuc':
      return 'cup'
    case 'ggp':
      return 'gbp'
    case 'jep':
      return 'gbp'
    case 'lsl':
      return 'lrd'
    case 'mru':
      return 'mur'
    case 'pab':
      return 'pen'
    case 'ssp':
      return 'std'
    case 'sdg':
      return 'std'
    case 'stn':
      return 'svc'
    case 'tmt':
      return 'tjs'
    case 'ves':
      return 'vef'
    case 'zwl':
      return 'zmv'
    case 'imp':
      return 'inr'
    default:
      return curr
  }
}
