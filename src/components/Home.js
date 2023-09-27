import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup" ;
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home(){
    const schema = yup.object().shape({
        fullName: yup.string().required("الرجاء إدخال الاسم"),
        email: yup.string().email("البريد الإلكتروني غير صحيح").required("البريد الإلكتروني مطلوب"),
        dateNaiss: yup.date().max(new Date(), 'تاريخ الولادة يجب أن يكون في الماضي').required('تاريخ الولادة مطلوب'),
        number : yup.number().integer().required().min(10000000),
        gender: yup.string().required('الجنس مطلوب').oneOf(['male', 'female'], 'يرجى تحديد الجنس'),
        probleme : yup.string().required().min(10).max(200),
    });
    const {register , handleSubmit} = useForm({
        resolver : yupResolver(schema) ,
    }) ;
    const onSubmit = (data) =>{
        if(data.gender === "male"){
            alert(`مرحبًا بالسيدة ${data.fullName} مشكلتك ستتم معالجتها قريبا`)
        }
        else{
            alert(`مرحبًا بالسيد ${data.fullName} مشكلتك ستتم معالجتها قريبا`)
        }
    }
        return(
        <div className='home'>
        <div className='container'>
        <section className="row">
                
                <div className="introduction col-12 col-md-6 d-flex"> 
                    <p className='display-2 '>
                عسلامة  <br/>  الويب سايت متاعنا هو حاضنة و أرضية مشتركة للمعنف
            و لفتح باب بين الطرفين        
                    </p>
                </div>
        
        <form  onSubmit={handleSubmit(onSubmit)} className="col-12 col-md-6">
            <div  className="info-name row w-100">
                <div className="name col-12 col-md-5 bord">
                    <p> الاسم </p>
                    <p><input type="text" id="name" placeholder="حط اسمك" {...register("fullName")}/></p>
                </div>
                <div className="email col-12 col-md-5 bord">
                    <p> البريد الالكتروني </p>
                    <p><input type="email"  id="email" placeholder='حط بريدك الالكتروني' {...register("email")}/></p>
                </div>
            </div>
            <div className="info-num-naiss w-100 row ">
                <div className="dateNaiss col-12 col-md-5 bord"  >
                    <p>تاريخ الولادة    </p>
                    <p><input type="date" id="naiss" {...register("dateNaiss")}/> </p>
                </div>
                <div className="number col-12 col-md-5 bord">
                    <p>الرقم</p>
                    <p><input type="text" name="num" id="num" {...register("number")}/></p>
                </div>
            </div>
            <div className="gender">
                <p>الجنس </p>
                <div className='row justify-content-center align-items-center gap-4'>
                <p className='col-6 w-auto'><input type="radio" name="gender" {...register("gender")} value='female'  />ذكر</p>
                <p className='col-6 w-auto'><input type="radio" name="gender" {...register("gender")} value='male' />أنثى</p>
                </div>
            </div>
            
            <div className="message w-100">
                <p>مشكلتك  </p>
                <img src="img/mic.png" alt=""/>
                <p className='w-100'><textarea className='w-100'name="" id=""  cols="30" rows="5" {...register("probleme")} placeholder='كان عندك مشكلة صارتلك تنجم تكتبها هنا'>
                    
                </textarea></p>
            </div>
            <input type="submit" value="sign up" className="btn" />
        </form>

        
        </section>
        </div>
        </div>
    )
}
export default Home