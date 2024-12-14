import { $TSFixMe } from '../../../types'

export const setCookie = (
  name: string,
  value: string | number | boolean | null,
  props: $TSFixMe = {}
) => {
  const cookieOption: $TSFixMe = props

  if (typeof props.expires === 'number' && props.expires) {
    const date = new Date()
    date.setTime(date.getTime() + props.expires * 1000)
    cookieOption.expires = date
  }

  if (props.expires && props.expires.toUTCString) {
    cookieOption.expires = props.expires.toUTCString()
  }

  const cooikieValue = value ? encodeURIComponent(value) : null
  let updatedCookie = `${name}=${cooikieValue}`
  Object.keys(cookieOption).forEach((propName) => {
    updatedCookie += `; ${propName}`

    const propValue = cookieOption[propName]

    if (propValue !== true) {
      updatedCookie += `=${propValue}`
    }
  })

  document.cookie = updatedCookie
}
