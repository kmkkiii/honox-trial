import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'
import Header from '../../components/header'
import Footer from '../../components/footer'

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <Script src="/app/client.ts" />
        {import.meta.env.PROD ? (
          <link rel="stylesheet" href="/static/assets/style.css" />
        ) : (
          <link rel="stylesheet" href="/app/style.css" />
        )}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css"
        ></link>
      </head>
      <body class="bg-slate-300">
        <Header />
        <div class="bg-white max-w-screen-md h-full overflow-scroll m-auto px-8 pb-12">
          <article className="prose">{children}</article>
        </div>
        <Footer />
      </body>
    </html>
  )
})
