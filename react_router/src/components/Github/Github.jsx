import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  const data = useLoaderData()
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   fetch('https://api.github.com/users/Jeevamk')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="bg-gray-100 shadow-lg rounded-lg max-w-md mx-auto mt-10 p-6">
      <div className="text-center">
        <img
          src={data.avatar_url}
          alt="Avatar"
          className="w-32 h-32 rounded-full mx-auto border-4 border-gray-200"
        />
        <h1 className="text-3xl font-semibold mt-4">{data.name}</h1>
        <p className="text-gray-600 mt-2">{data.bio}</p>
        <div className="mt-4">
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600"
          >
            View GitHub Profile
          </a>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-center">Stats</h2>
        <div className="flex justify-around mt-4 text-gray-700">
          <div className="text-center">
            <p className="text-xl font-bold">{data.public_repos}</p>
            <p>Repositories</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{data.followers}</p>
            <p>Followers</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{data.following}</p>
            <p>Following</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Github;


// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Jeevamk')
  return response.json()
}