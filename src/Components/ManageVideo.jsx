import React from 'react';

const ManageVideo = ({ handleSubmit, handleVideoChange, handlePhotoChange, videoData }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e, 'video')} className='space-y-4'>
      <div>
        <label className='block text-lg font-medium mb-2' htmlFor='title'>Video Title:</label>
        <input
          id='title'
          type="text"
          value={videoData.title}
          onChange={handleVideoChange}
          required
          className='w-full p-2 border border-gray-300 rounded'
        />
      </div>
      <div>
        <label className='block text-lg font-medium mb-2' htmlFor='photo'>Video Thumbnail:</label>
        <input
          id='photo'
          type="file"
          onChange={(e) => handlePhotoChange(e, 'video')}
          className='w-full p-2 border border-gray-300 rounded'
        />
        {videoData.photo && (
          <div className='mt-4'>
            <img
              src={videoData.photo}
              alt="Preview"
              className='w-32 h-32 object-cover'
            />
          </div>
        )}
      </div>
      <div>
        <label className='block text-lg font-medium mb-2' htmlFor='description'>Video Description:</label>
        <textarea
          id='description'
          value={videoData.description}
          onChange={handleVideoChange}
          required
          className='w-full p-2 border border-gray-300 rounded'
        />
      </div>
      <div>
        <label className='block text-lg font-medium mb-2' htmlFor='link'>Video Link:</label>
        <input
          id='link'
          type="text"
          value={videoData.link}
          onChange={handleVideoChange}
          required
          className='w-full p-2 border border-gray-300 rounded'
        />
      </div>
      <button
        type="submit"
        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
      >
        Submit
      </button>
    </form>
  );
};

export default ManageVideo;
