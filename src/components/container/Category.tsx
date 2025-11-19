import { Star } from 'lucide-react';

export default function Category() {
  return (
    <section className='custom-container mt-16 h-auto w-full bg-blue-400 md:mt-48'>
      <div>
        <div className='text-xs-lh mb-16 font-bold md:mb-32 md:text-[36px]'>
          Book List
        </div>

        {/* WRAPPER FLEX UNTUK MEMBUAT KIRI - KANAN */}
        <div className='md:flex md:items-start md:gap-32'>
          {/* ----------------- FILTER KIRI ----------------- */}
          <div className='w-226'>
            <h4 className='text-md font-bold'>FILTER</h4>
            <div className='hidden md:flex'>
              <div className='space-y-10'>
                <h4 className='text-lg font-bold'>Category</h4>

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

                <div className='space-y-10'>
                  <h4 className='text-lg font-bold'>Rating</h4>
                  <div>
                    <label
                      htmlFor='fiction'
                      className='flex items-center gap-8'
                    >
                      <input
                        id='fiction'
                        type='checkbox'
                        className='text-md h-14 w-14 self-center rounded-2xl font-medium'
                      />
                      <Star className='text-md h-[16.35px] w-[17.12px] self-center fill-[#FFAB0D] text-[#FFAB0D]' />
                      5
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------- BOOK DISPLAY KANAN ----------------- */}
          <div>
            <div className='h-370 w-172 md:mb-118 md:h-468 md:w-224 md:space-y-16 md:space-x-16'>
              <img
                className='h-258 w-172 rounded-t-2xl md:h-336 md:w-224'
                src='../../images/04_img dummy2 recommendation.png'
                alt='related books'
              />
              <div className='space-y-4 p-12 md:p-16'>
                <h4 className='text-sm font-bold md:text-lg'>Book Name</h4>
                <p className='md:text-md text-sm font-medium'>Author name</p>
                <div className='flex items-center space-x-3'>
                  <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
                  <span className='md:text-md text-sm font-semibold'>4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END WRAPPER FLEX */}
      </div>
    </section>
  );
}
