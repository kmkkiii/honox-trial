import honox from 'honox/vite'
import { defineConfig } from 'vite'
import ssg from '@hono/vite-ssg'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import devServer from '@hono/vite-dev-server'

const entry = './app/server.ts'

export default defineConfig(() => {
  return {
    plugins: [
      honox(),
      devServer({ entry }),
      ssg({ entry }),
      mdx({
        jsxImportSource: 'hono/jsx',
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      }),
    ],
  }
})
