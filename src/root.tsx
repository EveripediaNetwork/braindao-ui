import { component$ } from "@builder.io/qwik";
import {
  QwikCity,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RTKXQGKHV6"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RTKXQGKHV6');
        </script>
        <script
          defer
          src="https://unpkg.com/custom-cursor@latest/dist/cursor.min.js"
        ></script>
        <script
          dangerouslySetInnerHTML={`
            document.addEventListener('DOMContentLoaded', () => {
              new window['Cursor']({})
            })`}
        />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCity>
  );
});
