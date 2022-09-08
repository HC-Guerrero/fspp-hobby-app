/*const firebaseConfig = {
  apiKey: 'AIzaSyBSXEbRn05Wwrr_358MbtiWarpmF2KOWB8',
  authDomain: 'fspp-gg-video-games.firebaseapp.com',
  databaseURL: 'https://fspp-gg-video-games-default-rtdb.firebaseio.com',
  projectId: 'fspp-gg-video-games',
  storageBucket: 'fspp-gg-video-games.appspot.com',
  messagingSenderId: '150147601838',
  appId: '1:150147601838:web:c0d4d1654b11db7c29a43f',
};
firebase.initializeApp(firebaseConfig);  */

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
        <div key={index}>
          <span>
            {comment.name} &middot;{' '}
            {new Date(1000 * comment.time).toLocaleDateString()}
          </span>
          <span>{comment.content}</span>
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
      id='CommentsForm'
    >
      <h1 c> Got Someting to Say?</h1>
      <div>
        <input
          id='NameBox'
          required
          value={name}
          placeholder='Your Name/UserHandle'
          onChange={(event) => setName(event.target.value)}
        />
        <span></span>
      </div>
      <textarea
        required
        id='MsgBox'
        value={content}
        onChange={(event) => setContent(event.target.value)}
        placeholder={`Comments with \nmaximum of 500 characters.`}
      />
      <button type='submit'>Post a Comment</button>
    </form>
  );
};
export default WriteComment;
