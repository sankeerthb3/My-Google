import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Results from './Results'

const Routesep = () => {
    return (
        <div>
            <div className="p-4">
                <Routes>
                    <Route index path="/search" element={<Results />} />
                    <Route path="/image" element={<Results />} />
                    <Route path="/news" element={<Results />} />
                    <Route path="/video" element={<Results />} />
                </Routes>
            </div>
        </div>
    )
}

export default Routesep