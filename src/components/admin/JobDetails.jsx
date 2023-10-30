import React, { useState } from 'react';

function JobDetails() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
   
    return (
        <div className='w-full my-10'>
            <div className='flex items-center justify-between'>
                <h1 className='text-base font-bold py-2'>Job</h1>
                <div className='flex'>
                    <h2 className='text-sm text-gray-500'>Quote Status</h2>
                    <select className="ml-2 px-2 text-xs bg-green-600 text-white rounded-full border">
                        <option value="option1" className='bg-white text-gray-800'>Accepted</option>
                        <option value="option2" className='bg-white text-gray-800'>Pending</option>
                        <option value="option3" className='bg-white text-gray-800'>Rejected</option>
                    </select>
                </div>
            </div>
            <div className="max-w-full p-2 lg:p-4 text-left bg-white border border-gray-200 rounded-lg flex items-center justify-between  ">
                <div className='flex flex-col'>
                    <div className='w-full flex items-center  justify-between py-2'>
                        <h5 className="mb-2 text-sm text-left font-medium text-gray-500 whitespace-nowrap">Job Name</h5>
                        <h3 className=' lg:pl-8 text-sm font-semibold text-left whitespace-nowrap'>Test Project1</h3>
                    </div>

                    <div className='w-full flex space-x-10  items-center justify-between  py-2'>
                        <h5 className="mb-2 text-sm text-left font-medium text-gray-500 whitespace-nowrap">Job Number</h5>
                        <h5 className=' lg:pl-8 text-sm font-semibold text-left whitespace-nowrap'>#ABV237668</h5>
                    </div>

                    <div className='w-full flex text-left   items-center justify-between py-2'>
                        <div className='w-full flex  items-center justify-between'>
                            <h5 className="mb-2 text-sm text-left font-medium text-gray-500 whitespace-nowrap">Unit</h5>
                            <div className="flex border rounded-full text-left whitespace-nowrap ">
                                <button
                                    type="button"
                                    className="hover:bg-blue-500 shadow-sm text-xs rounded-full text-gray-500 hover:text-white font-medium py-2 px-3"
                                >
                                    Metric
                                </button>
                                <button
                                    type="button"
                                    className="hover:bg-blue-500 shadow-sm text-xs text-gray-500 hover:text-white font-medium rounded-full py-2 px-6"
                                >
                                    US
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className='w-full flex   items-center justify-between py-2'>
                        <div className='w-full flex  items-center justify-between'>
                            <h5 className="mb-2 text-sm text-left font-medium text-gray-500 whitespace-nowrap">Level</h5>
                            <div className="relative inline-block text-left ">
                                <button
                                    id="dropdownDefaultButton"
                                    onClick={toggleDropdown}
                                    className="text-gray-600 bg-white border font-medium rounded-lg text-sm flex items-center px-3 py-1"
                                    type="button"
                                >
                                    <span>High</span>
                                    <svg
                                        className="w-2.5 h-2.5 ml-16"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>

                                {/* Dropdown menu */}
                                {isOpen && (
                                    <div className="absolute right-0 mt-2 w-32 bg-white divide-y divide-gray-100 rounded-lg shadow">
                                        <ul className="py-2 text-sm text-gray-700">
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                                    Normal
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                                    Low
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:ml-64'>
                    <button className="bg-blue-800 hover:bg-blue-700 text-white text-sm font-medium py-1 px-4 rounded whitespace-nowrap my-3 shadow">
                        Job Details
                    </button>
                    <button className="bg-blue-800 hover:bg-blue-700 text-white text-sm font-medium py-1 px-4 rounded whitespace-nowrap my-3 shadow">
                        Job Details
                    </button>
                    <button className="bg-white border hover:bg-blue-700 text-blue-700 hover:text-white text-sm font-medium py-1 px-4 rounded whitespace-nowrap my-3 shadow">
                        Job Details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default JobDetails;
