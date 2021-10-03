import { React, useEffect, useState } from 'react'
import Axios from 'axios';
import Fetch from 'fetch';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Navbar from './navbar';
import Loading from './loading';
import { InputGroup, FormControl } from 'react-bootstrap';
export default function PupolarMovies(props) {
    const api_key = '88626d5c6ba59d5c33bd290f8a75e0a9&language=enUS&page=';
    const url = 'https://api.themoviedb.org/3/movie/';
    const [Load,SerLoad] = useState(false);
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
                    SerLoad(true);
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
if(Load == false){
    return(
        <div>
            <div className='text-center text-red-500 p-5'>
                Loading please wait...
                <Loading/>
            </div>
           

        </div>
    )
}else
    return (
        <div>
            


            <div className='w-full bg-black '>

                <div className='pt-8 flex' >
                    <Icon icon="si-glyph:movie-play" color="#ff4d4d" width="100" height="50" rotate={2} hFlip={true} />
                    <h2 className='text-red-600 mt-6'> My Movies </h2>

                </div>

                <div class="flex flex-row-reverse ">




                    <div className='flex'>
                        <>
                            <InputGroup className="mb-2 mr-10">
                                <div className='flex justify-start text-white select-all'>                               
                                    {error}
                                </div>
                                <FormControl
                                    value={search}
                                    onSubmit={() => HandleSubmit(search)}
                                    onChange={e => Setsearch(e.target.value)}
                                    className='text-black rounded-md'
                                    placeholder="Search..."
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />

                                <InputGroup.Text className='text-red-200' >    <button
                                    class="border border-red-500 text-red-500 h-7 rounded-md px-4 py-0 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline"
                                    onClick={() => HandleSubmit(search)}>
                                    Search
                                </button></InputGroup.Text>
                            </InputGroup>


                        </>

                      

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

                <div className='grid grid-cols-3 gap-4 ml-16 mr-16 xl:grid-cols-3 lg:grid-cols-3  md:grid-cols-2 xs:grid justify-items-center bg-black '>

                    {Movies.map((props) => {
                        return <div class="bg-black">

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
                            >
                                <div className=''>
                                    < div class=" bg-cover bg-top  xs:w-14 xs:h-24 sm:h-96 sm:w-32 md:h-96 md:w-64 bg-yellow text-gray-200 shadow-md transform hover:scale-100 duration-500 " style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.poster_path})` }}>
                                        <div class="flex justify-between  items-center md:ml-4 xs:ml-0  pr-8 ">
                                            <div class="bg-red-600 text-white opacity-75 xs:w-18  shadow px-2 py-1 flex items-center font-bold text-xs rounded xxs:hidden md:block ">Rating:{props.vote_average}</div>
                                            <div class="bg-red-600 md:w-12 md:h-12 sm:w-8 sm:h-8 sm:mr-2 sm:text-xs opacity-75 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full xs:hidden md:block ">{props.release_date.slice(0, 4)}</div>
                                        </div>
                                        <div class="bg-black opacity-75 shadow-md rounded-r-xl p-2 flex flex-col  ml-0 mt-64  xxs:hidden md:block">
                                            <h3 class="text-xs font-bold pb-0">{props.title}</h3>
                                            <p class="truncate text-gray-500 text-sm">{props.original_language}</p>
                                            <div class="flex justify-between items-center">
                                                <span class="text-gray-400 text-xs"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

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

