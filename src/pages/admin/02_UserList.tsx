import { Button } from '../../components/ui/button';
import { Search } from 'lucide-react';
import { useState } from 'react';

export default function UserList() {
  const users = Array.from({ length: 60 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    phone: `08123456${(1000 + i).toString().slice(-4)}`,
    email: `user${i + 1}@email.com`,
    createdAt: '28 Aug 2025, 14:00',
  }));

  const rowsPerPage = 10;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(users.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;

  const pageData = users.slice(startIndex, startIndex + rowsPerPage);

  const goToPage = (p: number) => {
    if (p >= 1 && p <= totalPages) setPage(p);
  };

  return (
    <section className='mx-auto mt-16 max-w-1032 pr-16 pl-16 md:mt-48'>
      {/* start navigasi 1 */}
      <div className='flex h-56 items-center justify-center gap-x-8 bg-[#F5F5F5] md:w-557'>
        <Button className='hover: md:text-md h-40 w-[109.67px] cursor-pointer bg-[#FFFFFF] text-sm font-bold text-neutral-700 hover:bg-white hover:text-black md:w-175'>
          Borrowed List
        </Button>
        <Button className='hover: md:text-md h-40 w-[109.67px] cursor-pointer bg-[#FFFFFF] text-sm font-bold text-neutral-700 hover:bg-white hover:text-black md:w-175'>
          User
        </Button>
        <Button className='hover: md:text-md h-40 w-[109.67px] cursor-pointer bg-[#FFFFFF] text-sm font-bold text-neutral-700 hover:bg-white hover:text-black md:w-175'>
          Book List
        </Button>
      </div>
      {/* end navigasi 1*/}

      {/* start borrowed list + search */}
      <p className='md:text-sm-lh text-xs-lh mt-15 font-bold md:mt-24'>User</p>
      <div>
        <div className='relaetive mt-15 flex h-44 w-full items-center rounded-full border border-[#D5D7DA] bg-white hover:bg-white md:mt-24 md:w-544'>
          <input
            type='text'
            placeholder='Search user '
            className='ml-42 text-sm font-medium'
          />
          <Search
            color='#535862'
            width={15}
            height={15}
            className='absolute ml-16'
          />
        </div>
        {/* end borrowed list + search */}

        {/* TABLE START */}
        <div className='mt-32 overflow-x-auto rounded-xl border border-[#E4E4E4]'>
          <table className='min-w-full border-collapse'>
            <thead className='bg-[#F5F5F5] text-left'>
              <tr>
                <th className='border px-4 py-3 text-sm font-semibold'>No</th>
                <th className='border px-4 py-3 text-sm font-semibold'>Name</th>
                <th className='border px-4 py-3 text-sm font-semibold'>
                  Nomor Handphone
                </th>
                <th className='border px-4 py-3 text-sm font-semibold'>
                  Email
                </th>
                <th className='border px-4 py-3 text-sm font-semibold'>
                  Created at
                </th>
              </tr>
            </thead>

            <tbody>
              {pageData.map((user, idx) => (
                <tr
                  key={user.id}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}
                >
                  <td className='border px-4 py-3 text-sm'>
                    {startIndex + idx + 1}
                  </td>
                  <td className='border px-4 py-3 text-sm'>{user.name}</td>
                  <td className='border px-4 py-3 text-sm'>{user.phone}</td>
                  <td className='border px-4 py-3 text-sm'>{user.email}</td>
                  <td className='border px-4 py-3 text-sm'>{user.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* TABLE END */}

        {/* ==== INFO BAR (Showing 1 to 10 of 60 entries) ==== */}
        <p className='mt-12 text-sm text-neutral-600'>
          Showing {startIndex + 1} to {startIndex + pageData.length} of{' '}
          {users.length} entries
        </p>

        {/* ==== PAGINATION COMPONENT ==== */}
        <div className='mt-12 flex items-center gap-2 text-sm'>
          {/* Previous */}
          <button
            className='rounded border px-3 py-1 hover:bg-gray-100 disabled:opacity-40'
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>

          {/* Pages Example 1 2 3 */}
          {[1, 2, 3].map((p) => (
            <button
              key={p}
              className={`rounded border px-3 py-1 ${
                page === p ? 'bg-gray-200 font-bold' : 'hover:bg-gray-100'
              }`}
              onClick={() => goToPage(p)}
            >
              {p}
            </button>
          ))}

          <span>…</span>

          {/* Next */}
          <button
            className='rounded border px-3 py-1 hover:bg-gray-100 disabled:opacity-40'
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
