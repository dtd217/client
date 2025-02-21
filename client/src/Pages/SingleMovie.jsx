import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import { Link, useParams } from 'react-router-dom'
import Widget from '../Components/Home/Widget'
import Stars from '../Components/Stars'
import { Breadcrumb, Progress, Space, notification } from 'antd';
import MovieRates from '../Components/Single/MovieRates'
import MovieInfo from '../Components/Single/MovieInfo'
import MovieCharacters from '../Components/Single/MovieCharacters'
import { useDispatch, useSelector } from 'react-redux'
import Movie from '../Components/Movie'
import { getAllMoviesAction, getMovieByIdAction } from '../Redux/Actions/moviesActions'
import toast from 'react-hot-toast'
import { AddBookmark, CheckIfMovieAddedBookmark } from '../Context/Functionalities'
import { userDeleteBookmarkByIdAction } from '../Redux/Actions/userActions'

const SingleMovie = () => {
   const { id } = useParams()
   const dispatch = useDispatch()
   const { movies } = useSelector((state) => state.getAllMovies)
   const { isError, movie } = useSelector((state) => state.getMovieById)
   const { isLoading } = useSelector((state) => state.userAddBookmarks)
   const { userInfo } = useSelector((state) => state.userLogin)
   const { isLoading: deleteByIdLoading } = useSelector((state) => state.userDeleteBookmarkById)

   const handleDeleteBookmarkById = (id) => {
      dispatch(userDeleteBookmarkByIdAction(id))
   }

   const handleFollow = () => CheckIfMovieAddedBookmark(movie)

   const similarMovies = movies?.filter(m =>
      m?.categories &&
      movie &&
      movie?.categories &&
      movie?.categories.length > 0 &&
      m?.categories?.includes(movie?.categories[0])
   )

   const [api, contextHolder] = notification.useNotification();
   const openNotificationWithIcon = (type) => {
      type === 'success' ?
         api[type]({
            message: 'Theo dõi',
            description: 'Bạn đã theo dõi thành công phim này',
            duration: 2,
         }) : api[type]({
            message: 'Bỏ theo dõi',
            description: 'Bạn đã bỏ theo dõi thành công phim này',
            duration: 2,
         });
   };

   useEffect(() => {
      dispatch(getMovieByIdAction(id))
      dispatch(getAllMoviesAction({}))
      if (isError) {
         toast.error(isError)
      }
   }, [dispatch, id, isError])

   return (
      <Layout>
         <div className="bg-gray-700 py-4">
            <div className="max-w-6xl p-4 mx-auto bg-black xl:rounded">
               <div className='flex justify-between lg:flex-row flex-col'>
                  <div className='relative lg:w-3/4 lg:inline-block block h-full'>
                     <Breadcrumb
                        separator=">"
                        items={[
                           { title: 'Trang chủ', href: '/' },
                           {
                              title: `${movie?.type?.includes("movie-ova") ? "Danh sách phim lẻ (Movie/OVA)" : "Danh sách phim bộ (TV/Series)"}`,
                              href: `${movie?.type?.includes("movie-ova") ? "/movie-ova" : "/tv-series"}`
                           },
                           { title: `${movie?.title}`, href: `${movie?._id}` },
                           { title: 'Thông tin' },
                        ]}
                     />
                     <div
                        className='w-full rounded-md flex flex-col h-full md:p-10 p-4 py-8 mt-4'
                        style={{
                           backgroundImage: `url(${movie?.banner})`,
                           backgroundPosition: 'center',
                           backgroundSize: 'cover',
                           backgroundRepeat: 'no-repeat',
                           backgroundBlendMode: 'darken',
                           backgroundColor: 'rgba(0, 0, 0, 0.6)',
                           backgroundOpacity: '0.5',
                        }}>
                        <header className='text-white font-semibold w-full flex justify-center items-center md:items-start h-4/5 md:flex-row flex-col'>
                           <Link to={`/watch/${movie?._id}`} className='w-48 h-72 relative toWatchPage'>
                              <img src={`${movie?.image}`} alt={movie?.title} className='rounded-md min-w-48 h-full mb-6' />
                              {contextHolder}
                              <button
                                 onClick={(e) => {
                                    e.preventDefault()
                                    openNotificationWithIcon('error')
                                    handleDeleteBookmarkById(movie?._id)
                                 }}
                                 disabled={deleteByIdLoading}
                                 className={`${handleFollow() ? 'block' : 'hidden'} w-fit px-2 py-1 bg-red-600 rounded absolute top-3 left-3 hover:bg-blue-700 z-10`}
                              ><i className="fa-solid fa-bookmark mr-2"></i>Bỏ theo dõi
                              </button>
                              <button
                                 onClick={(e) => {
                                    e.preventDefault()
                                    openNotificationWithIcon('success')
                                    AddBookmark(movie, dispatch, userInfo)
                                 }}
                                 disabled={handleFollow() || isLoading}
                                 className={`${handleFollow() ? 'hidden' : 'block'} w-fit px-2 py-1 bg-green-500 rounded absolute top-3 left-3 hover:bg-blue-700 z-10`}
                              ><i className="fa-regular fa-bookmark mr-2"></i>Theo dõi
                              </button>
                              <div className="w-full py-2 bg-red-700 bg-opacity-70 absolute top-52 uppercase flex items-center justify-center text-2xl">Xem phim</div>
                              <div div className='overlay !absolute top-0'>
                                 <div className="play-icon">
                                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 16">
                                       <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z" />
                                    </svg>
                                 </div>
                              </div>
                           </Link>
                           <div className='flex flex-col items-start md:ml-6 mx-0 md:h-72 h-96 tracking-tight justify-between'>
                              <h1 className='text-3xl font-semibold text-[#b5e745] mb-2 md:text-left text-center w-full'>{movie?.title}</h1>
                              <div className='md:text-balance text-justify h-full text-gray-400 overflow-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-red-600 scrollbar-track-slate-300 scrollbar-w-1.5'>{movie?.desc}</div>
                           </div>
                        </header>
                        <footer className='border-t relative border-gray-400 items-start md:ml-[200px] mt-6 md:mt-0 ml-0 flex flex-col xl:flex-row'>
                           <div className='flex flex-row'>
                              <div className='relative mt-2 text-white'>
                                 <Space wrap>
                                    <Progress type="circle" percent={movie?.rate * 10} size={50} strokeColor={"#b5e745"} strokeWidth={10} format={() => `${movie?.rate * 10}%`} colortext={'#b5e745'} />
                                 </Space>
                              </div>
                              <div className="flex flex-col items-center justify-center mt-2 ml-2">
                                 {/* Stars */}
                                 <div className='flex items-center w-full justify-between my-2'>
                                    <Stars value={movie?.rate} />
                                 </div>
                                 <p className='font-semibold'>(Đánh giá {movie?.rate}/10 từ {movie?.rateNumber} thành viên)</p>
                              </div>
                           </div>
                        </footer>
                     </div>
                     <div className="rounded-md mt-5">
                        <div className='border-[#b5e745] border-b-[3px] text-lg font-semibold w-fit pr-2 pb-1 text-[#b5e745]'>
                           <i className="fa-solid fa-file-lines fa-lg mr-2"></i> Thông tin phim
                        </div>
                        <div className='flex lg:flex-row flex-col bg-[#1f282c]'>
                           <MovieInfo movie={movie} />
                        </div>
                     </div>
                     <div className="rounded-md mt-5">
                        <div className='border-[#b5e745] border-b-[3px] text-lg font-semibold w-fit pr-2 pb-1 text-[#b5e745]'>
                           <i className="fa-solid fa-file-lines fa-lg mr-2"></i> Nhân vật
                        </div>
                        <div className='flex lg:flex-row flex-col bg-[#1f282c]'>
                           <MovieCharacters movie={movie} />
                        </div>
                     </div>
                     <div className="bg-gray-200 rounded mt-5 px-6 py-8">
                        <MovieRates movie={movie} />
                     </div>
                     <div className="bg-[#78909c] bg-opacity-20 size-full rounded-md mt-5 p-2">
                        <div className="border-[#b5e745] border-b-4 font-semibold w-fit mb-6 pb-2 text-lg">Phim liên quan</div>
                        <div className="grid md:grid-cols-5 sm:grid-cols-4 min-[360px]:grid-cols-2 min-[420px]:grid-cols-3 grid-cols-2 gap-4">
                           {similarMovies?.length > 0 && similarMovies?.slice(0, 5).map((movie, index) => (
                              <Movie movie={movie} key={index} />
                           ))}
                        </div>
                     </div>
                  </div>
                  <Widget />
               </div>
            </div>
         </div>
      </Layout >
   )
}

export default SingleMovie