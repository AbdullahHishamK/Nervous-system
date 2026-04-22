import React from 'react'
import './Ending.css'
import heroImg from '../../assets/asset 10.jpeg'

const Ending = () => {
  return (
    <div className="ending-container">
      {/* Hero Section */}
      <section className="hero-section">
        <img 
          src={heroImg} 
          alt="الخاتمة" 
          className="hero-image"
        />
        <div className="overlay-title">
          الخاتمة
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <h1 className="main-title">خاتمة الجهاز العصبي</h1>
        
        <div className="content-text">
          <p>
            يُعد الجهاز العصبي الأساس الرئيسي للحياة والوعي، فهو الذي يربط بين العالم الخارجي والعالم الداخلي للكائن الحي. من خلال شبكة معقدة من الخلايا العصبية، يتم تنسيق جميع وظائف الجسم وتنظيم الاستجابات للمؤثرات البيئية.
          </p>
          
          <p>
            يشكل الجهاز العصبي المركزي والمحيطي معاً نظاماً متكاملاً يضمن التوازن الداخلي للجسم ويسمح بالتكيف مع التغيرات المستمرة في البيئة المحيطة.
          </p>
          
          <p>
            فهم هذا الجهاز المعجزة هو مفتاح فهم كيفية عمل الكائنات الحية والتعامل مع اضطراباتها المختلفة.
          </p>

          <div className="quote">
            "العصبون هو وحدة الحياة والوعي"
          </div>
        </div>
      </section>
    </div>
  )
}

export default Ending

