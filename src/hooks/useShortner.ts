import axios from 'axios'
import { useState } from 'react'

export const useShortner = () => {
  /**
   * States.
   */
  const [isLoading, setLoading] = useState(false)
  const [urlToShort, setUrlToShort] = useState('')
  const [shortnedUrl, setShortnedUrl] = useState('')
  const [isError, setIsError] = useState(false)

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

      const url = await axios.post('https://sch-ly.herokuapp.com/short', {
        url: urlToShort
      })

      setShortnedUrl(url.data)
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
