import { useState, useMemo, useCallback } from 'react';
import './App.css';
import Button from './UI/Button/Button';
import DemoList from './UI/Demo'

function App() {
  const [listTitle, setMainTitle] = useState('Sorted in Ascending Order');
  const [buttonTitle, setButtonTitle] = useState('Sorted in Descending Order');
  const [isActive, setActive] = useState(true);

  const itemList = useMemo(() => {
    return [6, 2, 7, 5, 1];
  }, []);

  const descSortHandler = useCallback(() => {
    if (isActive) {
      setButtonTitle('Sorted in Ascending Order')
      setMainTitle('Sorted in Descending Order')
      setActive(false)
    }

    else {
      setMainTitle('Sorted in Ascending Order')
      setButtonTitle('Sorted in Descending Order')
      setActive(true)
    }
  },[isActive])


  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title={listTitle} items={itemList} active={isActive}></DemoList>
      <Button onClick={descSortHandler}>{buttonTitle}</Button>
    </div>
  );
}

export default App;
