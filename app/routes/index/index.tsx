import { createRoute } from 'honox/factory'
import { Meta } from '../../types'

export default createRoute((c) => {
  const posts = import.meta.glob<{ frontmatter: Meta }>('../posts/*.mdx', {
    eager: true,
  })

  return c.render(
    <div>
      <h2 class="h2 text-lg text-center">Hello👋</h2>
      <ul class="list-disc list-inside">
        <li>
          <a href="/about" class="underline">
            About
          </a>
        </li>
        <li>Posts</li>
        <ul class="list-disc list-inside pl-5">
          {Object.entries(posts).map(([id, module]) => {
            if (module.frontmatter) {
              return (
                <li>
                  <a
                    href={`posts/${id.replace(/\.mdx$/, '')}`}
                    class="underline"
                  >
                    {module.frontmatter.title}
                  </a>
                </li>
              )
            }
          })}
        </ul>
      </ul>
    </div>,
    { title: 'Home' }
  )
})
