import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

const Waveform = ({ audioUrl }) => {
    const waveformRef = useRef(null);
    var wavesurfer;

    useEffect(() => {
        // Initialize WaveSurfer
        wavesurfer = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: 'violet',
            progressColor: 'purple',
            url: audioUrl
        });
        console.log(wavesurfer)

        return () => {
            wavesurfer.destroy();
        };
    }, [audioUrl]);
    const handlePlayPause = () => {
        if (wavesurfer.isPlaying()) {
            wavesurfer.pause();
        } else {
            wavesurfer.play();
        }
    };
    return (
        <div>
            <div className='text-2xl my-2'>Audio Waveform : </div>
            <div className='h-32 w-96 bg-yellow-100 overflow-visible' ref={waveformRef}></div>
            <div className="flex flex-col">
                <button className='hover:cursor-pointer bg-yellow-300 my-2 h-20 border border-gray-500' onClick={handlePlayPause}>Play/Pause</button>
            </div>
        </div>
    )
};

export default Waveform;