import { createRoute } from 'honox/factory'

export default createRoute((c) => {
  return c.render(
    <div>
      <h1>Hello👋</h1>
      <ul>
        <li>
          <a href="/posts">Posts</a>
        </li>
      </ul>
    </div>
  )
})
