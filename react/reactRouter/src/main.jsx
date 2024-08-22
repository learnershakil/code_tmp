import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import {Layout, Home, About, Contact, User, Github, GithubInfo} from './index'




// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [{
//       path: "",
//       element: <Home />
//     },{
//       path: "about",
//       element: <About />
//     },{
//       path: "Contact-Us",
//       element: <Contact />
//     }]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />}/>
      <Route path='About' element={<About />}/>
      <Route path='Contact-Us' element={<Contact />}/>
      <Route loader={GithubInfo} path='Github' element={<Github />}/>
      <Route path='User/:UserId' element={<User />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
