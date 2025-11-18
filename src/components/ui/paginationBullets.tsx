'use client';

interface Props {
  total: number;
  activeIndex: number;
  onChange: (index: number) => void;
}

export default function PaginationBullets({
  total,
  activeIndex,
  onChange,
}: Props) {
  return (
    <div className='mt-4 flex justify-center gap-3'>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`h-10 w-10 rounded-full transition-colors ${activeIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
        />
      ))}
    </div>
  );
}
