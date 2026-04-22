import React from 'react'
import './Home.css'
import heroImg from '../../assets/asset 10.jpeg'

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <img 
          src={heroImg} 
          alt="الجهاز العصبي" 
          className="heroimage"
        />
        <div className="overlay-title">الجهاز العصبي</div>
      </section>


      {/* Student Section */}
      <section className="student-section">
        <div className="student-overlay"></div>
        <div className="student-container">
          <div className="student-card">
            <h2 className="student-title">معلومات الطالب</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
              <div className="info-card name">
                <div className="info-label">الاسم:</div>
                <div className="info-value">محمد أحمد فاروق الأشوح</div>
              </div>
              <div className="info-card subject">
                <div className="info-label">الفرقه: </div>
                <div className="subject-value">الثانيه</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Image Section */}
      <section className="final-section">
        <div className="final-image-container">
          <img 
            src="/asset9-final.png" 
            alt="الجهاز العصبي الختامي" 
            className="final-image"
          />


          <div className="final-overlay">
            استكشف الجهاز التنفسي
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

