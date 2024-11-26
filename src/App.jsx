import './App.css';
import Converting from './Converting';
import Greeting from './Greeting';
import { MyFavoriteGames } from './MyFavoriteGames'
import Bio from './Bio'
import ExpressionInside from './ExpressionInside'
import Animals from './Animals'
import PackingList from './ShowAnIcon';
import PackingListItalic from './ShowTheItem';
import DrinkList from './Refactor';

function App() {  

  return (
    <>
      <Greeting/>
      <p>Hello Vite!</p>
      <MyFavoriteGames/>
      <Converting/>
      <Bio/>      
      <ExpressionInside/>
      <Animals/>
      <PackingList/>
      <PackingListItalic/>
      <DrinkList/>
    </>
  );
}

export default App
