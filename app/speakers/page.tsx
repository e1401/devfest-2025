'use client';

import SpeakerCard from '@/components/speaker-card';
import speakers from '@/json/speakers.json';
const Speakers = () => {
    return (
        <div className='container flex flex-col items-center px-4 p-10'>
            <h1 className='mt-3 mb-6 text-4xl font-bold'>
                Meet the speakers and find out more about their talks
            </h1>

            {/* <h2 className='mt-3 mb-6 text-2xl font-bold'>
                Want to know more about the agenda? Check &nbsp;
                <Link href={'/agenda'}>
                    <span className='underline'>here</span>
                </Link>
            </h2> */}
            <div className='flex flex-col gap-3 w-full max-w-4xl'>
                {speakers.speakers
                    .filter((session) => session.isPublishable === true)
                    .map((session) => {
                        return (
                            <SpeakerCard
                                session={session}
                                key={
                                    session.name.split(' ')[1] +
                                    session.name.split(' ')[0]
                                }
                            />
                        );
                    })}
            </div>
        </div>
    );
};

export default Speakers;
