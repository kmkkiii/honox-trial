import { createRoute } from 'honox/factory'

export default createRoute((c) => {
  return c.render(
    <div>
      <h2 class="h2">Hello👋</h2>
      <ul class="list-disc">
        <li>
          <a href="/posts" class="underline">
            Posts
          </a>
        </li>
      </ul>
    </div>
  )
})
