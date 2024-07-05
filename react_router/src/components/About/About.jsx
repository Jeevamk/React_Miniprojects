// export default function About() {
//     return (
//         <div className="py-16 bg-white">
//             <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
//                 <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
//                     <div className="md:5/12 lg:w-5/12">
//                         <img
//                             src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
//                             alt="image"
//                         />
//                     </div>
//                     <div className="md:7/12 lg:w-6/12">
//                         <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
//                             React development is carried out by passionate developers
//                         </h2>
//                         <p className="mt-6 text-gray-600">
//                             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
//                             accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
//                             aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
//                         </p>
//                         <p className="mt-4 text-gray-600">
//                             Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
//                             Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


import React from 'react';

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/female-developer-working-on-a-project-4217498-3518346.png?f=webp"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              About Me
            </h2>
            <p className="mt-6 text-gray-600">
              Passionate and self-taught MERN stack developer with a strong proficiency in React for dynamic user interfaces, MongoDB for database management, Express.js and Node.js for server-side development. I have developed secure authentication systems, dynamic dashboards, and robust features in various projects, utilizing a wide range of technologies and tools.
            </p>
            <p className="mt-4 text-gray-600">
              I have worked on projects such as an Ecommerce Watch Store, a Student Management System, an Image Gallery with QR code generation, and a Food Delivery App. My technical skills include JavaScript, React, HTML, CSS, TypeScript, Node.js, Express.js, MongoDB, MySQL, Cloudinary, and more. I am always eager to learn and take on new challenges to enhance my development skills.
            </p>
            {/* <h3 className="text-xl text-gray-900 font-bold md:text-2xl mt-8">
              Contact
            </h3> */}
            <p className="mt-2 text-gray-600">
              Phone: +917510328839
            </p>
            <p className="mt-1 text-gray-600">
              Email: jeevamk100@gmail.com
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://github.com/Jeevamk" className="hover:text-gray-400">
                <i className="fab fa-github" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/jeeva-mk/" className="hover:text-gray-400">
                <i className="fab fa-linkedin" /> LinkedIn
              </a>
              <a href="https://www.codewars.com/users/Jeevamk" className="hover:text-gray-400">
                <i className="fas fa-code" /> Codewars
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
