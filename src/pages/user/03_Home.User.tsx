'use client';
import { useEffect, useState } from 'react';
import PaginationBullets from '../../components/ui/paginationBullets';
import { Star } from 'lucide-react';
import { Button } from '../../components/ui/button';
import {
  useRecommendationsQuery,
  useBooksQuery,
} from '../../query/hooks/01_useBooks';
import { useCategoriesQuery } from '../../query/hooks/03_useCategories';
import { useAuthorsQuery } from '../../query/hooks/02_useAuthors';
import type { Book } from '../../query/types/01_booksTypes';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HomeUser() {
  //#region - 1.Pagination Query
  const [active, setActive] = useState(0);
  const [page, setPage] = useState(1);

  const {
    data: books,
    isLoading: isBooksLoading,
    isError: isBooksError,
  } = useBooksQuery(page, 20);

  useEffect(() => {
    if (!books || books.length === 0) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % books.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [books]);

  const handleClickImage = () => {
    if (!books || books.length === 0) return;
    setActive((prev) => (prev + 1) % books.length);
  };

  const handleChangePage = (index: number) => {
    setActive(index);
    setPage(index + 1);
  };
  //#endregion

  //#region - 2.Categories Query
  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useCategoriesQuery();
  //#endregion

  const CATEGORY_ICONS: Record<number, string> = {
    1: '/images/03_fiksi.png',
    2: '/images/04_non-fiction.png',
    3: '/images/05_finance.png',
    4: '/images/06_self-improve.png',
    5: '/images/07_science.png',
    6: '/images/08_education.png',
  };

  //#region - 3.Recommended Query + Load More + Search
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || '';

  const [recPage, setRecPage] = useState(1);
  const [recList, setRecList] = useState<Book[]>([]);
  const [visibleRec, setVisibleRec] = useState(10);

  const filteredBooks = recList.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setRecPage(1);
    setRecList([]);
    setVisibleRec(10); // reset saat search berubah
  }, [search]);

  const {
    data: recommendedBooks,
    isLoading,
    isError,
  } = useRecommendationsQuery(recPage, 50);

  useEffect(() => {
    if (recommendedBooks && recommendedBooks.length > 0) {
      setRecList((prev) => [...prev, ...recommendedBooks]);
    }
  }, [recommendedBooks]);
  //#endregion

  //#region - 4.Author Query
  const {
    data: authorBooks,
    isLoading: isAuthorLoading,
    isError: isAuthorError,
  } = useAuthorsQuery();

  const [visibleAuthors, setVisibleAuthors] = useState(8); // 🔥 NEW
  //#endregion

  //#region - navigate
  const navigate = useNavigate();
  //#endregion

  return (
    <section className='custom-container h-auto w-full'>
      {/* 1. Banner Highlight */}
      {isBooksLoading && <p>Loading books...</p>}
      {isBooksError && <p>Error loading books...</p>}

      {books && books.length > 0 && (
        <>
          <div
            onClick={handleClickImage}
            className='relative mt-16 inline-block w-full md:mt-48'
          >
            <img
              src={books[active].coverImage || '/images/14_bannerhome.png'}
              alt={books[active].title}
              className='h-132 w-full rounded-2xl object-contain hover:cursor-pointer md:h-441 md:rounded-4xl'
              onClick={() => navigate(`/detail/${books[active].id}`)}
            />
          </div>

          <PaginationBullets
            total={books.length}
            activeIndex={active}
            onChange={handleChangePage}
          />
        </>
      )}

      {/* 2. Categories */}
      <div className='mt-24 flex flex-wrap justify-between md:mt-48'>
        {isCategoriesLoading && <p>Loading categories...</p>}
        {isCategoriesError && <p>Error loading categories</p>}
        {categories?.slice(0, 6).map((cat) => (
          <motion.div
            key={cat.id}
            className='flex h-132 w-[112.33px] basis-1/3 flex-col items-center justify-center hover:cursor-pointer md:h-130 md:w-[186.67px] md:flex-auto'
            onClick={() => navigate(`/category/${cat.id}`)}
            whileHover={{ y: [0, 20, 0, 20, 0] }}
            transition={{ duration: 1.5, ease: 'easeInOut', repeat: Infinity }}
          >
            <div>
              <div className='flex h-56 w-[96.33px] items-center justify-center rounded-2xl bg-[#E0ECFF] md:h-64 md:w-162'>
                <img
                  src={CATEGORY_ICONS[cat.id] ?? '/images/default_cat.png'}
                  alt={cat.name}
                />
              </div>
              <h3 className='text-md mt-12 self-start font-semibold'>
                {cat.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. Recommendation */}
      <div className='mt-24 w-full space-x-10 md:mt-48'>
        <h2 className='text-xs-lh mb-20 font-bold md:mb-40 md:text-[36px]'>
          Recommendation
        </h2>

        {isLoading && <p>Loading recommendations...</p>}
        {isError && <p>Error loading recommendations</p>}

        <div className='flex w-full flex-wrap items-center justify-between space-y-16 md:space-y-20'>
          {filteredBooks?.slice(0, visibleRec).map((book) => (
            <div
              key={book.id}
              onClick={() => navigate(`/detail/${book.id}`)}
              className='w-172 basis-1/2 gap-x-16 hover:cursor-pointer md:w-224 md:flex-auto md:gap-x-20'
            >
              <motion.img
                src={
                  book.coverImage || '/images/09_img dummy2 recommendation.png'
                }
                alt={book.title}
                className='h-258 w-172 rounded-t-2xl border border-[#D5D7DA] object-cover md:h-336 md:w-224'
                whileHover={{ scale: 1.1, rotate: [0, 4, 0, 4, 0] }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
              <div className='space-y-4 p-16'>
                <p className='md:text-md h-96 text-sm font-bold md:h-72'>
                  {book.title}
                </p>
                <p className='md:text-md w-full text-sm whitespace-nowrap'>
                  {book.Author?.name}
                </p>
                <div className='flex space-x-5.5'>
                  <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
                  <p>{book.rating.toFixed(1)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleRec < filteredBooks.length && (
          <div className='flex items-center justify-center pb-24 md:pb-48'>
            <Button
              onClick={() => setVisibleRec((prev) => prev + 10)}
              className='md:text-md h-40 w-150 rounded-full border border-[#D5D7DA] bg-white text-sm font-bold text-[#0A0D12] hover:cursor-pointer hover:text-white md:h-48 md:w-200'
            >
              Load more
            </Button>
          </div>
        )}

        <div className='mb-24 border-b border-[#D5D7DA] md:mb-48'></div>
      </div>

      {/* Popular Authors */}
      <div>
        <h2 className='text-xs-lh mb-24 font-bold md:mb-40 md:text-[36px]'>
          Popular Authors
        </h2>

        <div className='mb-116 flex flex-wrap justify-between'>
          {isAuthorLoading && <p>Loading Author...</p>}
          {isAuthorError && <p>Error loading Author</p>}

          {authorBooks?.slice(0, visibleAuthors).map((author) => (
            <motion.div
              key={author.id}
              className='flex h-84 w-361 flex-wrap items-center p-12 hover:cursor-pointer md:h-113 md:w-285 md:p-16'
              onClick={() => navigate(`/author/${author.id}`)}
              whileHover={{ y: [0, 20, 0, 20, 0] }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            >
              <motion.img
                src='../../images/10_img dummy3 author.png'
                alt='author'
                className='h-60 w-60 md:h-81 md:w-81'
              />
              <div className='ml-16'>
                <p className='font-bold'>{author.name}</p>
                <div className='flex'>
                  <img src='../../images/12_img dummy5 books.png' alt='books' />
                  <p className='ml-5'>{author.countByAuthor || 0} books</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleAuthors < (authorBooks?.length || 0) && (
          <div className='flex items-center justify-center pb-24 md:pb-48'>
            <Button
              onClick={() => setVisibleAuthors((prev) => prev + 8)}
              className='md:text-md h-40 w-150 rounded-full border border-[#D5D7DA] bg-white text-sm font-bold text-[#0A0D12] hover:cursor-pointer hover:text-white md:h-48 md:w-200'
            >
              Load more
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
