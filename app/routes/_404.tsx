import type { NotFoundHandler } from 'hono'

const handler: NotFoundHandler = (c) => {
  return c.render(<h1 class="text-center">Not Found!</h1>)
}

export default handler
