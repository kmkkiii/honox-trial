import honox from 'honox/vite'
import { defineConfig } from 'vite'
import ssg from '@hono/vite-ssg'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import devServer from '@hono/vite-dev-server'

const entry = './app/server.ts'

export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      build: {
        rollupOptions: {
          input: ['/app/style.css'],
          output: {
            assetFileNames: 'static/assets/[name].[ext]',
          },
        },
      },
    }
  } else {
    return {
      plugins: [
        honox(),
        // devServer({ entry }),
        // ssg({ entry }),
        mdx({
          jsxImportSource: 'hono/jsx',
          remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
          rehypePlugins: [rehypeHighlight],
        }),
      ],
    }
  }
})
