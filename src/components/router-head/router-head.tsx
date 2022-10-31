import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>BrainDAO - Building a smarter future through the IQ token.</title>

      <link rel="canonical" href={loc.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
        rel="stylesheet"
      />

      {/* <!-- HTML Meta Tags --> */}
      <meta
        name="description"
        content="Join the mission to expand the scope of human knowledge with BrainDAO, the governing DAO powering the IQ ecosystem."
      />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://braindao.org" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="BrainDAO - Building a smarter future through the IQ token."
      />
      <meta
        property="og:description"
        content="Join the mission to expand the scope of human knowledge with BrainDAO, the governing DAO powering the IQ ecosystem."
      />
      <meta
        property="og:image"
        content="https://braindao.org/images/og-image.png"
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="braindao.org" />
      <meta property="twitter:url" content="https://braindao.org" />
      <meta
        name="twitter:title"
        content="BrainDAO - Building a smarter future through the IQ token."
      />
      <meta
        name="twitter:description"
        content="Join the mission to expand the scope of human knowledge with BrainDAO, the governing DAO powering the IQ ecosystem."
      />
      <meta
        name="twitter:image"
        content="https://braindao.org/images/og-image.png"
      />

      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
