export default function Navbar() {
  return (
    <section className='custom-container h-auto w-full'>
      {/* Booky */}
      <div className='my-19 flex gap-x-15'>
        <img
          src='../../../public/icons/01_logo company.svg'
          className='h-42 w-42'
        />
        <div className='text-lg-lh self-center font-bold'>Booky</div>
      </div>
    </section>
  );
}
