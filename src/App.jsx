
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './components/Main'
import SignIn from './components/SignIn'
import Header from './layouts/Header'
import ProductList from './components/ProductList'
import ProductInfo from './components/ProductInfo'
import AddProduct from './components/AddProduct'
import { useState } from 'react'

function App() {
  // 로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인한 사용자 ID 관리
  const [ username, setUsername ] = useState('');

  // 로그인 핸들러
  const handleLogin = (username) => {
    setIsLoggedIn(true);  //로그인 성공시 상태 업데이트
    setUsername(username); // 로그인한 사용자ID 저장
  }

  // 로그아웃 핸들러
  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <>
      <section className="app">
      <BrowserRouter>
        {/* 헤더 영역 */}
        <Header 
          isLoggedIn={isLoggedIn}
          username={username}
          onLogout={handleLogout}
        />

        {/* 본문 영역 */}
        <div className='contents'>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/products' element={<ProductList />} />
            {/* :id -> URL에서 동적으로 변하는 부분을 나타냄 */}
            {/* 예) /products/2 */}
            <Route path='/products/:id' element={<ProductInfo />} />
            <Route path='/add-product' element={<AddProduct />} />
            <Route path='/sign-in' element={<SignIn onLogin={handleLogin} />} />
          </Routes>
        </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
