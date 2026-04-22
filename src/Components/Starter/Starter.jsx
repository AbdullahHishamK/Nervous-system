import React from 'react'
import './Starter.css'

const Starter = () => {
  return (
    <div className="starter-container">
      {/* Hero Section with Overlay Title */}
      <section className="hero-section">
        <img 
          src="/asset10-hero.jpg" 
          alt="المقدمة" 
          className="hero-image"
        />



        <div className="overlay-title">المقدمة</div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <img 
          src="/starter.png.png" 
          alt="الجهاز التنفسي" 
          className="content-image"
        />

        <h2 className="section-title">مقدمة عن الجهاز التنفسي للإنسان</h2>
        <div className="text-content">
          الجهاز التنفسي هو الجهاز المسؤول عن إدخال الأكسجين إلى الجسم وإخراج ثاني أكسيد الكربون. 
          يتكون من عدة أجزاء: الأنف، الحنجرة، القصبة الهوائية، والشعب الهوائية، بالإضافة إلى الرئتين. 
          من خلال هذا الجهاز، يتم تبادل الغازات الضرورية لبقائنا.
        </div>
      </section>
    </div>
  )
}

export default Starter

