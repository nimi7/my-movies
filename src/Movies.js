import React from 'react'


export default function Movies() {
    return (
        <div className='bg-black text-yellow-200 '>
            {search}
            <div className='bg-yellow text-yellow sticky top-64 '>
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
                    return <div class=" bg-black  mt-10 ">

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
                        >   < div class=" bg-cover bg-top sm: bg-cover w-72  h-96 bg-black text-gray-200 shadow-md transform hover:scale-100 duration-500 " style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.poster_path})` }}>
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
    )
}