
import { FaInstagramSquare, FaWhatsappSquare, FaFacebookSquare,  } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    

<footer className=" dark:bg-gray-800">
    <div className="mx-auto w-full max-w-screen p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-end">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-amber-300 uppercase ">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-2">
                          <Link to="#" className="hover:underline">Disclaimer</Link>
                      </li>
                      <li className="mb-2">
                          <Link to="#" className="hover:underline">Support</Link>
                      </li>
                      <li className="mb-2">
                          <Link to="#" className="hover:underline">FAQ</Link>
                      </li>
                  </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-amber-300 uppercase ">Follow us</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">
                    <Link to="https://github.com/themesberg/flowbite" className="hover:underline  ">Facebook</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="https://discord.gg/4eeurUVvTy" className="hover:underline ">Instagram</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="https://discord.gg/4eeurUVvTy" className="hover:underline ">TikTok</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-amber-300 uppercase ">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-2">
                      <Link to="#" className="hover:underline">Privacy Policy</Link>
                    </li>
                    <li className="mb-2">
                      <Link to="#" className="hover:underline">Terms &amp; Conditions</Link>
                    </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-amber-300 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2025 <Link to="#" className="hover:underline hover:text-amber-300">Living Memories Funeral Services™</Link>. All Rights Reserved.
        </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link to="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaFacebookSquare className='text-amber-300'/>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link to="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaInstagramSquare className='text-amber-300'/>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link to="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <AiFillTikTok className='text-amber-300'/>
              <span className="sr-only">TikTok </span>
            </Link>
            <Link to="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaWhatsappSquare className='text-amber-300'/>
              <span className="sr-only">Whatsapp </span>
            </Link>
            
          </div>
      </div>
    </div>
</footer>

  )
}

export default Footer;