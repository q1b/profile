import { v4 as uuid } from 'uuid'

const target = 'https://github.com/login/oauth/authorize'

const clientId = import.meta.env.VITE_CLIENT_ID

export async function get() {
  const sessionId = uuid()

  return {
    status: 302,
    headers: {
      location: `${target}?client_id=${clientId}&state=${sessionId}`
    }
  }
}