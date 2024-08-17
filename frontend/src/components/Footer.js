import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-gray-200 py-10 '>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4'>
        {/* About Section */}
        <div className='mb-6 md:mb-0 mx-20'>
          <h5 className='font-bold mb-3'>About Us</h5>
          <p className='text-sm leading-relaxed'>
            Dynamic Coding with Amit offers tutorials and resources for coding enthusiasts. Stay updated with the latest tech trends and coding tips.
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
          <p className='text-sm leading-relaxed'>Email: support@dynamiccoding.com</p>
          <p className='text-sm leading-relaxed'>Phone: +123 456 7890</p>
        </div>
        
        {/* Social Media Section */}
        <div className='mb-6 md:mb-0 mx-20'>
          <h5 className='font-bold mb-3'>Follow Us</h5>
          <div className='flex space-x-4'>
            <a href='https://facebook.com' className='hover:text-blue-500' title="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href='https://twitter.com' className='hover:text-blue-400' title="Twitter"><i className="fab fa-twitter"></i></a>
            <a href='https://instagram.com' className='hover:text-pink-600' title="Instagram"><i className="fab fa-instagram"></i></a>
            <a href='https://linkedin.com' className='hover:text-blue-700' title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href='https://youtube.com' className='hover:text-red-600' title="Youtube"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className='mt-8 border-t border-gray-700 pt-4 text-center'>
        <p className='text-sm'>&copy; 2024 Dynamic Coding with Amit. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
