import React, { useState } from 'react';
import Modal from '../components/Modal';
import ImageModal from '../components/ImageModal'
import { IoLocationOutline } from 'react-icons/io5';

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  const toggleModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const toggleImageModal = () => setShowImageModal(true);
  const closeImageModal = () => setShowImageModal(false);

  return (
    <>
      <div className='bg-gray-300 py-12 antialiased md:py-8 min-h-screen'>
        <div className='max-w-screen px-8 2xl:px-0'>
          <h2 className='mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6'>
            My Profile
          </h2>

          <div className='py-4 md:py-8'>
            <div className='mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16'>
              {/* Column 1 */}
              <div className='space-y-4'>
                <div className='flex space-x-4'>
                  <img
                    onClick={toggleImageModal}
                    className='h-16 w-16 rounded-lg cursor-pointer'
                    src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png'
                    alt='Helene avatar'
                  />
                  <div>
                    <span className='mb-2 inline-block rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-white'>
                      PRO Account
                    </span>
                    <h2 className='flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl'>
                      Helene Engels
                    </h2>
                  </div>
                </div>

                <dl>
                  <dt className='font-semibold text-gray-900 dark:text-white'>Email Address</dt>
                  <dd className='text-gray-500 dark:text-gray-400'>helene@example.com</dd>
                </dl>
                <dl>
                  <dt className='font-semibold text-gray-900 dark:text-white'>Home Address</dt>
                  <dd className='flex items-center gap-1 text-gray-500 dark:text-gray-400'>
                    <IoLocationOutline />
                    2 Miles Drive, NJ 071, New York, United States of America
                  </dd>
                </dl>
              </div>

              {/* Column 2 */}
              <div className='space-y-4'>
                <dl>
                  <dt className='font-semibold text-gray-900 dark:text-white'>Phone Number</dt>
                  <dd className='text-gray-500 dark:text-gray-400'>+1234 567 890 / +12 345 678</dd>
                </dl>
                <dl>
                  <dt className='font-semibold text-gray-900 dark:text-white'>Policy Number</dt>
                  <dd className='text-gray-500 dark:text-gray-400'>46790</dd>
                </dl>
              </div>
            </div>

            <button
              onClick={toggleModal}
              type='button'
              className='inline-flex items-center justify-center h-12 rgb-button bg-gradient-to-r from-indigo-800 to-amber-400 text-white px-8 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10'
            >
              Edit your data
            </button>
          </div>
        </div>
      </div>

      {/* Edit Data Modal */}
      {showModal && <Modal onClose={closeModal}>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Edit Your Data</h2>
          {/* Add edit form here */}
        </div>
      </Modal>}

      {/* Profile Image Modal */}
      {showImageModal && (
        <ImageModal onClose={closeImageModal}/>
         
      )}
    </>
  );
};

export default Profile;
