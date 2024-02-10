import { Style, css } from 'hono/css'
import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'
import Header from '../components/header'

const bodyClass = css`
  background-color: rgb(229 231 235);
  padding: 0;
  margin: 0;
`

const containerClass = css`
  height: 100vh;
  max-width: 760px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: white;

  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 640px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <Script src="/app/client.ts" />
        <Style />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css"
        ></link>
      </head>
      <body class={bodyClass}>
        <div class={containerClass}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
})
