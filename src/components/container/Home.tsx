import { useState } from 'react';
import PaginationBullets from '../ui/paginationBullets';

export default function Home() {
  // code pagination image
  const images = [
    '/images/02_img dummy1.png',
    '/images/02_img dummy2.png',
    '/images/02_img dummy3.png',
  ];
  const [active, setActive] = useState(0);

  // code click image
  const handleClickImage = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  return (
    <section className='custom-container h-auto w-full'>
      {/* Banner Highlight */}
      <div
        onClick={handleClickImage}
        className='relative mt-16 inline-block w-full md:mt-48'
      >
        <img
          src={images[active]}
          alt='highlight book'
          className='h-[132.67px] w-full rounded-2xl md:h-441 md:rounded-4xl'
        ></img>
        <div
          className='pointer-events-none absolute inset-0 top-0 left-0 flex flex-col items-center justify-center text-[82.52px] font-bold text-[#6597E8]'
          style={{
            textShadow: `
              1px 1px 0 #FFFFFF,
              -1px 1px 0 #FFFFFF,
              1px -1px 0 #FFFFFF,
              -1px -1px 0 #FFFFFF,
              2px 2px 0 #FFFFFF,
              -2px 2px 0 #FFFFFF,
              2px -2px 0 #FFFFFF,
              -2px -2px 0 #FFFFFF,
              3px 3px 0 #FFFFFF,
              -3px 3px 0 #FFFFFF,
              3px -3px 0 #FFFFFF,
              -3px -3px 0 #FFFFFF
            `,
          }}
        >
          Welcome to <span>Booky</span>
        </div>
      </div>
      <PaginationBullets
        total={images.length}
        activeIndex={active}
        onChange={setActive}
      />
      {/* Categories */}
    </section>
  );
}
