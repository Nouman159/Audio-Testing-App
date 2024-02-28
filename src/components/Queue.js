import React from 'react'
import { useQueue } from './QueueContext.js';

const Queue = () => {
    const { queue } = useQueue();
    return (
        <div className='p-2'>
            <div className=' pl-12 text-2xl'>Running Queue</div>
            {queue.map((audio, index) => (
                <div key={index} className={`flex flex-row ${index === 0 ? 'bg-green-500' : 'bg-blue-500'} m-4 p-4 justify-between w-56`}>
                    <div
                        key={index}
                        name={audio.name}
                        src={audio.src}
                    >
                        Name : {audio.name}
                    </div>
                </div>
            ))}
            {queue.length == 0 &&
                <div>Queue Empty</div>
            }
        </div>
    )
}

export default Queue