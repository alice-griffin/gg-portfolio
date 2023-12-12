'use client';
import '@fortawesome/fontawesome-svg-core/styles.css';
import React, { useState } from 'react';
import "yet-another-react-lightbox/styles.css"; 
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Lightbox from 'yet-another-react-lightbox';


export default function Home() {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(-1);

    const slides = [
      {
        src: "../../image0.jpeg"
      },
      {
        src: "../../image1.jpeg"
      },
      {
        src: "../../image2.jpeg"
      },
      {
        src: "../../image3.jpeg"
      },
      {
        src: "../../image4.jpeg"
      },
      {
        src: "../../image5.jpeg"
      },
      {
        src: "../../image6.jpeg"
      },
      {
        src: "../../image7.jpeg"
      },
      {
        src: "../../image8.jpeg"
      },
      {
        src: "../../image9.jpeg"
      },
      {
        src: "../../image10.jpeg"
      },
      {
        src: "../../image11.jpeg"
      },
      {
        src: "../../image12.jpeg"
      },
      {
        src: "../../image13.jpeg"
      },
      {
        src: "../../image14.jpeg"
      },
      {
        src: "../../image15.jpeg"
      },
    ]

  return (
    <main id="mainDiv">
      <div className="gap-1 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-1">
        {slides.map((img, index) => {
          return (
            <div key={index}>
              <img src={img.src} onClick={() => {setOpen(true); setIndex(index)}} />
            </div>
          );
        })}
      </div>
      <Lightbox
        open={open && index >= 0}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        showPrevNext={false}
        slides={slides}
        index={index}
     />
    </main>
  )
}