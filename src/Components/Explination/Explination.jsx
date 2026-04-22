import React from 'react'
import './Explination.css'

const Explination = () => {
  return (
    <div className="explination-container">
      {/* Hero Section - same as Starter */}
      <section className="hero-section">
        <img 
          src="/src/assets/asset 10.jpeg" 
          alt="الجهاز التنفسي" 
          className="hero-image"
        />

        <div className="overlay-title">🫁 الجهاز التنفسي للإنسان <br/>(شرح مبسط ومفصل)</div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <h1 className="main-title">🫁 الجهاز التنفسي للإنسان</h1>
        
        <div className="content-grid">
          {/* Intro */}
          <div className="content-block">
            <span className="block-emoji">🌬️</span>
            <h3 className="block-title">الجهاز التنفسي هو أحد أهم أجهزة جسم الإنسان</h3>
            <p className="block-text">
              لأنه المسؤول عن عملية التنفس التي نحتاجها لكي نعيش. فعندما نتنفس، يدخل الهواء 
              إلى جسمنا محمّلًا بـ الأكسجين، وهو غاز مهم يساعد الجسم على إنتاج الطاقة، 
              ويخرج غاز آخر يسمى ثاني أكسيد الكربون وهو غاز ضار يجب التخلص منه.
            </p>
          </div>

          {/* Breathing Process */}
          <div className="content-block">
            <span className="block-emoji">🌬️</span>
            <h3 className="block-title">كيف تتم عملية التنفس؟</h3>
            <p className="block-text">تحدث عملية التنفس على مرحلتين:</p>
            
            <div className="list-item">
              <span className="number-badge">1️⃣</span>
              <div>
                <strong>الشهيق (دخول الهواء)</strong>
                <p className="block-text">يدخل الهواء من الأنف أو الفم • يمر عبر القصبة الهوائية • يصل إلى الرئتين</p>
              </div>
            </div>
            
            <div className="list-item">
              <span className="number-badge">2️⃣</span>
              <div>
                <strong>الزفير (خروج الهواء)</strong>
                <p className="block-text">يخرج ثاني أكسيد الكربون من الرئتين • يخرج الهواء من الأنف أو الفم</p>
              </div>
            </div>
          </div>

          {/* Components */}
          <div className="content-block">
            <span className="block-emoji">🧠</span>
            <h3 className="block-title">مكونات الجهاز التنفسي</h3>
            <div className="list-item">
              <span className="block-emoji">👃</span>
              <div className="block-text">الأنف: أول طريق لدخول الهواء، ينقي الهواء من الأتربة والجراثيم</div>
            </div>
            <div className="list-item">
              <span className="block-emoji">🗣️</span>
              <div className="block-text">الحنجرة: تساعد في إصدار الصوت، تمر من خلالها الهواء</div>
            </div>
            <div className="list-item">
              <span className="block-emoji">🫧</span>
              <div className="block-text">القصبة الهوائية: أنبوب ينقل الهواء إلى الرئتين</div>
            </div>
            <div className="list-item">
              <span className="block-emoji">🌿</span>
              <div className="block-text">الرئتان: أهم جزء في الجهاز التنفسي، يحدث بداخلهما تبادل الغازات</div>
            </div>
          </div>

          {/* Lung Alveoli */}
          <div className="content-block">
            <span className="block-emoji">🔬</span>
            <h3 className="block-title">ماذا يحدث داخل الرئتين؟</h3>
            <p className="block-text">
              داخل الرئتين توجد أكياس صغيرة جدًا تسمى الحويصلات الهوائية، وهي:
            </p>
            <ul className="simple-list">
              <li>تمتلئ بالأكسجين</li>
              <li>ينقل الدم الأكسجين منها إلى جميع أجزاء الجسم</li>
              <li>يستقبل منها ثاني أكسيد الكربون ليتم التخلص منه</li>
            </ul>
          </div>

          {/* Importance */}
          <div className="content-block">
            <span className="block-emoji">💡</span>
            <h3 className="block-title">أهمية الجهاز التنفسي</h3>
            <ul className="simple-list">
              <li>يمد الجسم بالأكسجين</li>
              <li>يخلص الجسم من الغازات الضارة</li>
              <li>يساعدنا على الكلام والصوت</li>
              <li>يحافظ على نشاط الجسم</li>
            </ul>
          </div>

          {/* Care Tips */}
          <div className="content-block">
            <span className="block-emoji">⚠️</span>
            <h3 className="block-title">كيف نحافظ على الجهاز التنفسي؟</h3>
            <ul className="simple-list">
              <li>الابتعاد عن التدخين</li>
              <li>تجنب الغبار والتلوث</li>
              <li>ممارسة الرياضة</li>
              <li>التنفس من الأنف بدل الفم</li>
            </ul>
          </div>
        </div>

        {/* Links Section */}
        <div className="links-section">
          <h3 className="section-subtitle">📚 موارد إضافية</h3>
          <a href="https://www.youtube.com/watch?v=67Jbbu7UZAA" target="_blank" rel="noopener noreferrer" className="video-link">
            🎥 فيديو شرح تفصيلي
          </a>
          <div className="links-row">
            <a href="https://www.britannica.com/science/respiratory-system" target="_blank" rel="noopener noreferrer" className="source-link">
              Encyclopaedia Britannica
            </a>
            <a href="https://kidshealth.org/en/kids/lungs.html" target="_blank" rel="noopener noreferrer" className="source-link">
              KidsHealth
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Explination

