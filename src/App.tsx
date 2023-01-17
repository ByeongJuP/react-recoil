import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import logo from './logo.svg';
import './App.css';

const textState = atom({
  key: 'textState',
  default: '',
});

const charCounterState = selector({
  key: 'charCounteState',
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <CharacterCounter />
        </header>
      </div>
    </RecoilRoot>
  );
}

const CharacterCounter = () => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
};

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  const onChange = (e: any) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};

const CharacterCount = () => {
  const count = useRecoilValue(charCounterState);
  return <>Character Count: {count}</>;
};

export default App;
