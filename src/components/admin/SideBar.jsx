import React, { useState } from 'react';

const navs = [
    {
        id: 1,
        name: 'Back to Jobs',
        path: 'M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'
    },
    {
        id: 2,
        name: 'Notes',
        path: 'M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
    },
    {
        id: 3,
        name: 'Take Off',
        path: 'M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
    },
    {
        id: 4,
        name: 'Extension',
        path: 'M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
    },
    {
        id: 5,
        name: 'DiLb',
        path: 'M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
    },
    {
        id: 6,
        name: 'IncLb',
        path: 'M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
    },
    {
        id: 7,
        name: 'LbFac',
        path: 'M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
    },
    {
        id: 8,
        name: 'LbEsc',
        path: 'M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
    },
    {
        id: 9,
        name: 'IndLb',
        path: 'M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
    },
    {
        id: 10,
        name: 'Sbcon',
        path: 'M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
    },
    {
        id: 11,
        name: 'Gen Exp',
        path: 'M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
    },
    {
        id: 12,
        name: 'Qt Mat',
        path: 'M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
    },
    {
        id: 13,
        name: 'Brk Dwn',
        path: 'M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
    },
]

function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div>
            <button
                data-drawer-target="default-sidebar"
                onClick={toggleSidebar}
                aria-controls="default-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <aside
                id="default-sidebar"
                className={`fixed lg:static left-0 z-40 w-24 h-screen transition-transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full overflow-y-auto bg-gray-50">
                    <ul className="space-y-2 ">
                        {navs.map((item) => {
                            return (
                                <li key={item.id} className='p-3 flex flex-col-reverse items-center border-t text-gray-600 hover:text-white hover:bg-blue-600 hover:border-l-4 hover:border-l-orange-700'>
                                    <a
                                        href="#"
                                        className="flex items-center text-xs"
                                    >
                                        <span className="flex-1  whitespace-nowrap">{item.name}</span>

                                    </a>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={item.path} />
                                    </svg>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;
