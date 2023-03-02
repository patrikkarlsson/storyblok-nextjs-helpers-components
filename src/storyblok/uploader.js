import axios from 'axios'
import rateLimit from 'axios-rate-limit'

const uploader = () => {
  const { STORYBLOK_OAUTH_TOKEN, STORYBLOK_SPACE_ID } = process.env
  const BASE_URL = `https://mapi.storyblok.com/v1/spaces/${STORYBLOK_SPACE_ID}`

  const http = rateLimit(axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: STORYBLOK_OAUTH_TOKEN
    }
  }), { maxRequests: 3, perMilliseconds: 1000, maxRPS: 3 })

  return http
}

export default uploader