import { ArrowLeft } from 'lucide-react';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';

export default function AddBook() {
  return (
    <section className='mx-auto mt-48 mb-83 max-w-624 pr-16 pl-16'>
      <div className='text-sm-lh mb-32 flex items-center gap-x-12 font-bold'>
        <ArrowLeft size={32} />
        <div>Add Book</div>
      </div>
      {/* title */}
      <div className='mt-16'>
        <p className='text-sm font-bold'>Title</p>
        <Input type='text' placeholder='' />
      </div>
      {/* Author */}
      <div className='mt-16'>
        <p className='text-sm font-bold'>Author</p>
        <Input type='text' placeholder='' />
      </div>
      {/* Category */}
      <div className='mt-16'>
        <p className='text-sm font-bold'>Category</p>
        <Input type='text' placeholder='Select Category' />
      </div>
      {/* Description */}
      <div className='mt-16'>
        <p className='text-sm font-bold'>Description</p>
        <Input type='text' placeholder='' />
      </div>
      {/* Cover Image */}
      <div className='mt-16'>
        <p className='text-sm font-bold'>Cover Image</p>
        <Input type='text' placeholder='' />
      </div>
      <Button className='text-md mt-16 h-48 w-full rounded-full font-bold hover:cursor-pointer md:mt-24'>
        Update Profile{' '}
      </Button>
    </section>
  );
}
