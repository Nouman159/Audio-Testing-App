import React, { useEffect, useState } from 'react'
import AudioListItem from './AudioListItem'
import Waveform from './WaveSurf';
import { useMusic } from './MusicContext.js';

const audioList = [
    { name: "better-day", src: "/assets/better-day.mp3" },
    { name: "dummy", src: "/assets/dummy.mp3" },
    { name: "drive-breakbeat", src: "/assets/drive-breakbeat.mp3" },
    { name: "enchanted-chimes", src: "/assets/enchanted-chimes.mp3" },
    { name: "funny-kids", src: "/assets/funny-kids.mp3" },
]

const AudioList = () => {
    const { currentMusic, setCurrentMusic } = useMusic();
    return (
        <>
            <div className='p-8 w-4/12'>
                <div className='ml-4 text-2xl flex justify-self-center'>Audio List</div>
                {audioList.map((audio, index) => (

                    <AudioListItem
                        key={index}
                        name={audio.name}
                        src={audio.src}
                    />
                ))}
            </div>
            {
                <Waveform audioUrl=
                    {currentMusic}
                />
            }
        </>
    )
}

export default AudioList