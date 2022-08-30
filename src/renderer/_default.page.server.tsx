import React from "react";
import ReactDOMServer from "react-dom/server";
import {
  escapeInject,
  dangerouslySkipEscape,
  PageContextBuiltIn,
} from "vite-plugin-ssr";

export const passToClient = ["pageProps"];

export const render = async (context: PageContext & PageContextBuiltIn) => {
  let pageHtml: string = "";

  if (context.Page) {
    const { Page } = context;
    const page = (
      <React.StrictMode>
        <Page />
      </React.StrictMode>
    );

    pageHtml = ReactDOMServer.renderToString(page);
  }

  const { documentProps } = context.exports;
  const title = (documentProps && documentProps.title) || "Vibe Role Player";
  const desc = (documentProps && documentProps.description) || "";

  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
};
