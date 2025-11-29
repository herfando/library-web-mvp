'use client';
import { useEffect, useState } from 'react';
import PaginationBullets from '../../ui/paginationBullets';
import { Star } from 'lucide-react';
import { Button } from '../../ui/button';
import {
  useRecommendationsQuery,
  useBooksQuery,
} from '../../../query/hooks/01_useBooks';
import { useCategoriesQuery } from '../../../query/hooks/03_useCategories';
import { useAuthorsQuery } from '../../../query/hooks/02_useAuthors';
import type { Book } from '../../../query/types/01_booksTypes';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { motion } from 'framer-motion';

export default function HomeGuest() {
  //#region - 1.Pagination Query
  // === Pagination state for highlight banner ===
  const [active, setActive] = useState(0);
  const [page, setPage] = useState(1);
  // === Fetch paginated books for highlight ===
  const {
    data: books,
    isLoading: isBooksLoading,
    isError: isBooksError,
  } = useBooksQuery(page, 20);
  // === Auto slide every 3 seconds ===
  useEffect(() => {
    if (!books || books.length === 0) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % books.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [books]);
  // === Click image to go next ===
  const handleClickImage = () => {
    if (!books || books.length === 0) return;
    setActive((prev) => (prev + 1) % books.length);
  };
  // === Pagination bullets change ===
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

  // Dummy from icon categories
  const CATEGORY_ICONS: Record<number, string> = {
    1: '/images/03_fiksi.png',
    2: '/images/04_non-fiction.png',
    3: '/images/05_finance.png',
    4: '/images/06_self-improve.png',
    5: '/images/07_science.png',
    6: '/images/08_education.png',
  };

  //#region - 3.Recommended Query + Load More + Search

  // 1. First take search parameter
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || '';

  // 2. State recommendation
  const [recPage, setRecPage] = useState(1);
  const [recList, setRecList] = useState<Book[]>([]);

  const filteredBooks = recList.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  // 3. Reset list when search change
  useEffect(() => {
    setRecPage(1);
    setRecList([]);
  }, [search]);

  // 4. Query rekomendasi + Search
  const {
    data: recommendedBooks,
    isLoading,
    isError,
  } = useRecommendationsQuery(recPage, 50);

  // 5. Combine result list
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
  //#endregion

  //#region - navigate
  const navigate = useNavigate();
  //#endregion

  //#region - Calculate total book per author
  const countByAuthor = React.useMemo(() => {
    if (!books) return {};

    return books.reduce(
      (acc, book) => {
        const name = book.Author?.name;
        if (!name) return acc;

        acc[name] = (acc[name] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );
  }, [books]);
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
              onClick={() => navigate('/login')}
            />
            {/* {!books[active].coverImage && (
              <div
                className='pointer-events-none absolute inset-0 top-0 left-0 flex flex-col items-center justify-between text-[25px] font-bold text-[#6597E8] md:text-[82.52px]'
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
            )} */}
          </div>
          {/* Pagination bullets */}
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
        {categories?.map((cat) => (
          <motion.div
            key={cat.id}
            className='flex h-132 w-[112.33px] basis-1/3 flex-col items-center justify-center hover:cursor-pointer md:h-130 md:w-[186.67px] md:flex-auto'
            onClick={() => navigate('/login')}
            whileHover={{
              y: [0, -10, 0, 10, 0], // naik turun
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          >
            <div>
              {/* fiction */}
              <div className='flex h-56 w-[96.33px] items-center justify-center rounded-2xl bg-[#E0ECFF] md:h-64 md:w-162'>
                <img
                  src={CATEGORY_ICONS[cat.id] ?? '/images/default_cat.png'}
                  alt={cat.name}
                  className='w-51.2 h-51.2'
                />
              </div>
              {/* title categories */}
              <h3 className='text-md mt-12 self-start font-semibold'>
                {' '}
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
          {filteredBooks?.map((book) => (
            <div
              key={book.id}
              onClick={() => navigate('/login')}
              className='w-172 basis-1/2 gap-x-16 hover:cursor-pointer md:w-224 md:flex-auto md:gap-x-20'
            >
              <motion.img
                src={
                  book.coverImage || '/images/09_img dummy2 recommendation.png'
                }
                alt={book.title}
                className='h-258 w-172 rounded-t-2xl border border-[#D5D7DA] object-cover md:h-336 md:w-224'
                whileHover={{
                  scale: 1.1,
                  rotate: [0, 4, 0, 4, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
              />
              <div className='space-y-4 p-16'>
                {/* Book Name */}
                <p className='md:text-md h-96 text-sm font-bold md:h-72'>
                  {book.title}
                </p>
                {/* Author Name */}
                <p className='md:text-md w-full text-sm whitespace-nowrap'>
                  {book.Author?.name}
                </p>
                {/* Star */}
                <div className='flex space-x-5.5'>
                  <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />
                  <p>{book.rating.toFixed(1)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button Load More */}
        <div className='flex items-center justify-center pb-24 md:pb-48'>
          <Button
            onClick={() => setRecPage((prev) => prev + 1)}
            className='md:text-md h-40 w-150 rounded-full border border-[#D5D7DA] bg-white text-sm font-bold text-[#0A0D12] hover:cursor-pointer hover:text-white md:h-48 md:w-200'
          >
            Load more{' '}
          </Button>
        </div>
        <div className='mb-24 border-b border-[#D5D7DA] md:mb-48'></div>
      </div>
      {/* Popular Authors */}
      <div>
        {/* Title */}
        <h2 className='text-xs-lh mb-24 font-bold md:mb-40 md:text-[36px]'>
          Popular Authors
        </h2>
        {/* total author */}
        <div className='mb-116 flex flex-wrap justify-between'>
          {isAuthorLoading && <p>Loading Author...</p>}
          {isAuthorError && <p>Error loading Author</p>}
          {/* start card author */}
          {authorBooks?.map((author) => (
            <motion.div
              key={author.id}
              className='flex h-84 w-361 flex-wrap items-center p-12 hover:cursor-pointer md:h-113 md:w-285 md:p-16'
              onClick={() => navigate('/login')}
              whileHover={{
                y: [0, -10, 0, 10, 0], // naik turun
              }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
            >
              {/* image author */}
              <img
                src='../../images/10_img dummy3 author.png'
                alt='author'
                className='h-60 w-60 md:h-81 md:w-81'
              />
              {/* Author name */}
              <div className='ml-16'>
                <p>{author.name}</p>
                <div className='flex'>
                  <img src='../../images/12_img dummy5 books.png' alt='books' />

                  <p className='ml-5'>
                    {countByAuthor[author.name] || 0} books
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          {/* end card author */}
        </div>
      </div>
    </section>
  );
}
