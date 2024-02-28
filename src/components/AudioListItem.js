import React from 'react';
import { useQueue } from './QueueContext.js';

const AudioListItem = ({ name, src }) => {

    const { queue, setQueue } = useQueue();

    const setQueueChange = ({ name, src }) => {
        if (!queue.some(item => item.name === name && item.src === src)) {
            setQueue(prevQueue => [...prevQueue, { name, src }]);
        }
    }
    return (
        <div>
            <div className='flex flex-row bg-green-500 m-4 p-4 justify-between w-72 max-[1024px]:m-2 max-[1024px]:p-2 max-[1024px]:w-48'>
                <div className='p-1'>{name}</div>
                <div className='mt-1' onClick={() => setQueueChange({ name, src })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-square"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                </div>
            </div>
        </div>
    )
}
export default AudioListItem