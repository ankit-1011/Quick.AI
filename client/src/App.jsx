import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import BlogTitles from './pages/BlogTitles'
import WriteArticle from './pages/WriteArticle'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ai' element={<Layout/>}>
            <Route index element={<Layout/>}/>
            <Route path='write-article' element={<WriteArticle/>}/>
            <Route path='blog-titles' element={<BlogTitles/>}/>
          </Route>
      </Routes>
    </div>
  )
}

export default App