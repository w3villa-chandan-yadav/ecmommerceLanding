import './App.css';
import Blogs from './components/Blogs';
import FeatureProduct from './components/FeatureProduct';
import Gallery from './components/Gallery';
import Header from './components/Header';
import HeroSectoi from './components/HeroSectoi';
import HeroSp from './components/HeroSp';
import ShopByBrand from './components/ShopByBrand';
import WhyFromUs from './components/WhyFromUs';
import { FaQuoteLeft } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaSkype } from "react-icons/fa6";
import { FaSquareGooglePlus } from "react-icons/fa6";






const catogories={heading:"Why buy from us ?",
  semi1:"Top Catogories",
  semi2:"Electronics",
  semi3:"Beauty",
  semi4:"Fashion",
  para:"Journal has been the best selling and most loved Opencart theme since first launch in 2013.Tried and tested by over 20k people, Journal is the best Opencart theme framework on the market today.",
  bg:false,
  showMore:false,
  span:true
}


const catogories2={heading:"Feature Products",
  semi1:"FEATURED",
  semi2:"LATEST",
  semi3:"BESTSELLER",
  semi4:"SPECIAL",
  para:"Display any products as tab or accordions with optional grid or carousal mode. Custom products per row per module and per breakpoint. Each module can display products in either grid or list view  with different styles per module.",
  bg:true,
  showMore:true,
  span:false
}

function App() {

  return (
    <>
    <Header/>
    <HeroSectoi/>
    <HeroSp/>
    <WhyFromUs catogories={catogories} />
    <WhyFromUs  catogories={catogories2}/>
    <FeatureProduct/>
    <ShopByBrand/>
    <Gallery/>
    <Blogs/>
    <section className='w-screen h-full pt-4 pb-5 bg-gray-300'>
      <div className='w-[85%] mx-auto'>
        <h3 className='text-2xl font-bold text-center'>What people say about us </h3>
        <div className='h-[2px] w-[10%] mx-auto bg-orange-500 rounded-lg my-4'/>
        <div className='w-full h-[200px] flex justify-between items-center gap-10 my-7'>
          <div className=''>
          <h3 className='text-center w-fit mx-auto'><FaQuoteLeft className='text-4xl text-center text-orange-600'/></h3>
          <p> I've purchased hundresn and hundreds of files over the past 7 years.But there is nothing close 
            to this support and profeessionalism,NOt only is theme , simple , useful and modern,but again the support is remarkable. Very happy I got this theme! Thanks you!</p>
      <h3 className='text-lg font-bold text-gray-600 text-center my-3'>-Charlibaltiore</h3>

      </div>




      <div>
          <h3 className='text-center w-fit mx-auto'><FaQuoteLeft className='text-4xl text-center text-orange-600'/></h3>
          <p> I've purchased hundresn and hundreds of files over the past 7 years.But there is nothing close 
            to this support and profeessionalism,NOt only is theme , simple , useful and modern,but again the support is remarkable. Very happy I got this theme! Thanks you!</p>
      <h3 className='text-lg font-bold text-gray-600 text-center my-3'>-Charlibaltiore</h3>

      </div>




      <div>
          <h3 className='text-center w-fit mx-auto'><FaQuoteLeft className='text-4xl text-center text-orange-600'/></h3>
          <p> I've purchased hundresn and hundreds of files over the past 7 years.But there is nothing close 
            to this support and profeessionalism,NOt only is theme , simple , useful and modern,but again the support is remarkable. Very happy I got this theme! Thanks you!</p>
      <h3 className='text-lg font-bold text-gray-600 text-center my-3'>-Charlibaltiore</h3>

      </div>

        </div>

      </div>

    </section>

    <section className='w-screen h-full pt-4 pb-5 bg-gray-600 '>
      <div className='w-[85%] mx-auto my-5'><h3 className='text-white font-bold'>MOST VIEWED</h3>
      <div className='w-[6%] h-[2px] bg-orange-600 rounded-md'/>
      </div>
      <div className='w-[85%] mx-auto flex justify-between items-center gap-4'>
        <div className='bg-white px-3 py-1  flex justify-center items-center gap-2'>
          <div className='w-[100px] h-[60px]'>
        <img src='https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2024/09/spectacles-24-2.jpg' alt='image-spec' className='w-full h-full object-cover object-center'/>
          </div>
          <div>
            <h4 className='text-xs'>Oversize sunglasse For...</h4>
            <p>$39.00</p>
          </div>

        </div>
        <div className='bg-white px-3 py-1 flex justify-center items-center'>
          <div className='w-[100px] h-[60px]'>
        <img src='https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2024/09/spectacles-24-2.jpg' alt='image-spec' className='w-full h-full object-cover object-center'/>
          </div>
          <div>
            <h4  className='text-xs'>Oversize sunglasse For...</h4>
            <p>$39.00</p>
          </div>

        </div>

        <div className='bg-white px-3 py-1 flex justify-center items-center'>
          <div className='w-[100px] h-[60px]'>
        <img src='https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2024/09/spectacles-24-2.jpg' alt='image-spec' className='w-full h-full object-cover object-center'/>
          </div>
          <div>
            <h4  className='text-xs'>Oversize sunglasse For...</h4>
            <p>$39.00</p>
          </div>

        </div>

        <div className='bg-white px-3 py-1 flex justify-center items-center'>
          <div className='w-[100px] h-[60px]'>
        <img src='https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2024/09/spectacles-24-2.jpg' alt='image-spec' className='w-full h-full object-cover object-center'/>
          </div>
          <div>
            <h4  className='text-xs'>Oversize sunglasse For...</h4>
            <p>$39.00</p>
          </div>

        </div>
        
      </div>


    </section>

    <section className='w-screen h-full bg-gray-300'>
      <div className='w-[60%] mx-auto flex justify-center items-center gap-4 py-5 text-4xl bg-gray-300 text-blue-500'>
          <FaFacebook/>
          <FaSquareTwitter/>
          <FaInstagramSquare/>
          <FaLinkedin/>
          <TfiYoutube/>
          <FaSkype/>
          <FaSquareGooglePlus/>
      </div>

    </section>
    </>
  );
}

export default App;
