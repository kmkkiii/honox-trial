import { createRoute } from 'honox/factory'

export default createRoute((c) => {
  return c.render(
    <div>
      <p class="font-bold">About</p>

      <p>Blog created by HonoX + MDX + TailwindCSS</p>
    </div>,
    { title: 'About' }
  )
})
