import { Fragment, useState, useEffect } from 'react';
import Head from 'next/head';
import Testimonials from './component/Home/Testimonials';
import ContactMessage from './component/shared/ContactMessage';
import Services from './component/shared/Services';
import Gallery from './component/shared/Gallery';
import BlurImage from '../src/components/BlurImage';
import Map from './component/shared/Map';
// import useIsInViewport from 'use-is-in-viewport'
import GetQuote from './component/shared/GetQuote';

export default function Home() {
  // const [isInViewport, targetRef] = useIsInViewport({ threshold: 50 });
  const [showMap, setShowMap] = useState(false);

  // useEffect(() => {
  //   if (isInViewport && !showMap) {
  //     setShowMap(true);
  //   }
  // }, [isInViewport]);

  return (
    <Fragment>
      <div className="bg-white">
        <div className="mt-0 md:mt-1 w-full items-center flex flex-row" style={{ background: '#fbddb6' }}>
          <div className="hidden md:inline-block w-1/2 px-32 mx-auto text-left leading10 flex justify-center flex-col text-gray-800">
            <div className="flex flex-col align-center">
              <div className="text-6xl quicks ">Ms.Elegant</div>
              <div className="text-5xl quicks mt-10">A Professional Makeup Artist in Coimbatore </div>
              <div className="text-2xl quicks mt-16">We offer Professional Makeup services to all its client with 100% Satisfaction. Contact us to look Glorious on your Special Day!</div>
            </div>
          </div>
          <BlurImage src='/images/2.jpg' className="inline-block homeImg w-full md:w-1/2" />
        </div>
        <Services />
        <Gallery/>
        <Testimonials />
        <GetQuote/>
        <div>
          <div className="py-10 text-3xl sm:text-5xl quicks font-extrabold text-center text-gray-800">
            Contact us
			    </div>
          <div className="w-full p-10 pb-10 md:pb-20 md:px-32 md:mx-2">
            <div className="flex flex-col md:flex-row">
              <ContactMessage />
              {/* {showMap ? <Map className="w-full h-64 md:h-auto mapBg rounded" /> : <div className="w-full mapBg rounded"/>} */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
