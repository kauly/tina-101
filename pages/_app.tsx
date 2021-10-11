import 'tailwindcss/tailwind.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import dynamic from 'next/dynamic';
import { TinaEditProvider } from 'tinacms/dist/edit-state';
const TinaCMS = dynamic(() => import('tinacms'), { ssr: false });

const App = ({ Component, pageProps }) => {
  return (
    <>
      <TinaEditProvider
        editMode={
          <TinaCMS
            cmsCallback={(cms) => {
              import('react-tinacms-editor').then((field) => {
                cms.plugins.add(field.MarkdownFieldPlugin);
              });
            }}
            {...pageProps}
          >
            {(livePageProps) => <Component {...livePageProps} />}
          </TinaCMS>
        }
      >
        <Component {...pageProps} />
      </TinaEditProvider>
    </>
  );
};

export default App;
