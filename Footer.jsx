import React from 'react';
import germanyFlag from '../assets/images/germany-flag.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import visa from '../assets/images/visa.png';
import troy from '../assets/images/troy.png';
import mastercard from '../assets/images/mastercard.png';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const Footer = () => {
  return (
    <footer className="bg-rose-50  border-t border-gray-600 text-black py-10">
      <div className="container mx-auto grid grid-cols-3 gap-8">
        {/* Sol Bölüm */}
        <div>
          <h4 className="font-bold text-2xl mb-4 ">Talk to an Agent</h4>
          <MailOutlineIcon className="w-3 h-3" /> {/* İkonun boyutu */}
  <a href="#" className="text-lg">Email</a> {/* Email yazısının boyutunu ayarladık */}
        </div>

        {/* Orta Bölüm */}
        <div>
          <h4 className="mb-4 text-2xl font-bold">Find us on</h4>
          <FacebookIcon/>
          <XIcon/>
          <InstagramIcon/>
          <PinterestIcon/>
          {/* Sosyal medya ikonları */}
        </div>

        {/* Sağ Bölüm - Newsletter */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
          <p className="text-black mb-6 max-w-2xl">
            By entering your email address, you're accepting our privacy policy and are confirming that you are 18 or over.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative w-full md:w-auto">
              <label className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                Your email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full md:w-auto px-4 py-2 border border-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }} 
              />
            </div>
            <button className="w-full md:w-auto border bg-black text-white px-6 py-2 hover:bg-white hover:border-black hover:text-black transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </div>
<br />


      {/* Alt Bölüm - Shipping & Extra Links */}
      <div className="container mx-auto grid grid-cols-3 gap-8 mt-8 space-y-4">

        
      <div className='' >
  <h4 className="font-bold text-2xl mb-4">Shipping to:</h4>


  <button className="flex ml-52 space-x-4 border p-2 rounded">
    {/* Almanya Bayrağı */}
    <img
      src={germanyFlag}
      alt="Germany Flag"
      className="w-5 h-5" // Küçük bayrak
    />
    {/* GBP Metni */}
    <span>GBP</span>
  </button>
</div>
        <a href="#">+Help & Advive </a>
        <a href="#">+Our Company</a>
      </div>

      {/* En Alt - Copyright ve Ödeme İkonları */}
      <div className="mt-10 border-t border-gray-600 pt-5">
        <div className="container mx-auto flex justify-between items-center">
          <p className='ml-6'>&copy; Agent Provocateur 2024</p>
          <div> {/* Ödeme ikonları gelecek bölüm */}</div> 
          <div className='grid grid-cols-3 gap-5'>
          <img
      src={visa}
      alt="Germany Flag"
      className="w-10 h-8"/> 

<img
      src={troy}
      alt="Germany Flag"
      className="w-10 h-6"/> 
    
    <img
      src={mastercard}
      alt="Germany Flag"
      className="w-10 h-8"/> 

            </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
