import React from 'react';

const TableData = [
    {
        id: 1,
        name: '2x4 Drop-in-T-Bar(1/2 flex)',
        length: '100 M',
        quantity: '-'
    },
    {
        id: 2,
        name: '1x4 Surface Fluor Fixt',
        length: '-',
        quantity: '120'
    },
    {
        id: 3,
        name: '1/2 EMT DC SS Connector',
        length: '-',
        quantity: '270'
    },
    {
        id: 4,
        name: '2x4 Drop-in-T-Bar(1" flex)',
        length: '1200 M',
        quantity: '-'
    },
    {
        id: 5,
        name: '3" EMT DC SS Connector',
        length: '-',
        quantity: '500'
    },
    {
        id: 6,
        name: '2x6 Surface Fluor Fixt',
        length: '-',
        quantity: '1200'
    },

]

export default function ProjectTable() {
    return (
        <div className='px-4'>
            <div className='flex items-center justify-start space-x-1 lg:space-x-6 py-2'>

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
                            className="block w-full px-1 lg:px-14 py-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white placeholder-white lg:placeholder-slate-400 "
                            placeholder="Search projects...."
                            required
                        />
                    </div>
                </form>

                <div className='flex items-center justify-between'>
                    <h1 className='text-sm font-medium text-gray-500'>Sort by</h1>
                    <select className="ml-3 p-1 text-sm font-semibold text-gray-700 rounded-lg border border-gray-300">
                        <option value="option1" >Name</option>
                        <option value="option2">Length</option>
                        <option value="option3">Quantity</option>
                    </select>
                </div>

                <button className='flex border shadow px-6 py-1 rounded-lg text-sm font-medium text-blue-500 bg-white'>
                    <span>Import</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                    </svg>

                </button>

            </div>
            <div className="flex flex-col  border rounded-lg bg-white">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium text-gray-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-3"></th>
                                        <th scope="col" className="px-4 py-3">SI No</th>
                                        <th scope="col" className="px-4 py-3">Assembly Name</th>
                                        <th scope="col" className="lg:pl-14 py-3">Length</th>
                                        <th scope="col" className="pl-6 lg:pl-8 py-3">Quantity</th>
                                        <th scope="col" className="px-6 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {TableData.map((data) => {
                                        return (
                                            <tr key={data.id} className="border-b text-gray-700 font-medium">
                                                <td className="whitespace-nowrap px-6 py-3 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='w-6 h-6'><path d="m14.707 11.293-4-4A1 1 0 0 0 9 8v8a1 1 0 0 0 1.707.707l4-4a1 1 0 0 0 0-1.414z" data-name="Right" /></svg>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-3 ">{data.id}</td>
                                                <td className="whitespace-nowrap px-4 py-3">{data.name}</td>
                                                <td className="whitespace-nowrap text-blue-600 lg:pl-14 py-3">{data.length}</td>
                                                <td className="whitespace-nowrap text-blue-600 pl-6 lg:pl-8 py-3">{data.quantity}</td>
                                                <td className="whitespace-nowrap cursor-pointe pl-4 lg:pl-8 lg:pr-4  py-3">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        className='w-5 h-5 fill-current text-blue-700 transition-colors duration-300 transform hover:text-red-600 hover:scale-110'
                                                       
                                                    >
                                                        <path d="M5.755 20.283 4 8h16l-1.755 12.283A2 2 0 0 1 16.265 22h-8.53a2 2 0 0 1-1.98-1.717zM21 4h-5V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z" />
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