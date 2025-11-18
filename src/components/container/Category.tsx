export default function Category() {
  return (
    <section className='custom-container mt-16 h-auto w-full bg-blue-400 md:mt-48'>
      <div className='text-xs-lh mb-16 font-bold md:mb-32 md:text-[36px]'>
        Book List
      </div>
      <div className='space-y-10'>
        {/* Filter */}
        <h4 className='text-md font-bold'>FILTER</h4>
        <h4 className='text-lg font-bold'>Category</h4>
        {/* checkbox category */}
        <div>
          <label htmlFor='fiction' className='flex items-center gap-8'>
            <input
              id='fiction'
              type='checkbox'
              className='text-md font-medium'
            />
            Fiction
          </label>
        </div>
        {/* Books */}
        <div></div>
      </div>
    </section>
  );
}
