import { Button } from '../../ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { type RootState } from '../../../redux/store';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setCheckoutItems } from '../../../redux/slices/cartSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //#region - 1. display book,category and total
  const cart = useSelector((state: RootState) => state.cart.items);
  // calculate total quantity book
  const totalBooks = cart.reduce((sum, item) => sum + item.quantity, 0);
  //#endregion

  //#region - 2. checkbox
  const [selectedItems, setSelectedItems] = useState<Record<number, boolean>>(
    {}
  );
  // inisialisasi semua item jadi false saat pertama render
  useEffect(() => {
    const initialState: Record<number, boolean> = {};
    cart.forEach((item) => {
      initialState[item.id] = false;
    });
    setSelectedItems(initialState);
  }, [cart]);
  // handler select all
  const handleSelectAll = (checked: boolean) => {
    const newState: Record<number, boolean> = {};
    cart.forEach((item) => {
      newState[item.id] = checked;
    });
    setSelectedItems(newState);
  };
  // handler per item
  const handleSelectItem = (id: number, checked: boolean) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };
  // cek semua tercentang
  const allSelected =
    cart.length > 0 && cart.every((item) => selectedItems[item.id]);
  //#endregion

  //#region - 3. handle borrow button
  const handleBorrow = () => {
    // ambil semua item yang dipilih, jika tidak ada yang dicentang ambil semua
    const itemsToCheckout = cart.filter((item) => selectedItems[item.id]);
    dispatch(
      setCheckoutItems(itemsToCheckout.length > 0 ? itemsToCheckout : cart)
    );
    // navigasi ke halaman checkout
    navigate('/checkout');
  };
  //#endregion

  return (
    <section className='mx-auto mt-16 mb-80 h-auto w-full max-w-1032 items-center pr-16 pl-16 md:mt-48 md:mb-100'>
      {/* Title My Cart */}
      <div className='text-xs-lh mb-16 font-bold md:mb-32 md:text-[36px]'>
        My Cart
      </div>
      <div className='flex flex-wrap'>
        {/* 1. Start Cart left section */}
        <div className='w-642'>
          {/* Select all */}
          <label htmlFor='select all' className='flex gap-x-5'>
            <input
              type='checkbox'
              id='select all'
              className='h-20 w-20'
              checked={allSelected}
              onChange={(e) => handleSelectAll(e.target.checked)}
            />
            <span className='text-md font-semibold'>Select All</span>
          </label>
          {/* Select per catagory */}
          {cart.map((item, index) => (
            <div key={item.id} className='flex flex-col'>
              <div className='mt-16 flex md:mt-24'>
                <label htmlFor={`select-${item.id}`} className='flex gap-x-5'>
                  <input
                    type='checkbox'
                    id={`select-${item.id}`}
                    className='h-20 w-20'
                    checked={selectedItems[item.id] || false}
                    onChange={(e) =>
                      handleSelectItem(item.id, e.target.checked)
                    }
                  />
                </label>
                <img
                  src={item.image || '../../images/13_img dummy6 my cart.png'}
                  alt={item.title}
                  className='ml-16 h-106 w-70 md:h-138 md:w-92'
                />
                {/* card Detail */}
                <div className='ml-12 md:ml-16'>
                  <Button className='h-28 w-78 items-center rounded-2xl border border-[#D5D7DA] bg-white font-bold text-black hover:text-white'>
                    <span>{item.category}</span>
                  </Button>
                  <h3 className='text-md font-bold md:text-lg'>{item.title}</h3>
                  <h3 className='md:text-md text-sm font-medium'>
                    {item.author}
                  </h3>
                  <p className='mt-2 text-sm'>Quantity: {item.quantity}</p>
                </div>
              </div>
              {/* underline */}
              {index !== cart.length - 1 && (
                <div className='mt-16 w-full border-b border-b-[#D5D7DA] md:mt-24'></div>
              )}
            </div>
          ))}
        </div>
        {/* 1. End Cart left section */}

        {/* 2. Start Loan Summary right section - Desktop */}
        <div className='ml-40 hidden h-200 w-318 flex-col space-y-24 p-20 md:flex'>
          <h3 className='text-xl font-bold'>Loan Summary</h3>
          <p className='flex justify-between'>
            <span className='text-medium text-md'>Total Book</span>
            <span className='text-md font-bold'>{totalBooks} Items</span>
          </p>
          <Button
            onClick={handleBorrow}
            className='h-48 w-full rounded-full border border-[#D5D7DA] font-bold text-white hover:cursor-pointer hover:bg-[#82AEFF] hover:text-black'
          >
            Borrow Book
          </Button>
        </div>
        {/* 2. End Loan Summary right section - Desktop */}

        {/* Floating Loan Summary for Mobile */}
        <div className='fixed right-4 bottom-4 left-4 z-50 flex h-72 w-full items-center justify-between rounded-xl bg-white p-4 pr-16 pl-16 shadow-lg md:hidden'>
          <div className='h-52 w-151'>
            <p className='mb-2 flex flex-col justify-between'>
              <span>Total Book</span>
              <span className='font-bold'>{totalBooks} Items</span>
            </p>
          </div>
          <Button
            onClick={handleBorrow}
            className='h-40 w-150 rounded-full border border-[#D5D7DA] font-bold text-white hover:cursor-pointer hover:bg-[#82AEFF] hover:text-black'
          >
            Borrow Book
          </Button>
        </div>
      </div>
    </section>
  );
}
