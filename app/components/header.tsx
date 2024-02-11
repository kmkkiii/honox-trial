import type { FC } from 'hono/jsx'

const Header: FC = () => {
  return (
    <div class="bg-white h-12 flex items-center">
      <h1 class="h1 text-2xl font-bold p-1 rounded-md hover:bg-slate-100">
        <a class="no-underline" href="/">
          Hono Blog
        </a>
      </h1>
    </div>
  )
}

export default Header
