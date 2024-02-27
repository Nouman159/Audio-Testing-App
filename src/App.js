import AudioList from './components/AudioList';
import './App.css';
import { MusicProvider } from './components/MusicContext';
function App() {
  return (
    <MusicProvider>
      <div>
        <header>
          <div className='text-4xl my-4 text-center'>Audio Running Tool</div>
          <div className='flex flex-row'>
            <AudioList />
          </div>
        </header>
      </div>
    </MusicProvider>
  );
}

export default App;
