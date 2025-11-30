import dayjs from 'dayjs';
import { Button } from '../../ui/button';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import GiveReview from './12_GiveReview';
import Userinteractive from '../../ui/interactiveButton';

export type BorrowedItem = {
  id: number;
  image: string;
  title: string;
  author: string;
  category: string;
  quantity: number;
  borrowDate: string;
  returnDate: string;
  duration: number;
  status?: 'Active' | 'Returned' | 'Overdue';
};

export default function BorrowedList() {
  //#region Popup setting
  const [giveReviewPopup, setGiveReviewPopup] = useState(false);
  const [selectedBook, setSelectedBook] = useState<BorrowedItem | null>(null);
  //#endregion

  //#region take -> localstorage -> checkout
  const [borrowedList, setBorrowedList] = useState<BorrowedItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<
    'All' | 'Active' | 'Returned' | 'Overdue'
  >('All');

  useEffect(() => {
    const saved = localStorage.getItem('borrowedList');
    if (saved) {
      const parsed = JSON.parse(saved);

      const today = dayjs();
      const updatedList = (parsed as BorrowedItem[]).map((item) => {
        const returnDate = dayjs(item.returnDate);
        const status =
          item.status === 'Returned'
            ? ('Returned' as const)
            : returnDate.isBefore(today, 'day')
              ? ('Overdue' as const)
              : ('Active' as const);

        return { ...item, status };
      });

      setBorrowedList(updatedList);
      localStorage.setItem('borrowedList', JSON.stringify(updatedList));
    }
  }, []);
  //#endregion

  //#region Filtered list based on search & filter buttons
  const filteredList = borrowedList.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === 'All' || item.status === filterStatus;
    return matchesSearch && matchesFilter;
  });
  //#endregion

  //#region Handle filter button click
  const handleFilterClick = (
    status: 'All' | 'Active' | 'Returned' | 'Overdue'
  ) => {
    setFilterStatus(status);
  };
  //#endregion

  //#region Handle book return
  const handleReturnBook = (id: number) => {
    const updated: BorrowedItem[] = borrowedList.map((item) =>
      item.id === id ? { ...item, status: 'Returned' as const } : item
    );

    setBorrowedList(updated);
    localStorage.setItem('borrowedList', JSON.stringify(updated));
  };

  //#endregion

  //#region get color for status button
  const statusColor = (status?: string) => {
    if (status === 'Active') return 'bg-white text-[#24A500]';
    if (status === 'Returned') return 'bg-white text-[#1C65DA]';
    if (status === 'Overdue') return 'bg-white text-[#EE1D52]';
    return 'bg-white text-[#0A0D12]';
  };
  //#endregion

  //#region get active filter button color
  const filterActive = (type: string) =>
    filterStatus === type
      ? 'bg-[#1C65DA] text-white'
      : 'bg-[#FFFFFF] text-neutral-950';
  //#endregion

  return (
    <section className='mx-auto mt-16 max-w-1032 pr-16 pl-16 md:mt-48'>
      {/* start navigasi 1 */}
      <div className='flex h-56 items-center justify-center gap-x-8 bg-[#F5F5F5] md:w-557'>
        <Userinteractive />
      </div>
      {/* end navigasi 1*/}

      {/* start borrowed list + search */}
      <p className='md:text-sm-lh text-xs-lh mt-15 font-bold md:mt-24'>
        Borrowed List
      </p>

      <div>
        <div className='relative mt-15 flex h-44 w-full items-center rounded-full border border-[#D5D7DA] bg-white md:mt-24 md:w-544'>
          <input
            type='text'
            placeholder='Search book'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='mr-20 ml-42 h-30 w-full p-5 text-sm font-medium'
          />
          <Search
            color='#535862'
            width={15}
            height={15}
            className='absolute ml-16'
          />
        </div>

        {/* start navigasi 2 */}
        <div className='flex gap-x-12'>
          <Button
            onClick={() => handleFilterClick('All')}
            className={`${filterActive('All')} md:text-md mt-15 h-40 w-51 rounded-full border border-[#D5D7DA] hover:cursor-pointer hover:text-white md:mt-24`}
          >
            All
          </Button>

          <Button
            onClick={() => handleFilterClick('Active')}
            className={`${filterActive('Active')} md:text-md mt-15 h-40 w-72 rounded-full border border-[#D5D7DA] hover:cursor-pointer hover:text-white md:mt-24 md:w-77`}
          >
            Active
          </Button>

          <Button
            onClick={() => handleFilterClick('Returned')}
            className={`${filterActive('Returned')} md:text-md mt-15 h-40 w-93 rounded-full border border-[#D5D7DA] hover:cursor-pointer hover:text-white md:mt-24 md:w-101`}
          >
            Returned
          </Button>

          <Button
            onClick={() => handleFilterClick('Overdue')}
            className={`${filterActive('Overdue')} md:text-md mt-15 h-40 w-88 rounded-full border border-[#D5D7DA] hover:cursor-pointer hover:text-white md:mt-24 md:w-96`}
          >
            Overdue
          </Button>
        </div>
        {/* end navigasi 2 */}

        {/* LOOPING */}
        {filteredList.map((item, index) => (
          <div key={index}>
            {/* STATUS CARD */}
            <div className='mt-15 flex h-auto w-full items-center rounded-2xl shadow-lg md:mt-24'>
              <div className='flex w-full justify-between p-10'>
                <div className='flex items-center space-x-12'>
                  <Button className='md:text-md h-32 w-51 rounded-xl bg-[#FFFFFF] text-sm font-bold text-[#0A0D12] hover:bg-white md:mr-20'>
                    Status
                  </Button>

                  <Button
                    className={`md:text-md h-32 w-51 rounded-xl text-sm font-bold hover:bg-white focus:bg-transparent ${statusColor(item.status)}`}
                  >
                    {item.status}
                  </Button>
                </div>

                <div className='flex items-center justify-center gap-x-12'>
                  <Button className='md:text-md h-32 w-62 rounded-xl bg-[#FFFFFF] text-sm font-bold text-[#0A0D12] md:w-72'>
                    Due Date
                  </Button>

                  <Button className='h-32 w-116 rounded-xl bg-[#EE1D521A] text-sm font-bold text-[#EE1D52]'>
                    {dayjs(item.returnDate).format('DD MMM YYYY')}
                  </Button>
                </div>
              </div>
              <div className='mt-16 border-b border-b-[#D5D7DA] md:mt-20'></div>
            </div>

            {/* BOOK LIST */}
            <div className='flex flex-wrap items-center justify-between'>
              <div className='mt-16 flex w-500 md:mt-24'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='h-138 w-92 space-y-16 border border-[#D5D7DA]'
                />

                <div className='ml-12 flex flex-col justify-between md:ml-16'>
                  <Button className='h-28 w-78 items-center rounded-2xl border border-[#D5D7DA] bg-white font-bold text-black'>
                    <span>{item.category}</span>
                  </Button>

                  <h3 className='text-md font-bold md:text-lg'>{item.title}</h3>

                  <h3 className='md:text-md text-sm font-medium'>
                    {item.author}
                  </h3>

                  <p className='text-sm font-medium'>
                    Quantity: {item.quantity}
                  </p>

                  <h4 className='md:text-md flex gap-x-18 text-sm font-bold'>
                    {dayjs(item.borrowDate).format('DD MMM YYYY')} • Duration{' '}
                    {item.duration} Day
                  </h4>

                  {(item.status === 'Active' || item.status === 'Overdue') && (
                    <Button
                      onClick={() => handleReturnBook(item.id)}
                      className='mt-4 h-32 w-116 rounded-xl bg-[#24A5000D] text-sm font-bold text-[#24A500]'
                    >
                      Return Book
                    </Button>
                  )}
                </div>
              </div>

              <Button
                onClick={() => {
                  setSelectedBook(item);
                  setGiveReviewPopup(true);
                }}
                className='text-md mt-26 h-40 w-full rounded-full font-bold hover:cursor-pointer md:mt-0 md:w-182'
              >
                Give Review
              </Button>
            </div>
          </div>
        ))}

        {/* Load More */}
        <div className='mt-16 hidden items-center justify-center pb-24 md:flex md:pb-48'>
          <Button className='md:text-md h-40 w-150 rounded-full border border-[#D5D7DA] bg-white text-sm font-bold text-[#0A0D12] md:h-48 md:w-200'>
            Load more
          </Button>
        </div>
      </div>

      {giveReviewPopup && selectedBook && (
        <GiveReview
          book={selectedBook}
          onClose={() => setGiveReviewPopup(false)}
        />
      )}
    </section>
  );
}
