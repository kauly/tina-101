import { useMemo } from 'react';
import { getStaticPropsForTina } from 'tinacms';
import dynamic from 'next/dynamic';
import Markdown from 'react-markdown';

import { TUIData } from '../typings/app';
const LocationMap = dynamic(() => import('../components/location'), {
  ssr: false
});

const dateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: false
};

function HomePage({ data }) {
  const { title, subTitle, evDate, description, address, mapProps }: TUIData =
    data.getPageDocument.data;

  const parsedDate = useMemo(() => {
    if (evDate) {
      const date = new Date(parseInt(evDate));
      return new Intl.DateTimeFormat('pt-BR', dateOptions).format(date);
    }
  }, [evDate]);

  const parsedMap = useMemo(() => {
    if (mapProps) {
      return {
        latitude: parseFloat(mapProps.lat),
        longitude: parseFloat(mapProps.lng),
        zoom: parseInt(mapProps.zoom)
      };
    }
  }, [mapProps]);

  return (
    <div className="h-screen w-full flex flex-col items-center bg-main-pattern">
      <div className="w-full p-4 text-center">
        <h1 className="text-3xl font-bold tracking-wide block">{title}</h1>
        <h3 className="text-2xl font-medium tracking-wide block uppercase">
          {subTitle}
        </h3>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 m-4 shadow">
        <h3 className="text-2xl font-medium tracking-wide block">
          Data: {parsedDate}
        </h3>
        <h3 className="text-2xl font-medium tracking-wide block">
          Local: {address}
        </h3>
        <h3 className="text-2xl font-medium tracking-wide block">
          <Markdown>{description}</Markdown>
        </h3>
      </div>
      <div className="relative w-full h-full bg-red-200">
        {parsedMap ? <LocationMap {...parsedMap} /> : undefined}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const tinaProps = await getStaticPropsForTina({
    query: `
      query GetPageDocument($relativePath: String!) {
          getPageDocument(relativePath: $relativePath) {
            data {
              title
              subTitle
              evDate
              address
              description
              mapProps {
                lng
                lat
                zoom
              }
            }
          }
      }
    `,
    variables: {
      relativePath: 'home.md'
    }
  });
  return {
    props: {
      ...tinaProps
    }
  };
}

export default HomePage;
