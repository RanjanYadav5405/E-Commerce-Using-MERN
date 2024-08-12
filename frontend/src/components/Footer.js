import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-gray-200 py-10'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4'>
        {/* About Section */}
        <div className='mb-6 md:mb-0 mx-20'>
          <h5 className='font-bold mb-3'>About Us</h5>
          <p className='text-sm leading-relaxed'>
            Mithila Mart offers a wide selection of products to meet your needs. Discover quality items and enjoy a seamless shopping experience with us.
          </p>
        </div>
        
        {/* Links Section */}
        <div className='mb-6 md:mb-0 mx-20'>
          <h5 className='font-bold mb-3'>Quick Links</h5>
          <ul className='text-sm leading-loose'>
            <li><a href='/about' className='hover:underline'>About Us</a></li>
            <li><a href='/contact' className='hover:underline'>Contact Us</a></li>
            <li><a href='/privacy' className='hover:underline'>Privacy Policy</a></li>
            <li><a href='/terms' className='hover:underline'>Terms of Service</a></li>
          </ul>
        </div>
        
        {/* Contact Section */}
        <div className='mb-6 md:mb-0 mx-20'>
          <h5 className='font-bold mb-3'>Contact Us</h5>
          <p className='text-sm leading-relaxed'>Email: MR@gmail.com</p>
          <p className='text-sm leading-relaxed'>Phone: +91 9122452479</p>
        </div>
        
        {/* Social Media Section */}
        <div className='mb-6 md:mb-0 mx-20'>
          <h5 className='font-bold mb-3'>Follow Us</h5>
          <div className='flex space-x-4'>
            <a href='https://facebook.com' className='hover:text-blue-500' title="Facebook"><FaFacebookF /></a>
            <a href='https://twitter.com' className='hover:text-blue-400' title="Twitter"><FaTwitter /></a>
            <a href='https://instagram.com' className='hover:text-pink-600' title="Instagram"><FaInstagram /></a>
            <a href='https://linkedin.com' className='hover:text-blue-700' title="LinkedIn"><FaLinkedinIn /></a>
            <a href='https://youtube.com' className='hover:text-red-600' title="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className='mt-8 border-t border-gray-700 pt-4 text-center'>
        <p className='text-sm'>&copy; 2024 MithilaMart@MR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;