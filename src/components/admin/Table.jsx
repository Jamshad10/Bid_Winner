import React from 'react';

const TableData = [
    {
        id: 1,
        name: 'Fixtures',
        type: 'C'
    },
    {
        id: 2,
        name: 'Switches',
        type: 'C'
    },
    {
        id: 3,
        name: 'Receptacles',
        type: 'C'
    },
    {
        id: 4,
        name: 'Computer & Phone',
        type: 'C'
    },
    {
        id: 5,
        name: 'Fire Alarm',
        type: 'C'
    },
    {
        id: 6,
        name: 'EMT (Branch)',
        type: 'C'
    },
    {
        id: 7,
        name: 'EMT (Feeder)',
        type: 'C'
    },
    {
        id: 8,
        name: 'GRC (Feeder)',
        type: 'C'
    },
    {
        id: 9,
        name: 'GRC (Branch)',
        type: 'C'
    },
    {
        id: 10,
        name: 'Cable (Branch)',
        type: 'C'
    },
    {
        id: 11,
        name: 'Cable (Feeder)',
        type: 'C'
    },
    {
        id: 12,
        name: 'Services',
        type: 'C'
    },
    {
        id: 13,
        name: 'Panels',
        type: 'C'
    },
    {
        id: 14,
        name: 'Manual Disconnects',
        type: 'C'
    },
]

export default function Table() {
    return (
        <div className='px-4 lg:my-6 '>
            <div className='flex items-center justify-between pl-2'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className='w-5 h-5 mt-3'
                >
                    <path d="M10.018 18v-5h10V5h-10V0L0 8.939 10.018 18z" />
                </svg>
                <h1 className='p-2 mt-1 lg:mr-14 text-base font-semibold'>

                    <span>Categories</span>
                </h1>

                <form className='px-2 lg:px-0 py-2'>
                    <div className="relative ">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 "
                            placeholder="Search Categories"
                            required
                        />
                    </div>
                </form>

            </div>
            <div className="flex flex-col  border rounded-lg bg-white">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium text-gray-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 whitespace-nowrap">SI No</th>
                                        <th scope="col" className="px-4 py-3">Name</th>
                                        <th scope="col" className="lg:pl-14 py-3">Type</th>
                                        <th scope="col" className="px-6 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TableData.map((data) => {
                                        return (
                                            <tr key={data.id} className="border-b text-gray-700 font-medium">
                                                <td className="whitespace-nowrap px-6 py-3 ">{data.id}</td>
                                                <td className="whitespace-nowrap px-4 py-3">{data.name}</td>
                                                <td className="whitespace-nowrap lg:pl-14 py-3">{data.type}</td>
                                                <td className="whitespace-nowrap lg:px-3  py-3">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className='w-4 h-5'
                                                        viewBox="0 0 19.99 18"
                                                        fill='blue'
                                                    >
                                                        <path d="M10.029 5H0v7.967h10.029V18l9.961-9.048L10.029 0v5z" />
                                                    </svg>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}