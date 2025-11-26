import { Star } from 'lucide-react';
import { useCategoriesQuery } from '../../../query/hooks/03_useCategories';
import { useBooksQuery } from '../../../query/hooks/01_useBooks';
import { useState } from 'react';

export default function Category() {
  // Query categories
  const { data: categories } = useCategoriesQuery();

  // Query books
  const { data: books } = useBooksQuery();
  const allBooks = books ?? [];

  // === FILTER STATES ===
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  // === HANDLE CATEGORY CLICK ===
  const toggleCategory = (id: number) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // === HANDLE RATING CLICK ===
  const toggleRating = (star: number) => {
    setSelectedRatings((prev) =>
      prev.includes(star) ? prev.filter((x) => x !== star) : [...prev, star]
    );
  };

  // === APPLY FILTERS ===
  const filteredBooks = allBooks.filter((b) => {
    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(b.categoryId);

    const matchRating =
      selectedRatings.length === 0 ||
      selectedRatings.includes(Math.round(b.rating));

    return matchCategory && matchRating;
  });

  return (
    <section className='custom-container mt-16 h-auto w-full md:mt-48'>
      <div>
        <div className='text-xs-lh mb-16 font-bold md:mb-32 md:text-[36px]'>
          Book List
        </div>

        {/* WRAPPER FLEX UNTUK MEMBUAT KIRI - KANAN */}
        <div className='md:flex md:items-start md:gap-32'>
          {/* ----------------- FILTER KIRI ----------------- */}
          <div className='mb-60 w-226'>
            <h4 className='text-md font-bold'>FILTER</h4>
            <div className='hidden md:flex'>
              <div className='space-y-10'>
                <h4 className='text-lg font-bold'>Category</h4>

                <div className='space-y-4'>
                  {categories?.map((cat) => (
                    <label key={cat.id} className='flex items-center gap-8'>
                      <input
                        checked={selectedCategories.includes(cat.id)}
                        onChange={() => toggleCategory(cat.id)}
                        type='checkbox'
                        className='text-md h-14 w-14 self-center rounded-2xl font-medium'
                      />
                      {cat.name}
                    </label>
                  ))}
                </div>

                <div className='space-y-10'>
                  <h4 className='text-lg font-bold'>Rating</h4>

                  {[5, 4, 3].map((star) => (
                    <label htmlFor='star 5' className='flex items-center gap-8'>
                      <input
                        type='checkbox'
                        checked={selectedRatings.includes(star)}
                        onChange={() => toggleRating(star)}
                        className='text-md h-14 w-14 self-center rounded-2xl font-medium'
                      />
                      <Star className='text-md h-[16.35px] w-[17.12px] self-center fill-[#FFAB0D] text-[#FFAB0D]' />
                      {star}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ----------------- BOOK DISPLAY KANAN ----------------- */}
          <div className='grid w-full grid-cols-2 justify-center gap-6 md:grid-cols-3 lg:grid-cols-4'>
            {filteredBooks.map((b) => (
              <div
                key={b.id}
                className='h-370 w-172 md:mb-118 md:h-439 md:w-204.75 md:space-x-16'
              >
                <img
                  className='h-258 w-172 rounded-t-2xl md:h-[307.12px] md:w-[204.8px]'
                  src={b.coverImage || '/placeholder.png'}
                  alt={b.title}
                />
                <div className='space-y-4 p-12 md:p-16'>
                  <h4 className='text-sm font-bold md:text-lg'>{b.title}</h4>
                  <p className='md:text-md text-sm font-medium'>
                    {b.Author?.name}
                  </p>
                  <div className='flex items-center space-x-3'>
                    <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
                    <span className='md:text-md text-sm font-semibold'>
                      {b.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* END WRAPPER FLEX */}

        {filteredBooks.length === 0 && (
          <p className='text-md mt-20'>No books match the filter.</p>
        )}
      </div>
    </section>
  );
}
