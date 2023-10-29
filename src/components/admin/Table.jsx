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
        <div className="flex flex-col lg:ml-32 my-6 border rounded-lg">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium text-gray-500">
                                <tr>
                                    <th scope="col" className="px-6 py-3">SI No</th>
                                    <th scope="col" className="px-4 py-3">Name</th>
                                    <th scope="col" className="pl-14 py-3">Type</th>
                                    <th scope="col" className="px-6 py-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {TableData.map((data) => {
                                    return (
                                        <tr key={data.id} className="border-b text-gray-700 font-medium">
                                            <td className="whitespace-nowrap px-6 py-3 ">{data.id}</td>
                                            <td className="whitespace-nowrap px-4 py-3">{data.name}</td>
                                            <td className="whitespace-nowrap px-14 py-3">{data.type}</td>
                                            <td className="whitespace-nowrap  py-3">
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
    );
}