import { React, useEffect, useState } from 'react'
import Axios from 'axios';
import Fetch from 'fetch';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Navbar from './navbar';

export default function PupolarMovies(props) {
    const api_key = '88626d5c6ba59d5c33bd290f8a75e0a9&language=enUS&page=';
    const url = 'https://api.themoviedb.org/3/movie/';

    const [Movies, SetMovies] = useState([]);
    const [Page, SetPage] = useState(1);
    const [SearchPage, SetSearchPage] = useState(1);
    const [search, Setsearch] = useState('');
    const [error, Seterror] = useState('');
    const SeachApi = `api.themoviedb.org/3/search/movie?&api_key=88626d5c6ba59d5c33bd290f8a75e0a9&query=`
    function Error() {
        Seterror('please enter a movie name ;(')
        setTimeout(() => {
            Seterror('')
        }, 2000);

    }

    function Plus() {

        if (Page == 500) {
            SetPage(1)
        }
        else {
            SetPage(Page + 1)
        }

    }
    function Minus() {

        if (Page == 1) {
            SetPage(500)
        }
        else {
            SetPage(Page - 1)
        }

    }

    useEffect(() => {

        fetch(`${url}popular?api_key=${api_key}${Page}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('result', result)
                    SetMovies(result.results);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {

                    console.log(error);
                }
            )


    }, [Page])

    function HandleSubmit() {
        if (search === '') {
            Error();
            fetch(`${url}popular?api_key=${api_key}${Page}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log('result', result)
                        SetMovies(result.results);
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {

                        console.log(error);
                    }
                )
        }
        else {
            fetch(`https://api.themoviedb.org/3/search/movie?&api_key=88626d5c6ba59d5c33bd290f8a75e0a9&query=${search}&page=${SearchPage}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        if (result.results.length < 1) {

                            Seterror('Please make Sure you typing right');
                            Setsearch('');
                        } else {
                            console.log('result', result.results.length)
                            SetMovies(result.results);
                        }

                    }, (error) => {

                        console.log(error);
                    }
                )

        }




    }

    console.log('Page', Page)

    return (
        <div>

            <div className='w-full bg-black '>

                <div className='pt-8 flex' >
                    <Icon icon="si-glyph:movie-play" color="#ff4d4d" width="100" height="50" rotate={2} hFlip={true} />
                    <h2 className='text-red-600 mt-6'> My Movies </h2>

                </div>

                <div class="flex flex-row-reverse ">



                    <div>
                        <button
                            class="bg-red-500 px-3 py-1 text-md shadow-sm font-small tracking-wider  text-red-100 rounded-xl mr-14 hover:shadow-2xl hover:bg-red-800"
                            onClick={() => HandleSubmit(search)}>
                            Search
                        </button>



                    </div>
                    <div>
                        <input
                            value={search}
                            onSubmit={() => HandleSubmit(search)}
                            onChange={e => Setsearch(e.target.value)}
                            type="text"
                            placeholder="Serach..."
                            class="px-2 py-1 rounded-lg border border-red-500 text-red-400 placeholder-red-400 focus:outline-none focus:ring-2 focus:ring-red-200"
                        />
                        <div className='text-yellow-200 text-sm text-opacity-50'>
                            {error}
                        </div>
                    </div>

                </div>


            </div>


            <div className='bg-black text-yellow-200 object-contain'>

                <div className='absulote bg-yellow text-yellow sticky top-48'>
                    <button onClick={Plus}
                        class="float-right object-bottom transform hover:scale-125 duration-500   ">

                        next


                        <Icon className='' icon="topcoat:next" color="#ff293d" width="100" height="100" />
                    </button>


                    <button onClick={Minus}
                        class=" float-left transform hover:scale-125 duration-500">
                        back
                        <Icon icon="topcoat:next" color="#ff293d" width="100" height="100" hFlip={true} />
                    </button>
                </div>

                <div className='grid grid-cols-1 gap-4 ml-16 mr-16 xl:grid-cols-3 lg:grid-cols-3  md:grid-cols-2 xs:grid justify-items-center bg-black '>

                    {Movies.map((props) => {
                        return <div class="bg-black  mt-10">

                            <Link to={{
                                pathname: `/MovieProfile`,
                                state: {
                                    id: props.id,
                                    title: props.title,
                                    original_title: props.original_title,
                                    overview: props.overview,
                                    original_language: props.original_language,
                                    release_date: props.release_date,
                                    vote_average: props.vote_average,
                                    backdrop_path: props.backdrop_path,
                                    poster_path: props.poster_path

                                },
                            }}
                            >   < div class=" mx-auto overflow-visible bg-cover bg-top sm: bg-cover w-64 h-96 bg-black text-gray-200 shadow-md transform hover:scale-100 duration-500 " style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.poster_path})` }}>
                                    <div class="flex justify-between  items-center ml-4 pr-8">
                                        <div class="bg-red-600 text-white opacity-75 shadow px-2 py-1 flex items-center font-bold text-xs rounded">Rating:{props.vote_average}</div>
                                        <div class="bg-red-600 w-12 h-12 opacity-75 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full">{props.release_date.slice(0, 4)}</div>
                                    </div>
                                    <div class="bg-black opacity-75 shadow-md rounded-r-xl p-2 flex flex-col  ml-0 mt-64">
                                        <h3 class="text-xs font-bold pb-0">{props.title}</h3>
                                        <p class="truncate text-gray-500 text-sm">{props.original_language}</p>
                                        <div class="flex justify-between items-center">
                                            <span class="text-gray-400 text-xs"></span>
                                        </div>
                                    </div>
                                </div></Link>

                        </div>

                    })}


                </div>

            </div>


        </div >
    )
}


// {Movies.map((props) => {
//     return <div>

//         {props.title} <img src={`https://image.tmdb.org/t/p/w300/${props.backdrop_path}`} />
//         <Link to={{
//             pathname: `/MovieProfile`,
//             state: {
//                 id: props.id,
//                 title: props.title

//             },
//         }}
//         /> 
//     </div>
// })}
