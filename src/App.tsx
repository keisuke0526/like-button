import React, {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>
  );
}

function LikeButton() {
  //countには、999のような値が代入され、setCountには、countの値を変更する関数が代入される
  const [count, setCount] = useState(999);
  //span要素をクリックしたときにcountの値を増加するhandClick関数を定義
  const handleClick = () => {
    setCount(count + 1);
  };
  //onClick属性にhandleClick関数を渡す
  return <span className="likeButton" onClick={handleClick}>❤︎ {count}</span>; 
}

export default App;
