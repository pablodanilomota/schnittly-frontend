import axios from 'axios'
import { useState } from 'react'

/**
 * API url.
 */
const baseURL = 'https://sch-ly.herokuapp.com/short'

/**
 * Hook.
 */
export const useShortner = () => {
  /**
   * States.
   */
  const [isError, setIsError] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [urlToShort, setUrlToShort] = useState('')
  const [shortnedUrl, setShortnedUrl] = useState('')

  /**
   * Functions.
   */
  const handleOnChange = (url: string) => {
    setIsError(false)
    setShortnedUrl('')
    setUrlToShort(url)
  }

  const handleSubmit = async () => {
    try {
      setShortnedUrl('')
      setIsError(false)
      setLoading(true)

      const url = await axios.post(baseURL, {
        url: urlToShort
      })

      setShortnedUrl(`${baseURL}/${url.data}`)
      setLoading(false)
    } catch (error) {
      setIsError(true)
      setLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shortnedUrl)
  }

  return {
    isError,
    isLoading,
    handleCopy,
    urlToShort,
    shortnedUrl,
    handleSubmit,
    handleOnChange
  }
}
