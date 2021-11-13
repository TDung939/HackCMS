import { NextSeo } from 'next-seo';

const Seo = (props) => {
    const {title, content} = props;
    return (
        <NextSeo
        title={title}
        description={content}
        canonical="https://vinuniresearchbootcamp.org"
        openGraph={{
          url: 'https://vinuniresearchbootcamp.org',
          title: `${title}`,
          description: `${content}`,
          images: [
            {
              url: `${'/cover.png'}`,
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: `${'/cover.png'}`,
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
            },
            { url: `${'/cover.png'}` },
            { url: `${'/cover.png'}` },
          ],
          site_name: 'VinUni Research Bootcamp 2021',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
    />
    )
}
export default Seo;