import React, { useState } from "react";
import CreateCoursePopup from './CreateCoursePopup';
import { Link } from 'react-router-dom';

const  Createcourse = () =>{
    const [popupopen,setPopupopen] = useState(false);
    const [coursename,setCoursename] = useState('');
    const [selectlanguage, setSelectlanguage] = useState('');
    const handleCreateSection = ()=>{
        setCoursename('');
        setSelectlanguage('');
        setPopupopen(true);
    }
    const submitCreateCourse = () =>{
        console.log(coursename,selectlanguage)
        setPopupopen(false)
    }

    return (
        <>
            {popupopen ==  false &&(
                <Link
                to="#"
                className="inline-flex items-center justify-center gap-2.5 bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                onClick={handleCreateSection}
                >
                Create New Course
                </Link>
            )}
            {popupopen ==  true &&(
                <div>
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Create Course
                            </h3>
                        </div>
                
                        <form className="flex flex-col gap-5.5 p-6.5" onSubmit={submitCreateCourse}>
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Course Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Course Name"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    required 
                                    value={coursename}
                                    onChange={(e)=>setCoursename(e.target.value)}
                                />
                            </div>
                
                            <div>
                                <label className="mb-3 block text-black dark:text-white">
                                    Select Language
                                </label>
                                <select
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    required // This makes the select dropdown required
                                    onChange={(e)=>setSelectlanguage(e.target.value)}
                                >
                                    <option value="">Select Language</option>
                                    <option value="haml">HAML</option>
                                    <option value="java">Java</option>
                                    <option value="python">Python</option>
                                    <option value="ruby">Ruby</option>
                                    <option value="javascript">JavaScript</option>
                                </select>
                            </div>
                
                            {/* <div className="flex items-center">
                                <label className="mb-3 block text-black dark:text-white mr-4">
                                    Enable Feature
                                </label>
                                <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                    <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                    <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                                </div>
                            </div> */}
                
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            
            )}
            
        </>
    )
};
export default Createcourse;