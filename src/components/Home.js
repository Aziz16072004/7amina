import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home(){
    return(
        <div className='container home'>
        <section className="row">
        
                <div className="introduction col-12 col-md-6 d-flex"> 
                    <p className='display-2 '>
                عسلامة  <br/>  الويب سايت متاعنا هو حاضنة و أرضية مشتركة للمعنف
            و لفتح باب بين الطرفين        
                    </p>
                </div>
        
        <form action="#" method="P" id="f" className="col-12 col-md-6">
            <div  className="info-name row w-100">
                <div className="name col-12 col-md-5 bord">
                    <p> الاسم </p>
                    <p><input type="text" id="name" placeholder="حط اسمك"/></p>
                </div>
                <div className="email col-12 col-md-5 bord">
                    <p> البريد الالكتروني </p>
                    <p><input type="email"  id="email"/></p>
                </div>
            </div>
            <div className="info-num-naiss w-100 row ">
                <div className="dateNaiss col-12 col-md-5 bord"  >
                    <p>تاريخ الولادة    </p>
                    <p><input type="date" id="naiss" /> </p>
                </div>
                <div className="number col-12 col-md-5 bord">
                    <p>الرقم</p>
                    <p><input type="number" name="num" id="num" /></p>
                </div>
            </div>
            <div class="gender">
                <p>الجنس </p>
                <div className='row justify-content-center align-items-center gap-4'>
                    <p className='col-6 w-auto'> <input type="radio" name="gend" id="gend1"/>  ذكر</p>
                    <p className='col-6 w-auto'> <input type="radio" name="gend" id="gend2"/> أنثى </p>
                </div>
            </div>
            
            <div className="message w-100">
                <p>مشكلتك  </p>
                <img src="img/mic.png" alt=""/>
                <p className='w-100'><textarea className='w-100'name="" id=""  cols="30" rows="5">
                    
                </textarea></p>
            </div>
            <input type="submit" value="sign up" className="btn" />
        </form>

        
        </section>
        </div>
    )
}
export default Home