import { Button } from '../../ui/button';
import { Calendar } from 'lucide-react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../../redux/store';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Checkout() {
  const checkoutItems = useSelector(
    (state: RootState) => state.cart.checkoutItems
  );

  const [borrowDate, setBorrowDate] = useState(dayjs());
  const [returnDate, setReturnDate] = useState(dayjs().add(3, 'day'));
  const [duration, setDuration] = useState(3);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [tempRange, setTempRange] = useState<[Date | null, Date | null]>([
    borrowDate.toDate(),
    returnDate.toDate(),
  ]);

  // Load saved borrowDate
  useEffect(() => {
    const saved = localStorage.getItem('borrowDate');
    if (saved) {
      const savedDate = dayjs(saved);
      setBorrowDate(savedDate);
      setReturnDate(savedDate.add(duration, 'day'));
      setTempRange([
        savedDate.toDate(),
        savedDate.add(duration, 'day').toDate(),
      ]);
    }
  }, []);

  // Update returnDate saat borrowDate atau duration berubah
  useEffect(() => {
    setReturnDate(borrowDate.add(duration, 'day'));
    localStorage.setItem('borrowDate', borrowDate.toISOString());
  }, [borrowDate, duration]);

  // Handle range select
  const handleRangeChange = (dates: [Date | null, Date | null]) => {
    setTempRange(dates);
    if (dates[0] && dates[1]) {
      setBorrowDate(dayjs(dates[0]));
      setReturnDate(dayjs(dates[1]));
      const diff = dayjs(dates[1]).diff(dayjs(dates[0]), 'day');
      setDuration(diff > 0 ? diff : 1);
      setOpenDatePicker(false); // otomatis tutup popup
    }
  };

  return (
    <section className='mx-auto mt-16 h-auto max-w-1034 pr-16 pl-16 md:mt-48'>
      <h2 className='md:text-36 text-24 mb-16 font-bold md:mb-32'>Checkout</h2>
      <div className='grid grid-cols-1 justify-between space-x-58 lg:grid-cols-2'>
        {/* Left Section */}
        <div>
          <div className='w-361 space-y-16 md:w-466'>
            <h3 className='md:text-xs-lh text-lg font-bold'>
              User Information
            </h3>
            <div className='flex w-full justify-between'>
              <h4 className='md:text-md text-sm font-medium'>Name</h4>
              <span className='md:text-md text-sm font-bold'>Johndoe</span>
            </div>
            <div className='flex w-full justify-between'>
              <h4 className='md:text-md text-sm font-medium'>Email</h4>
              <span className='md:text-md text-sm font-bold'>
                johndoe@email.com
              </span>
            </div>
            <div className='flex w-full justify-between'>
              <h4 className='md:text-md text-sm font-medium'>
                Nomor Handphone
              </h4>
              <span className='md:text-md text-sm font-bold'>081234567890</span>
            </div>
            <div className='hidden border-b border-b-[#D5D7DA] md:mb-32 md:block'></div>
          </div>

          <h3 className='md:text-xs-lh text-lg font-bold'>Book List</h3>
          {checkoutItems.length === 0 ? (
            <p className='mt-16 text-sm font-medium'>No books selected.</p>
          ) : (
            checkoutItems.map((item) => (
              <div key={item.id} className='mt-16 flex md:mt-24'>
                <img
                  src={item.image || '../../images/13_img dummy6 my cart.png'}
                  alt={item.title}
                  className='h-138 w-92 space-y-16'
                />
                <div className='ml-12 md:ml-16'>
                  <Button className='h-28 w-78 items-center rounded-2xl border-[Neutral/300] bg-white font-bold text-black hover:text-white'>
                    <span>{item.category}</span>
                  </Button>
                  <h3 className='text-md font-bold md:text-lg'>{item.title}</h3>
                  <h3 className='md:text-md text-sm font-medium'>
                    {item.author}
                  </h3>
                  <p className='mt-2 text-sm'>Quantity: {item.quantity}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Section */}
        <div className='p-20'>
          <h2 className='md:text-sm-lh items-center font-bold'>
            Complete Your Borrow Request
          </h2>
          <div className='mt-16 md:mt-24'>
            <p className='text-sm font-bold'>Borrow & Return Date</p>
            <div className='relative mt-2'>
              <Button
                className='h-48 w-full border border-[#D5D7DA] bg-[#F5F5F5] text-black hover:bg-[#F5F5F5]'
                onClick={() => setOpenDatePicker((prev) => !prev)}
              >
                <input
                  type='text'
                  readOnly
                  value={`${borrowDate.format('DD MMM YYYY')} - ${returnDate.format('DD MMM YYYY')}`}
                  className='text-md my-9 mr-44 ml-16 h-30 w-full font-semibold'
                />
              </Button>
              <Calendar
                size={20}
                className='absolute top-0 right-0 mt-14 mr-14 flex cursor-pointer'
                onClick={() => setOpenDatePicker((prev) => !prev)}
              />

              {openDatePicker && (
                <div className='absolute left-[10%] z-50 mt-2 w-100 content-center rounded bg-white p-4 md:-left-[3%] md:w-500'>
                  <DatePicker
                    selectsRange
                    startDate={tempRange[0]}
                    endDate={tempRange[1]}
                    onChange={handleRangeChange}
                    inline
                    minDate={new Date()}
                    monthsShown={2}
                  />
                </div>
              )}
            </div>

            {/* Borrow Duration Radio */}
            <div className='md:text-md mt-16 flex flex-col gap-y-12 text-sm font-bold md:mt-24'>
              Borrow Duration
              {[3, 5, 10].map((d) => (
                <div key={d} className='flex items-center gap-x-15 md:gap-x-8'>
                  <input
                    type='radio'
                    className='h-24 w-24'
                    checked={duration === d}
                    onChange={() => setDuration(d)}
                  />
                  <span className='md:text-md text-sm font-semibold'>
                    {d} Days
                  </span>
                </div>
              ))}
            </div>

            {/* Return Date */}
            <div className='mt-16 flex h-92 w-full flex-col justify-center rounded-2xl bg-[#F6F9FE] p-16 md:mt-24'>
              <h3 className='md:text-md text-sm font-bold'>Return Date</h3>
              <p className='md:text-md text-sm font-medium'>
                Please return the book no later than
                <span className='ml-4 font-bold text-[#EE1D52]'>
                  {returnDate.format('DD MMM YYYY')}
                </span>
              </p>
            </div>

            {/* Agreement & Policy */}
            <div className='mt-16 space-y-8 md:mt-24'>
              <div className='flex items-center gap-x-15 md:gap-x-8'>
                <input type='checkbox' className='h-24 w-24' />
                <span className='md:text-md text-sm font-semibold'>
                  I agree to return the book(s) before the due date.
                </span>
              </div>
              <div className='flex items-center gap-x-15 md:gap-x-8'>
                <input type='checkbox' className='h-24 w-24' />
                <span className='md:text-md text-sm font-semibold'>
                  I accept the library borrowing policy.
                </span>
              </div>

              <div className='mt-16 md:mt-24'>
                <Button className='h-48 w-full rounded-full hover:cursor-pointer'>
                  Confirm & Borrow
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
