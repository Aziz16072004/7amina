import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import azizChaabani from '../img/aziz.jpg' ;
import amenHouass from '../img/hwas.jpg' ;
import daliDahw from '../img/dali.jpg' ;
import amen from '../img/amen.jpg' ;
import hadir from '../img/hadir.jpg' ;
import { FaRegCopyright } from "react-icons/fa6";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

function Whoarewe() {
  const data = [
    {
      id: 1,
      username: "محمد عزيز شعباني",
      description: "تلميذ و عضو في  حامينا مؤسس مشارك في حامينا",
      photo : azizChaabani,
      url : "https://www.facebook.com/aziz.chaabani.357"
    },
    {
      id: 2,
      username: "أمان الله مستور",
      description: "تلميذ و عضو في  حامينا مؤسس مشارك في حامينا",
      photo : amen,
      url : "https://www.facebook.com/profile.php?id=100088818431253"
    },
    {
        id: 3,
        username: "أمان الله حواص",
        description: "تلميذ و عضو في  حامينا مؤسس مشارك في حامينا",
        photo : amenHouass ,
        url : "https://www.facebook.com/amenamen.hwass"
    },
    {
        id: 4,
        username: "هدير بن دية",
        description: "تلميذ و عضو في  حامينا مؤسس مشارك في حامينا",
        photo : hadir ,
        url : "https://www.facebook.com/dadou.bendaya"
      },
    {
        id: 5,
        username: "محمد علي ضو",
        description: "تلميذ و عضو في  حامينا مؤسس مشارك في حامينا",
        photo : daliDahw ,
        url : "https://www.facebook.com/profile.php?id=100057636162114" 
      }
  ];

  return (
    <div className='whoarewe'>
    <div className='container'>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      className='swiper'
      breakpoints={{
        0 : {
            slidesPerView : 1,
            spaceBetween :10
        },
        768 : {
            slidesPerView : 2,
            spaceBetween :10
        },
        992 : {
            slidesPerView : 3,
            spaceBetween :15
        }
        
        
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((user) => (
        <SwiperSlide key={user.id} className='slide '>
          <div className='slide-content'>
          <div className="image-content">
                        <span className="overlay"></span>

                        <div className="card-image">
                                <img src={user.photo} alt="" className="card-img" />
                        </div>
            </div>
            <div className="card-content">
                        <h2 className="name">{user.username}</h2>
                        <p className='description w-25'>{user.description}</p>

<a href= {user.url} className="view-more btn ">عرض المزيد</a>                
                    </div>
            
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    <div className='copyRight'>
      <p><FaRegCopyright/></p>
      <p>تم إنشاء هذا الموقع الإلكتروني في عام 2023 خلال مسابقة الهاكاثون في  وي كود بدار الشباب بالزهروني  . </p>
    </div>
    </div>
    </div>
  );
}

export default Whoarewe;
