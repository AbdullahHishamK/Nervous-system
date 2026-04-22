import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <NavLink to="/" className="logo">
            <div className="logo-icon"></div>
            الصف الخامس الابتدائي
          </NavLink>

          <div className="nav-menu">
            <NavLink 
              to="/home" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              🏠 الصفحة الرئيسية
            </NavLink>
            <NavLink 
              to="/starter" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              🚀 المقدمة
            </NavLink>
            <NavLink 
              to="/exam" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              📝 الاختبار
            </NavLink>
            <NavLink 
              to="/explination" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              💡 الشرح
            </NavLink>
            <NavLink 
              to="/ending" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              🎉 الخاتمة
            </NavLink>
          </div>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-links">
            <NavLink 
              to="/home" 
              className={({ isActive }) => `mobile-nav-link nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              🏠 Home
            </NavLink>
            <NavLink 
              to="/starter" 
              className={({ isActive }) => `mobile-nav-link nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              🚀 Starter
            </NavLink>
            <NavLink 
              to="/exam" 
              className={({ isActive }) => `mobile-nav-link nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              📝 Exam
            </NavLink>
            <NavLink 
              to="/explination" 
              className={({ isActive }) => `mobile-nav-link nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              💡 Explanation
            </NavLink>
            <NavLink 
              to="/ending" 
              className={({ isActive }) => `mobile-nav-link nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              🎉 Ending
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

