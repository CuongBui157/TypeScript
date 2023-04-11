// Bước 1: Import thư viện react
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

// Bước 2: Khai báo DOM
const root = document.querySelector('#root')

// Bước 3: Khởi tạo React DOM
const reactRoot = ReactDOM.createRoot(root)

// Bước 4: Render
// JSX

reactRoot.render(<App />)
