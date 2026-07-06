import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import CreateStu from '../curd/CreateStu'
import ViewAll from '../curd/ViewAll'
import PageNotFound from '../curd/PageNotFound'
import ViewMore from '../curd/ViewMore'
import Updatestu from '../curd/Updatestu'


export const routing = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<CreateStu/>
            },
            {
                path:"/viewall",
                element:<ViewAll/>
            },
            {
                path:"/viewmore/:id",
                element:<ViewMore/>
            },
            {
                path:"/edit/:id",
                element:<Updatestu/>
            },
            {
                path:"*",
                element:<PageNotFound/>
            }
        ]
    }
]) 
