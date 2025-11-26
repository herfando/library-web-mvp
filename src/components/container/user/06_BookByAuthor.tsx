import { Star } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useAuthorBooksQuery } from '../../../query/hooks/02_useAuthors';

export default function BookByAuthor() {
  //#region - Author Query
  const { id } = useParams();
  const authorId = Number(id);

  const { data, isLoading, isError } = useAuthorBooksQuery(authorId);

  if (isLoading) return <p className='p-20'>Loading...</p>;
  if (isError || !data) return <p className='p-20'>Failed to load data.</p>;

  const author = data.data.author;
  const books = data.data.books;
  //#endregion

  return (
    <section className='custom-container mt-16 md:mt-48'>
      {/* Start card author */}
      <div className='flex h-84 w-361 items-center p-12 md:h-113 md:w-285 md:p-16'>
        {/* image author */}
        <img
          src={'../../images/10_img dummy3 author.png'}
          alt={author.name}
          className='h-60 w-60 md:h-81 md:w-81'
        />
        {/* Author name */}
        <div className='ml-16'>
          <p>{author.name}</p>
          <div className='flex'>
            <img src='../../images/12_img dummy5 books.png' alt='books' />
            <p className='ml-6'>{books.length} books</p>
          </div>
        </div>
      </div>
      {/* End Card author */}

      {/* Start Book list */}
      <div className='text-xs-lh mt-16 mb-16 font-bold md:mt-40 md:mb-32 md:text-[36px]'>
        Book List
      </div>
      {/* Card Book's list */}
      <div className='grid grid-cols-2 justify-center gap-16 md:grid-cols-3 lg:grid-cols-4'>
        {books.map((book) => (
          <div
            key={book.id}
            className='h-370 w-172 md:mb-118 md:h-468 md:w-224 md:space-y-16 md:space-x-16'
          >
            <img
              className='h-258 w-172 rounded-t-2xl md:h-336 md:w-224'
              src={book.coverImage || '/placeholder.png'}
              alt={book.title}
            />
            <div className='space-y-4 p-12 md:p-16'>
              <h4 className='text-sm font-bold md:text-lg'>{book.title}</h4>
              <p className='md:text-md text-sm font-medium'>{author.name}</p>
              <div className='flex items-center space-x-3'>
                <Star className='h-[16.35px] w-[17.12px] fill-[#FFAB0D] text-[#FFAB0D]' />{' '}
                <span className='md:text-md text-sm font-semibold'>
                  {' '}
                  {book.rating.toFixed(1)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* End Book list */}
      {books.length === 0 && (
        <p className='text-md mt-20'>No books found for this author.</p>
      )}
    </section>
  );
}
