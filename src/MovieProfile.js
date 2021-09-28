import { React, useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import Iframe from 'react-iframe'

export default function Movieprofile(props) {
    const { id, title, original_title, overview, original_language, release_date, vote_average, backdrop_path, poster_path } = (props.location && props.location.state) || {};
    const [movie, SetMovie] = useState([]);
    const [light , Setlight] = useState('white');
    const pageUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
    const PageUrl2 = `https://image.tmdb.org/t/p/original/${poster_path}`;
    useEffect(() => {
        const data = Axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=88626d5c6ba59d5c33bd290f8a75e0a9`)
            .then((data) => {
                console.log('datadata', data)
                SetMovie(data.data.results)
            });
    }, [id])
    const styles = {
        backgroundImage: `url(${pageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor :light ,


    }

    function changeColor(){
        if(light === 'white'){
            Setlight('black')
            
        }else{
            Setlight('white')
        }
    }
    console.log('movie', movie)
    return (
        <div className='h-auto' style={styles}>


            <div class="ml-8  font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">



                <div class="max-w-7xl h-screen flex items-center lg:h-screen flex-wrap mx-auto my-8 lg:my-0">


                    <div  id="profile" style={{backgroundColor: light}} class="lg:w-3/5  sm:mr-7 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-80 mx-2 lg:mx-0">


                        <div class="p-1 md:p-14 text-center lg:text-left">

                            <div class="block lg:hidden shadow-xl mx-auto mt-2 h-72 w-full bg-cover bg-center" style={{ backgroundImage: `url(${pageUrl})` }}></div>

                            <h1 class="text-2xl font-bold pt-8 lg:pt-0">{original_title}</h1>
                            <div class="mx-auto lg:mx-0 w-5/5 pt-3 border-b-2 border-red-500 opacity-25"></div>
                            <p className='font-semibold'>{overview} </p>

                            <p class=" pt-8 text-xl w-64">
                                <span class="absolute transform -translate-x-20 -translate-y-7 z-50 text-red-500 bg-white rounded-full hover:text-green-400 transition-all duration-200 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                Chack Out Some Trailers:</p>


                            <div class="flex flex-wrap bg-gray-100 ">




                                {movie.map((props, index) => {
                                    if (index < 7)
                                        return <a href={`https://www.youtube.com/watch?v=${props.key}`}>
                                            <div class="transform hover:scale-100 duration-500 py-1 mx-2  ">
                                                <div class="">
                                                    <img class="rounded-2xl w-32 h-18" src={`https://i.ytimg.com/vi/${props.key}/1.jpg`} alt="" />
                                                </div>
                                            </div>
                                        </a>
                                })}




                            </div>




                        </div>

                    </div>



                    <div class="">

                        <div class="w-2/5">

                            <img src={PageUrl2} class="h-screen max-w-sm pt-2 pb-4 rounded-none lg:rounded-lg w-auto shadow-2xl hidden lg:block" />


                        </div>



                    </div>



                    <div class="absolute top-0 right-0 h-12 w-32 p-4">
                        <button onClick={changeColor} class="js-change-theme focus:outline-none">🌙</button>
                    </div>

                </div>


            </div>

          


        </div>
    )
}


