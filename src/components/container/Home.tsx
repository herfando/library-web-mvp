export default function Home() {
  return (
    <section className='custom-container h-auto w-full'>
      {/* Banner Highlight */}
      <div className='relative mt-16 inline-block md:mt-48'>
        <img
          src='../../public/images/02_img dummy1.png'
          alt='highlight book'
          className='h-[132.67px] w-full rounded-2xl md:h-441 md:rounded-4xl'
        ></img>
        <div
          className='absolute inset-0 top-0 left-0 flex flex-col items-center justify-center text-[82.52px] font-bold text-[#6597E8]'
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
    </section>
  );
}
