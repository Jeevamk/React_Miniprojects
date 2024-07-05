import React from 'react'
import { Link } from 'react-router-dom';
import { FaJs, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiMongodb, SiMysql, SiCloudinary } from 'react-icons/si';


export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                           Jeeva Mk
                            <span className="hidden sm:block text-4xl">Mern Stack Developer</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/contact"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Contact Us
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://cdni.iconscout.com/illustration/premium/thumb/female-web-developer-working-on-project-5691620-4759502.png?f=webp" alt="image1" />
                </div>
            </aside>

            {/* <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div> */}

            {/* Skills */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-6 text-gray-800">
          {/* <h2 className="text-2xl font-bold mb-6 text-center">Technical Skills</h2> */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
            <div className="flex flex-col items-center">
              <FaJs className="text-4xl text-yellow-500" />
              <p className="mt-2">JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <FaReact className="text-4xl text-blue-500" />
              <p className="mt-2">React</p>
            </div>
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-4xl text-orange-600" />
              <p className="mt-2">HTML</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt className="text-4xl text-blue-600" />
              <p className="mt-2">CSS</p>
            </div>
            <div className="flex flex-col items-center">
              <SiTypescript className="text-4xl text-blue-700" />
              <p className="mt-2">TypeScript</p>
            </div>
            <div className="flex flex-col items-center">
              <FaNodeJs className="text-4xl text-green-500" />
              <p className="mt-2">Node.js</p>
            </div>
            <div className="flex flex-col items-center">
              <SiExpress className="text-4xl text-black" />
              <p className="mt-2">Express.js</p>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb className="text-4xl text-green-600" />
              <p className="mt-2">MongoDB</p>
            </div>
            <div className="flex flex-col items-center">
              <SiMysql className="text-4xl text-blue-700" />
              <p className="mt-2">MySQL</p>
            </div>
            <div className="flex flex-col items-center">
              <SiCloudinary className="text-4xl text-blue-400" />
              <p className="mt-2">Cloudinary</p>
            </div>
          </div>
        </div>
      </section>

        </div>
    );
}





      

     