import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const resonse = await fetch(url);
    const users = await resonse.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  const removeItem = id => {
    setUsers(() => {
      let newPeople = users.filter(person => person.id !== id);
      return newPeople;
    });
  };
  return (
    <>
      <h3>GitHub users </h3>
      <ul className='users'>
        {users.map(user => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <a href={html_url}>
                <img src={avatar_url} alt={login} />
              </a>
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>

              <div key={id} className='myBtnS'>
                <button onClick={() => removeItem(id)}>remove</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
