// app/routes/api/hello.ts
import type { LoaderFunction } from '@remix-run/node'

export const loader: LoaderFunction = async () => {
  return new Response('Hello World', {
    status: 200,
    headers: {
      'Content-Type': 'text/plain', // Important for plain text response
    },
  })
}
