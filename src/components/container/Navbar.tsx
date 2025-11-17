export default function Navbar() {
  return (
    <section className='custom-container h-auto w-full py-12 md:py-16'>
      {/* Booky */}
      <div className='mb-20 flex gap-x-11.5'>
        <img
          src='../../../public/icons/01_logo company.svg'
          className='h-33 w-33'
        />
        <div className='self-center text-[25.14px] font-bold'>Booky</div>
      </div>
    </section>
  );
}
