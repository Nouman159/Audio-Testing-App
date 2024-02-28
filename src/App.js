import AudioList from './components/AudioList';
import './App.css';
import { QueueProvider } from './components/QueueContext';
import Queue from './components/Queue';
function App() {
  return (
    <QueueProvider>
      <div>

        <div className='text-4xl my-4 text-center'>Audio Running Tool</div>

        <div className='flex flex-row max-sm:flex-col'>
          <AudioList />
          <Queue />
        </div>

      </div>
    </QueueProvider>
  );
}

export default App;
