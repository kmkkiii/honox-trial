import type { FC } from 'hono/jsx'

const Header: FC = () => {
  return (
    <div class="bg-white max-w-screen-md h-12 m-auto flex justify-center items-center">
      <h1 class="h1 text-xl font-bold p-1 rounded-md hover:bg-slate-100">
        <a class="no-underline" href="/">
          Hono Blog
        </a>
      </h1>
    </div>
  )
}

export default Header
