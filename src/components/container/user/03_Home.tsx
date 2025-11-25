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

export default function Home() {
  //#region - 1.Pagination Query
  // === Pagination state for highlight banner ===
  const [active, setActive] = useState(0);
  const [page, setPage] = useState(1);
  // === Fetch paginated books for highlight ===
  const {
    data: books,
    isLoading: isBooksLoading,
    isError: isBooksError,
  } = useBooksQuery(page, 50);
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

  //#region - 3.Recommended Query & Load more
  const [recPage, setRecPage] = useState(1);
  const [recList, setRecList] = useState<Book[]>([]);

  const {
    data: recommendedBooks,
    isLoading,
    isError,
  } = useRecommendationsQuery(recPage, 5);

  // === Combine pages into recList ===
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
              className='h-132 w-full rounded-2xl object-contain md:h-441 md:rounded-4xl'
            />
            {/* {!books[active].coverImage && (
              <div
                className='pointer-events-none absolute inset-0 top-0 left-0 flex flex-col items-center justify-center text-[25px] font-bold text-[#6597E8] md:text-[82.52px]'
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
          <div key={cat.id} className=''>
            {/* fiction */}
            <div className='flex h-64 w-162 items-center justify-center rounded-2xl bg-[#E0ECFF]'>
              <img
                src={CATEGORY_ICONS[cat.id] ?? '/images/default_cat.png'}
                alt={cat.name}
                className='w-51.2 h-51.2'
              />
            </div>
            {/* title categories */}
            <h3 className='text-md mt-12 font-semibold'> {cat.name}</h3>
          </div>
        ))}
      </div>
      {/* 3. Recommendation */}
      <div className='mt-24 w-full space-x-20 md:mt-48'>
        <h2 className='text-xs-lh mb-20 font-bold md:mb-40 md:text-[36px]'>
          Recommendation
        </h2>

        {isLoading && <p>Loading recommendations...</p>}
        {isError && <p>Error loading recommendations</p>}

        <div className='flex w-full flex-wrap items-center justify-between gap-10'>
          {recList?.map((book) => (
            <div key={book.id} className='w-172 md:w-224'>
              <img
                src={
                  book.coverImage || '/images/09_img dummy2 recommendation.png'
                }
                alt={book.title}
                className='h-258 w-172 rounded-t-2xl md:h-336 md:w-224'
              />
              <div className='space-y-4 p-16'>
                {/* Book Name */}
                <p>{book.title}</p>
                {/* Author Name */}
                <p>{book.author?.name}</p>
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
            className='md:text-md h-40 w-150 rounded-full border border-[#D5D7DA] bg-white text-sm font-bold text-[#0A0D12] hover:text-white md:h-48 md:w-200'
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
            <div
              key={author.id}
              className='flex h-84 w-361 flex-wrap items-center p-12 md:h-113 md:w-285 md:p-16'
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
                  <p className='ml-5'>5 book</p>
                </div>
              </div>
            </div>
          ))}
          {/* end card author */}
        </div>
      </div>
    </section>
  );
}
