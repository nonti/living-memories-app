
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    

<footer className=" dark:bg-gray-800">
    <div className="mx-auto w-full max-w-screen p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-end">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-green-500 uppercase ">Resources</h2>
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
                <h2 className="mb-6 text-sm font-semibold text-green-500 uppercase ">Follow us</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">
                    <Link to="https://github.com/themesberg/flowbite" className="hover:underline  ">Facebook</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="https://discord.gg/4eeurUVvTy" className="hover:underline ">Instagram</Link>
                  </li>
                  <li className="mb-2">
                    <Link to="https://discord.gg/4eeurUVvTy" className="hover:underline ">Linkedin</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-green-500 uppercase ">Legal</h2>
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
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-green-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
					© 2025 <Link to="#" className="hover:underline hover:text-green-600">Ubuntu Web Hosting™</Link>. All Rights Reserved.
        </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link to="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaFacebookF className='text-green-700'/>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link to="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaInstagramSquare className='text-green-700'/>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link to="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaLinkedin className='text-green-700'/>
              <span className="sr-only">Linkedin </span>
            </Link>
            
          </div>
      </div>
    </div>
</footer>

  )
}

export default Footer;