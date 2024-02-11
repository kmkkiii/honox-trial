import { jsxRenderer } from 'hono/jsx-renderer'
import Header from '../../components/header'
import Footer from '../../components/footer'

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={`${title}`} />
        <meta property="og:site_name" content="honox sample blog" />
        <meta property="og:locale" content="ja_JP" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@kmkkiii" />
        <title>{title}</title>
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
        <div class="bg-white max-w-screen-md min-h-screen m-auto px-8">
          <Header />
          <article className="prose max-w-none pb-8">{children}</article>
          <Footer />
        </div>
      </body>
    </html>
  )
})
