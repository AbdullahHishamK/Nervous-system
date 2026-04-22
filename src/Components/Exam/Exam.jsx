import React, { useState } from 'react'
import './Exam.css'
import heroImg from '../../assets/asset 10.jpeg'

const Exam = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const questions = [
    {
      type: 'text',
      question: 'اكتب فقرة قصيرة تشرح فيها أهمية الماء للكائنات الحية',
      answer: 'لا يوجد إجابة صحيحة محددة'
    },
    {
      type: 'radio',
      question: 'يدخل الهواء إلى الجسم عن طريق:',
      options: ['المعدة', 'الرئتين', 'الأنف', 'القلب'],
      correct: 2
    },
    {
      type: 'checkbox',
      question: 'أيٌّ مما يلي يُعد من مصادر الطاقة المتجددة؟ (اختاري جميع الإجابات الصحيحة)',
      options: ['الطاقة الشمسية', 'طاقة الرياح', 'البترول', 'الفحم', 'المياه الجارية (الطاقة المائية)'],
      correct: [0, 1, 4]
    },
    {
      type: 'dropdown',
      question: 'ند تسخين الماء فإنه يتحول إلى:',
      options: ['ثلج', 'هواء', 'بخار ماء', 'زيت'],
      correct: 2
    },
    {
      type: 'scale',
      question: 'مدى قدرتك في فهم الدرس والتطبيق',
      scale: 5
    },
    {
      type: 'table-radio',
      question: 'حدد حالة كل مادة مما يلي:',
      columns: ['صلب', 'سائل', 'غاز'],
      rows: ['الثلج', 'الماء', 'الهواء', 'الزيت'],
      correct: [0, 1, 2, 1]
    },
    {
      type: 'table-checkbox',
      question: 'حدد الجهاز المناسب لكل عضو:',
      columns: ['الجهاز التنفسي', 'الجهاز الهضمي', 'الجهاز الدوري'],
      rows: ['الأنف', 'المعدة', 'القلب', 'الرئتان'],
      correct: [0, 1, 2, 0]
    },
    {
      type: 'scale-stars',
      question: 'ما هو تقييمك للإختبار',
      scale: 5
    },
    {
      type: 'text',
      question: 'ما الذي تعلمته من هذا الدرس؟',
      answer: 'إجابة مفتوحة'
    },
    {
      type: 'radio',
      question: 'ما هي الوحدة الأساسية للجهاز العصبي؟',
      options: ['الخلية العصبية', 'الدماغ', 'النخاع الشوكي', 'العصب'],
      correct: 0
    }
  ]

  const handleSubmit = () => {
    setShowAnswer(true)
  }

  const nextQuestion = () => {
    setCurrentQuestion(prev => prev + 1)
    setShowAnswer(false)
  }

  const q = questions[currentQuestion]

  return (
    <div className="exam-container">
      <section className="hero-section">
        <img src={heroImg} alt="الاختبار" className="hero-image" />
        <div className="overlay-title">الاختبار</div>
      </section>

      <section className="exam-section">
        <h1 className="exam-title">اختبار الجهاز العصبي</h1>
        
        <div className="form-container">
          <div className="question-header">
            <h2>السؤال {currentQuestion + 1} من {questions.length}</h2>
          </div>

          <div className="question-content">
            <h3 className="question-text">{q.question}</h3>

            {!showAnswer ? (
              <div className="answer-input">
                {q.type === 'text' && (
                  <div>
                    <textarea 
                      className="text-input" 
                      placeholder="اكتب إجابتك هنا..."
                    />
                    <button className="submit-btn" onClick={handleSubmit}>
                      إرسال الإجابة
                    </button>
                  </div>
                )}

                {q.type === 'radio' && (
                  <div className="options-list">
                    {q.options.map((option, index) => (
                      <label key={index} className="option-label">
                        <input 
                          type="radio" 
                          name={`q${currentQuestion}`}
                          className="radio-input"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                    <button className="submit-btn" onClick={handleSubmit}>
                      التحقق
                    </button>
                  </div>
                )}

                {q.type === 'checkbox' && (
                  <div className="options-list">
                    {q.options.map((option, index) => (
                      <label key={index} className="option-label">
                        <input 
                          type="checkbox" 
                          className="checkbox-input"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                    <button className="submit-btn" onClick={handleSubmit}>
                      التحقق
                    </button>
                  </div>
                )}

                {q.type === 'dropdown' && (
                  <div>
                    <select className="dropdown-input">
                      {q.options.map((option, index) => (
                        <option key={index} value={index}>{option}</option>
                      ))}
                    </select>
                    <button className="submit-btn" onClick={handleSubmit}>
                      التحقق
                    </button>
                  </div>
                )}

                {q.type === 'scale' && (
                  <div className="scale-container">
                    <div className="scale-labels">
                      <span>ضعيف جداً</span>
                      <span>ممتاز</span>
                    </div>
                    <div className="scale-options">
                      {[...Array(q.scale)].map((_, i) => (
                        <label key={i} className="scale-label">
                          <input type="radio" name={`scale${currentQuestion}`} />
                          <span className="scale-circle">{i + 1}</span>
                        </label>
                      ))}
                    </div>
                    <button className="submit-btn" onClick={handleSubmit}>
                      إرسال
                    </button>
                  </div>
                )}

                {q.type === 'table-radio' && (
                  <div className="table-container">
                    <table className="exam-table">
                      <thead>
                        <tr>
                          <th>المادة</th>
                          {q.columns.map((col, i) => <th key={i}>{col}</th>)}
                        </tr>
                      </thead>
                      <tbody>
                        {q.rows.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            <td>{row}</td>
                            {q.columns.map((_, colIndex) => (
                              <td key={colIndex}>
                                <input type="radio" name={`row${rowIndex}`} className="table-radio" />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <button className="submit-btn" onClick={handleSubmit}>
                      التحقق
                    </button>
                  </div>
                )}


                {q.type === 'table-checkbox' && (
                  <div className="table-container">
                    <table className="exam-table checkbox-table">
                      <thead>
                        <tr>
                          <th></th>
                          {q.columns.map((col, i) => <th key={i}>{col}</th>)}
                        </tr>
                      </thead>
                      <tbody>
                        {q.rows.map((row, rowIndex) => (
                          <tr key={rowIndex}>
                            <td>{row}</td>
                            {q.columns.map((_, colIndex) => (
                              <td key={colIndex}>
                                <input type="checkbox" />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <button className="submit-btn" onClick={handleSubmit}>
                      التحقق
                    </button>
                  </div>
                )}

                {q.type === 'scale-stars' && (
                  <div className="scale-container stars-scale">
                    <div className="scale-labels">
                      <span>غير راضي</span>
                      <span>راضي جداً</span>
                    </div>
                    <div className="scale-options">
                      {[...Array(q.scale)].map((_, i) => (
                        <label key={i} className="scale-label">
                          <input type="radio" name={`stars${currentQuestion}`} />
                          <span className="scale-star">⭐</span>
                        </label>
                      ))}
                    </div>
                    <button className="submit-btn" onClick={handleSubmit}>
                      تقييم
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="answer-reveal">
                <div className="correct-answer">
                  <h4>الإجابة الصحيحة:</h4>
{q.answer ? (
                    <p>{q.answer}</p>
                  ) : q.type === 'text' ? (
                    <p>تم حفظ إجابتك</p>
                  ) : q.correct !== undefined && q.options ? (
                    <p>{Array.isArray(q.correct) ? q.correct.map(i => q.options[i]).join(', ') : q.options[q.correct]}</p>
                  ) : (
                    <p>تم حفظ إجابتك</p>
                  )}

                </div>
                {currentQuestion < questions.length - 1 && (
                  <button className="next-btn" onClick={nextQuestion}>
                    السؤال التالي →
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Exam

