// Profile.tsx
import { Button } from '../../components/ui/button';
import { useEffect, useState, useRef } from 'react';
import Userinteractive from '../../components/ui/interactiveButton';

type UserInfo = {
  name: string;
  email: string;
  phoneNumber?: string;
  image?: string; // added image
};

export default function Profile() {
  //#region - State
  const [userData, setUserData] = useState<UserInfo>({
    name: '',
    email: '',
    phoneNumber: '',
    image: '', // default empty
  });
  const [editMode, setEditMode] = useState(false); // track if editing
  const imageInputRef = useRef<HTMLInputElement>(null); // reference for file input
  //#endregion

  //#region - Load user data from localStorage on mount
  useEffect(() => {
    const storedLogin = localStorage.getItem('user');
    const storedRegister = localStorage.getItem('registerUser');

    let data: UserInfo | null = null;

    if (storedRegister) {
      const parsed = JSON.parse(storedRegister);
      data = parsed.user;
    } else if (storedLogin) {
      const parsed = JSON.parse(storedLogin);
      data = parsed.data.user;
    }

    if (data) {
      setUserData({
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber || '',
        image: data.image || '', // load image if exists
      });
    }
  }, []);
  //#endregion

  //#region - Handle input change
  const handleChange = (key: keyof UserInfo, value: string) => {
    setUserData((prev) => ({ ...prev, [key]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setUserData((prev) => ({ ...prev, image: reader.result as string }));
    };
    reader.readAsDataURL(file);
  };
  //#endregion

  //#region - Save profile to localStorage & trigger event
  const handleSave = () => {
    // Save to registerUser
    const storedRegister = localStorage.getItem('registerUser');
    if (storedRegister) {
      const parsed = JSON.parse(storedRegister);
      parsed.user = userData;
      localStorage.setItem('registerUser', JSON.stringify(parsed));
    }

    // Save to user (login)
    const storedLogin = localStorage.getItem('user');
    if (storedLogin) {
      const parsed = JSON.parse(storedLogin);
      parsed.data.user = userData;
      localStorage.setItem('user', JSON.stringify(parsed));
    }

    // Trigger event for Navbar to update instantly
    window.dispatchEvent(new Event('userUpdated'));

    setEditMode(false);
    alert('Profile updated!');
  };
  //#endregion

  //#region - Handle image click to trigger file input
  const handleImageClick = () => {
    if (!editMode) setEditMode(true); // enable edit mode if not
    imageInputRef.current?.click(); // trigger file input click
  };
  //#endregion

  return (
    <section className='mx-auto mt-16 mb-58 w-full -translate-x-0 px-16 md:mt-40 md:mb-110 md:h-440 md:w-557 md:-translate-x-[43%]'>
      {/* Top navigation / user interactive */}
      <div className='flex h-56 items-center justify-center gap-x-8 bg-[#F5F5F5] md:w-557'>
        <Userinteractive />
      </div>

      {/* Section title */}
      <p className='md:text-sm-lh text-xs-lh mt-15 font-bold md:mt-24'>
        Profile
      </p>

      {/* Profile card */}
      <div className='mt-15 space-y-12 p-20 md:mt-24'>
        {/* Image + Change Picture button in one row */}
        <div className='flex w-full items-center justify-between'>
          <div
            onClick={handleImageClick}
            className='flex h-64 w-64 items-center justify-center overflow-hidden rounded-full bg-gray-200 hover:cursor-pointer'
          >
            {!userData.image && (
              <span className='text-4xl text-gray-400'>👤</span>
            )}
            {userData.image && (
              <img
                src={userData.image}
                alt='profile'
                className='h-64 w-64 rounded-full object-cover'
              />
            )}
          </div>
          {/* Change Picture button */}
          {editMode && (
            <div className='flex flex-col'>
              <input
                ref={imageInputRef}
                id='imageUpload'
                type='file'
                accept='image/*'
                onChange={handleImageChange}
                className='md:text-md w-200 border border-[#D5D7DA] p-10 text-sm font-bold hover:cursor-pointer md:w-300'
              />
            </div>
          )}
        </div>

        {/* Name */}
        <div className='flex w-full items-center justify-between'>
          <p className='md:text-md text-sm font-medium'>Name</p>
          {editMode ? (
            <input
              className='md:text-md w-200 border border-[#D5D7DA] p-10 text-sm font-bold hover:cursor-pointer md:w-300'
              value={userData.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          ) : (
            <p className='md:text-md text-sm font-bold'>{userData.name}</p>
          )}
        </div>

        {/* Email */}
        <div className='flex w-full items-center justify-between'>
          <p className='md:text-md text-sm font-medium'>Email</p>
          {editMode ? (
            <input
              className='md:text-md w-200 border border-[#D5D7DA] p-10 text-sm font-bold hover:cursor-pointer md:w-300'
              value={userData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          ) : (
            <p className='md:text-md text-sm font-bold'>{userData.email}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className='flex w-full items-center justify-between'>
          <p className='md:text-md text-sm font-medium'>Phone Number</p>
          {editMode ? (
            <input
              className='md:text-md w-200 border border-[#D5D7DA] p-10 text-sm font-bold hover:cursor-pointer md:w-300'
              value={userData.phoneNumber}
              onChange={(e) => handleChange('phoneNumber', e.target.value)}
            />
          ) : (
            <p className='md:text-md text-sm font-bold'>
              {userData.phoneNumber}
            </p>
          )}
        </div>

        {/* Update / Save Button */}
        <Button
          className='text-md mt-16 h-48 w-full rounded-full font-bold hover:cursor-pointer md:mt-24'
          onClick={() => (editMode ? handleSave() : setEditMode(true))}
        >
          {editMode ? 'Save Profile' : 'Update Profile'}
        </Button>
      </div>
    </section>
  );
}
