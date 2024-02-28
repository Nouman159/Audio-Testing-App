import React, { useEffect, useRef, useState } from 'react';
import { useQueue } from './QueueContext.js';
import WaveSurfer from 'wavesurfer.js';

const Waveform = () => {
    const [isPlay, setIsPlay] = useState(false);
    const [wavesurfer, setWaveSurfer] = useState(null);
    const waveformRef = useRef(null);
    const { queue, setQueue } = useQueue();

    useEffect(() => {
        if (queue.length === 0) return;
        const ws = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: 'violet',
            progressColor: 'purple',
            url: queue[0].src
        });

        ws.on('ready', () => {
            setWaveSurfer(ws);
            setIsPlay(true);
            ws.play();
        });

        ws.on('finish', handleTrackFinish);

        return () => {
            if (ws) {
                ws.destroy();
            }
        };
    }, [queue[0]]);

    const handleTrackFinish = () => {
        setQueue(prevQueue => prevQueue.slice(1));
    };

    const handlePlayPause = () => {
        if (wavesurfer) {
            if (isPlay) {
                wavesurfer.pause();
                setIsPlay(false);
            } else {
                wavesurfer.play();
                setIsPlay(true);
            }
        }
    };
    return (
        <div className='max-[1024px]:mx-3 mx-2 max-sm:w-9/12'>
            <div className='text-2xl my-2 max-[1024px]:my-0'>Audio Waveform : </div>
            <div className='h-32 w-72 bg-yellow-100 overflow-visible' ref={waveformRef}></div>
            <div className="flex flex-col">
                {(wavesurfer && queue[0]) && (
                    <button className='hover:cursor-pointer bg-yellow-300 my-2 h-20 border border-gray-500' onClick={handlePlayPause}>
                        {isPlay ? 'Pause' : 'Play'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Waveform;
