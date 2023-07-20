import './index.css'
import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
const LazyDetailsPage = React.lazy(() => import('./pages/DetailsPage'))
const LazyStorePage = React.lazy(() => import('./pages/StorePage'))
const LazySearchPage = React.lazy(() => import('./pages/SearchPage'))
const LazyPageNotFound = React.lazy(() => import('./components/PageNotFound'))
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/details" element={
            <React.Suspense fallback={""}>
              <LazyDetailsPage />
            </React.Suspense>
          } />
          <Route path="/search" element={
            <React.Suspense fallback={""}>
              <LazySearchPage />
            </React.Suspense>
          } />
          <Route path="/store" element={
            <React.Suspense fallback={""}>
              <LazyStorePage />
            </React.Suspense>
          } />
          <Route path="/*" element={
            <React.Suspense fallback={""}>
              <LazyPageNotFound />
            </React.Suspense>
          } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
