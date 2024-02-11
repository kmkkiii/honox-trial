import { createRoute } from 'honox/factory'
import { Meta } from '../../types'

export default createRoute((c) => {
  const posts = import.meta.glob<{ frontmatter: Meta }>('./*.mdx', {
    eager: true,
  })

  return c.render(
    <div>
      <h2>Posts</h2>
      <p>Here are some posts:</p>
      <ul class="list-disc">
        {Object.entries(posts).map(([id, module]) => {
          if (module.frontmatter) {
            return (
              <li>
                <a href={`posts/${id.replace(/\.mdx$/, '')}`} class="underline">
                  {module.frontmatter.title}
                </a>
              </li>
            )
          }
        })}
      </ul>
    </div>,
    { title: 'Posts' }
  )
})
