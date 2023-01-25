import React from "https://esm.sh/react@18.2.0";

export default function Home() {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no" />
        <title>deno-react</title>
        <link rel="preload" href="/index.css" as="style"></link>
        <link rel="stylesheet" media="all" href="/index.css" type="text/css"></link>
      </head>
      <body>
        <header>
          <ul>
            <li><a href="/" className="active">HOME</a></li>
            <li><a href="https://futurist.city">FUTURIST.CITY <span className="arrow">↗️</span></a></li>
            <li><a href="https://github.com/jordanreger/deno-react">SOURCE <span className="arrow">↗️</span></a></li>
          </ul>
        </header>
        <main>
          <article className="gradient">
            <div className="title">deno-react</div>
            <div className="description">a <i>very</i> minimalist react boilerplate.</div>
          </article>
          <article>
            <div className="tag">GETTING STARTED</div>
            <div className="body">
              all you have to do is add your pages in the <code>/pages</code> folder and run <code>deno task start</code>! make sure not to remove <code>/pages/_404.tsx</code>, otherwise you'll start returning <code>Internal Server Error</code> - you can style it however you'd like though!
            </div>
          </article>
          <article>
            <div className="tag">IMAGE TEST</div>
            <div className="body">
              This is an image. Woah! This is to showcase the server's abilities to serve from the <code>static</code> directory.
              <br/>
              <img src="/deno_paper.png" />
            </div>
          </article>
        </main>
      </body>
    </>
  )
}