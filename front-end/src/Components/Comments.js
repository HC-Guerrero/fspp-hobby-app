const firebaseConfig = {
  apiKey: 'AIzaSyBSXEbRn05Wwrr_358MbtiWarpmF2KOWB8',
  authDomain: 'fspp-gg-video-games.firebaseapp.com',
  databaseURL: 'https://fspp-gg-video-games-default-rtdb.firebaseio.com',
  projectId: 'fspp-gg-video-games',
  storageBucket: 'fspp-gg-video-games.appspot.com',
  messagingSenderId: '150147601838',
  appId: '1:150147601838:web:c0d4d1654b11db7c29a43f',
};
firebase.initializeApp(firebaseConfig);

<script src='https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js'></script>;
/*
import { useState } from 'react';

export const getComments = (slug, callBackFunction) => {
  fetch(`api/comments?slug=${slug}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((response) => {
      if (response && response.posts) callBackFunction(response.posts);
    })
    .catch((error) => {
      console.warn(error);
    });
};

export const writeComment = (name, slug, content, callBackFunction) => {
  fetch(`api/comments`, {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      slug,
      content,
    }),
  })
    .then(() => {
      callBackFunction();
    })
    .catch((error) => {
      console.warn(error);
    });
};

export const LoadComments = ({ comments }) => {
  return (
    comments &&
    comments
      .sort((item1, item2) =>
        new Number(item1.time) > new Number(item2.time) ? -1 : 1,
      )
      .map((comment, index) => (
        <div
          key={index}
          className='mt-5 flex w-full flex-col rounded border p-5 dark:border-gray-500:'
        >
          <span className='text-lg font-medium text-gray-500 dark:text-gray-300'>
            {comment.name} &middot;{' '}
            {new Date(1000 * comment.time).toLocaleDateString()}
          </span>
          <span className='text-md mt-3 text-gray-500 dark:text-gray-300'>
            {comment.content}
          </span>
        </div>
      ))
  );
};
const WriteComment = ({ slug, setComments }) => {
  const [name, setName] = useState('');

  const [content, setContent] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        writeComment(name, slug, content, () => getComments(slug, setComments));
        setName('');
        setContent('');
      }}
      className='mt-10 flex w-full flex-col'
      id='CommentsForm'
    >
      <h1 className='text-lg font-semibold'> Got Someting to Say?</h1>
      <div className='flex flex-col items-start sm:flex-row sm:space-x-5'>
        <input
          id='NameBox'
          required
          value={name}
          placeholder='Your Name/UserHandle'
          onChange={(event) => setName(event.target.value)}
          className='w-full appearance-none rounded border px-5 py-2 text-black outline-none ring-0 hover:border-black hover:shadow 
        dark:border-gray-500 dark:bg-black dark:text-gray-300 dark:hover:border-white sm:w-1/2'
        />
        <span className='text-sm text-gray-400'></span>
      </div>
      <textarea
        required
        id='MsgBox'
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder={`Comment*\nMaximum of 500 characters.`}
        className='mt-5 appearance-none rounded border px-5 pt-5 pb-10 text-black outline-none rign-0 hover:border-black hover:shadow dark:border-gray-500 dark:bg-black dark:tet-gray-300 dark:hover:border-white'
      />
      <button
        type='submit'
        className='mt-5 w-[200px] appearance-none rounded border py-2 px-5 text-center hover-bg-gray-100 dark:border-gray-500 dark:hover:bg-[#282828]'
      >
        Post a Comment
      </button>
    </form>
  );
};
export default WriteComment;
*/
