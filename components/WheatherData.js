import Image from 'next/image';
import React from 'react';

const Weather = ({ data }) => {
    console.log(data);

    const tempCele = (data.main.temp.toFixed(0) - 32) * 5 / 9
    const tempFeels = (data.main.feels_like.toFixed(0) - 32) * 5 / 9

    const WindSpeed = data.wind.speed.toFixed(0)* 1.609344 





    return (
        <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
            {/* Top */}
            <div className='relative flex justify-between pt-12'>
                <div className='flex flex-col items-center'>
                    <Image
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        alt='/'
                        width='100'
                        height='100'
                    />
                    <p className='text-2xl'>{data.weather[0].main}</p>
                </div>
                <p className='text-9xl'>{tempCele.toFixed(0)}&#176;</p>
            </div>
            {/* Bottom */}

            <div className='bg-black/50 top-56 absolute p-8 rounded-md w-[426px]'>
                <p className='text-2xl text-center pb-6'>Weather in {data.name}</p>
                <div className='flex justify-between text-center'>
                    <div>
                        <p className='font-bold text-2xl'>{tempFeels.toFixed(0)}&#176;</p>
                        <p className='text-xl'>Feels Like</p>
                    </div>
                    <div>
                        <p className='font-bold text-2xl'>{data.main.humidity}%</p>
                        <p className='text-xl'>Humidity</p>
                    </div>
                    <div>
                        <p className='font-bold text-2xl'>{WindSpeed.toFixed(0)} Km/h</p>
                        <p className='text-xl'>Winds</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Weather;