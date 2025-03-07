import Head from 'next/head';
import { useRouter } from 'next/router';

// !STARTERCONF Change these default meta
const defaultMeta = {
  title: 'Celestia Node API Playground',
  siteName: 'Celestia Node API Playground',
  description:
    'The Celestia Node API is the collection of RPC methods that can be used to interact with the services provided by Celestia Data Availability Nodes.',
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  url: 'https://jcstein.github.io/node-rpc-docs-1',
  type: 'website',
  robots: 'follow, index',
  /**
   * No need to be filled, will be populated with openGraph function
   * If you wish to use a normal image, just specify the path below
   */
  image: 'https://raw.githubusercontent.com/celestiaorg/docs/main/static/img/celestia-doc.png',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  // Use siteName if there is templateTitle
  // but show full title if there is none
  // !STARTERCONF Follow config for opengraph, by deploying one on https://github.com/theodorusclarence/og
  // ? Uncomment code below if you want to use default open graph
  // meta['image'] = openGraph({
  //   description: meta.description,
  //   siteName: props.templateTitle ? meta.siteName : meta.title,
  //   templateTitle: props.templateTitle,
  // });

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@CelestiaOrg' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          {/* // !STARTERCONF Remove or change to your name */}
          <meta
            name='author'
            property='article:author'
            content='Celestia Labs'
          />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-config' content='/node-rpc-docs-1/favicon/browserconfig.xml' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  );
}

// !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
// ! then replace the whole /public/favicon folder and favicon.ico
// done
const favicons: Array<React.ComponentPropsWithoutRef<'link'>> = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/node-rpc-docs-1/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/node-rpc-docs-1/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/node-rpc-docs-1/favicon/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/node-rpc-docs-1/favicon/site.webmanifest' },
  {
    rel: 'mask-icon',
    href: '/node-rpc-docs-1/favicon/safari-pinned-tab.svg',
    color: '#00e887',
  },
  { rel: 'shortcut icon', href: '/node-rpc-docs-1/favicon/favicon.ico' },
];
