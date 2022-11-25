import React from 'react';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Roots of Equations',
        path: '#0',
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Bisection',
                path: '/Bisection',
            },
            {
                title: 'False-Position',
                path: '/False-Position',
            },
            {
                title: 'One-Point',
                path: '/One-Point',
            },
            {
                title: 'Newton Raphson',
                path: '/Newtonraphson',
            },
            {
                title: 'Secant',
                path: '/Secant',
            },
        ],
        
    },

    {
        title: 'Linear Equations',
        path: '#0',
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Test 3',
                path: '/test3',
            },
            
        ],
        
    },

    {
        title: 'Test',
        path: '#0',
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Test1',
                path: '/Test1',
            },
            {
                title: 'Test2',
                path: '/Test2',
            },
        ],
        
    },

]