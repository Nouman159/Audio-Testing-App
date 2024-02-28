import React from 'react'
import AudioListItem from './AudioListItem'
import Waveform from './WaveSurf';

const audioList = [
    { name: "better-day", src: "/assets/better-day.mp3" },
    { name: "dummy", src: "/assets/dummy.mp3" },
    { name: "drive-breakbeat", src: "/assets/drive-breakbeat.mp3" },
    { name: "enchanted-chimes", src: "/assets/enchanted-chimes.mp3" },
    { name: "funny-kids", src: "/assets/funny-kids.mp3" },
]

const AudioList = () => {
    return (
        <>
            <div className='p-8 w-4/12 max-[1024px]:w-3/12 max-sm:w-full'>
                <div className='ml-4 text-2xl'>Audio List</div>
                {audioList.map((audio, index) => (

                    <AudioListItem
                        key={index}
                        name={audio.name}
                        src={audio.src}
                    />
                ))}
            </div>
            {
                <Waveform
                />
            }
        </>
    )
}

export default AudioList