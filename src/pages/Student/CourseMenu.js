import React from "react";
import { NavLink, useLocation } from 'react-router-dom';
import HTML from '../../images/logo/htmlhacker.jpg';
import CSS from '../../images/logo/csshacker.jpg';
import JAVASCRIPT from '../../images/logo/jshacker.jpg';
import JAVA from '../../images/logo/javahacker.jpg';
import PYTHON from '../../images/logo/pythonhacker.jpg';
const Coursemenu = () =>{
    const location = useLocation();
    const { pathname } = location;
    return(
        <>
            <div className="flex h-screen">

                <div className="w-1/4 bg-blue-500 p-4">
                    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-">
                        <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
                            Course
                        </h4>
                        <ul className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
                            <li>
                                <NavLink
                                    to="/calendar"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                        pathname.includes('calendar') 
                                    }`}
                                >
                                    {/* <img src={HTML} alt="html" height={12} width={40}/> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>
                                    HTML
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/calendar"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                        pathname.includes('calendar') 
                                    }`}
                                >
                                    {/* <img src={CSS} alt="css" height={10} width={35}/> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>
                                    CSS
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/calendar"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                        pathname.includes('calendar') 
                                    }`}
                                >
                                    {/* <img src={JAVASCRIPT} alt="css" height={10} width={39}/> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>
                                    JAVASCRIPT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/calendar"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                        pathname.includes('calendar') 
                                    }`}
                                >
                                    {/* <img src={JAVA} alt="java" height={10} width={43}/> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>
                                    JAVA
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/calendar"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                        pathname.includes('calendar') 
                                    }`}
                                >
                                    {/* <img src={PYTHON} alt="python" height={10} width={43}/> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>

                                    PYTHON
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/calendar"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                        pathname.includes('calendar') 
                                    }`}
                                >
                                    {/* <img src={PYTHON} alt="python" height={10} width={43}/> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>

                                    RUBY
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                    
                    
                </div>


                <div className="w-3/4 bg-green-800 p-4">
                    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
                        <h4 className="mb-6 px-7.5 text-xl font-semibold text-black dark:text-white">
                            Courses
                        </h4>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-rows-2 2xl:gap-7.5 pl-3 pr-3">

                            <div className="rounded-sm border border-stroke bg-white py-6 px-7.5  shadow-default dark:border-strokedark dark:bg-boxdark">
                                <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                                    <svg
                                    className="fill-primary dark:fill-white"
                                    width="22"
                                    height="16"
                                    viewBox="0 0 22 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                                        fill=""
                                    />
                                    <path
                                        d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                                        fill=""
                                    />
                                    </svg>
                                </div>

                                <div className="mt-4 flex items-end justify-between">
                                    <div>
                                    <h4 className="text-title-md font-bold text-black dark:text-white">
                                        $3.456K
                                    </h4>
                                    <span className="text-sm font-medium">Total views</span>
                                    </div>

                                    <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
                                    0.43%
                                    <svg
                                        className="fill-meta-3"
                                        width="10"
                                        height="11"
                                        viewBox="0 0 10 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                        d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                                        fill=""
                                        />
                                    </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
                                <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                                    <svg
                                    className="fill-primary dark:fill-white"
                                    width="22"
                                    height="16"
                                    viewBox="0 0 22 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                                        fill=""
                                    />
                                    <path
                                        d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                                        fill=""
                                    />
                                    </svg>
                                </div>

                                <div className="mt-4 flex items-end justify-between">
                                    <div>
                                    <h4 className="text-title-md font-bold text-black dark:text-white">
                                        $3.456K
                                    </h4>
                                    <span className="text-sm font-medium">Total views</span>
                                    </div>

                                    <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
                                    0.43%
                                    <svg
                                        className="fill-meta-3"
                                        width="10"
                                        height="11"
                                        viewBox="0 0 10 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                        d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                                        fill=""
                                        />
                                    </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
                                <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                                    <svg
                                    className="fill-primary dark:fill-white"
                                    width="22"
                                    height="16"
                                    viewBox="0 0 22 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                                        fill=""
                                    />
                                    <path
                                        d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                                        fill=""
                                    />
                                    </svg>
                                </div>

                                <div className="mt-4 flex items-end justify-between">
                                    <div>
                                    <h4 className="text-title-md font-bold text-black dark:text-white">
                                        $3.456K
                                    </h4>
                                    <span className="text-sm font-medium">Total views</span>
                                    </div>

                                    <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
                                    0.43%
                                    <svg
                                        className="fill-meta-3"
                                        width="10"
                                        height="11"
                                        viewBox="0 0 10 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                        d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                                        fill=""
                                        />
                                    </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
                                <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                                    <svg
                                    className="fill-primary dark:fill-white"
                                    width="22"
                                    height="16"
                                    viewBox="0 0 22 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                                        fill=""
                                    />
                                    <path
                                        d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                                        fill=""
                                    />
                                    </svg>
                                </div>

                                <div className="mt-4 flex items-end justify-between">
                                    <div>
                                    <h4 className="text-title-md font-bold text-black dark:text-white">
                                        $3.456K
                                    </h4>
                                    <span className="text-sm font-medium">Total views</span>
                                    </div>

                                    <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
                                    0.43%
                                    <svg
                                        className="fill-meta-3"
                                        width="10"
                                        height="11"
                                        viewBox="0 0 10 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                        d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                                        fill=""
                                        />
                                    </svg>
                                    </span>
                                </div>
                            </div>
                            <h1>fff</h1>
                            <h1>fff</h1>
                            
                        </div>

                    </div>
                    
                </div>
            </div>
            
        </>
    )
};

export default Coursemenu;