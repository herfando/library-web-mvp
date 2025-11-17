export default function Footer() {
  return (
    <section className='custom-container my-80 flex h-auto w-full flex-col place-content-center items-center justify-center'>
      {/* Booky */}
      <div className='mb-22 flex items-center gap-x-15'>
        <img
          src='../../../public/icons/01_logo company.svg'
          className='h-32 w-32 md:h-42 md:w-42'
        />
        <div className='text-lg-lh self-center font-bold'>Booky</div>
      </div>
      {/* Paragraf */}
      <p className='md:text-md mb-40 text-sm font-semibold'>
        Discover inspiring stories & timeless knowledge, ready to borrow
        anytime. Explore online or visit our nearest library branch.
      </p>

      <h3 className='md:text-md mb-20 text-sm font-bold'>
        Follow on Social Media
      </h3>
      {/* Sosmed */}
      <div>
        {/* facebook */}
        <div className='flex h-40 w-40 items-center justify-center rounded-full border border-[#D5D7DA]'>
          <img src='../../icons/03_fb.png' alt='facebook' />
        </div>
      </div>
    </section>
  );
}
