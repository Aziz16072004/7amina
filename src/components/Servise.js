import wiqayaImg from '../img/enGroupe.jpg';
import ailej from '../img/groupe.jpg';
function Servise (){
    return(
<div className='container'>
    <div className="service ">
        <div className="wiqaya row w-100 gap-0">
            
            <div className="content wiqaya-content col-12 col-md-5 col-lg-8 ">
                <h1>الوقاية :</h1>
                <p>.حوار اجتماعي :
                    تحت إشراف ممدوح عز الدين تجاوب على الاسئلة
                    مدونة : <br/>
                    مقالات للتعليم : <br/>
                    
                    + فرق التعامل في حالة العنف
                    <br/>    
                    + كيفية احتواء الضعيف </p>
            </div>
            <div className="image col-12 col-md-7 col-lg-4 ">
                <img src={wiqayaImg}  />
            </div>
        </div>

        
        <div className="ailej w-100 row gap-0">
        
            <div className="col-12 col-md-5 col-lg-8 ">
            <h1>العلاج :</h1>
            <p>.العلاج الجماعي : <br/>
                لمشاركة التجارب للمعنفين و المعنفين بحضور عالم اجتماع . <br/>
                + عن بعد : عن طريق google meet <br/>
                + حضوريا : بدار الشباب الحرايرية
                
            </p>
            </div>
            <div className="image col-12 col-md-7 col-lg-4">
                <img src={ailej} />
            </div>
        </div>
    </div>
    </div>
    )
}
export default Servise