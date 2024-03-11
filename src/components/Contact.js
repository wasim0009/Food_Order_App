import React from "react";
import { FaMapSigns } from "react-icons/fa";
import { BsFillTelephoneFill, BsGlobeAmericas } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = () => {
    const formTab = [{ name: "" }, { name: "" }, { name: "" }, { name: "" }];
    const contactTab = [
        {
            icon: <FaMapSigns className="text-4xl" />,
            title: "Address",
            desription: `198 West 21th Street, Suite 721 Virar  east 160016`,
        },
        {
            icon: <BsFillTelephoneFill className="text-4xl" />,
            title: "Contact Number",
            desription: `+91 9845435493`,
        },
        {
            icon: <FaPaperPlane className="text-4xl" />,
            title: "Email Address",
            desription: `food_order@gmail.com`,
        },
        {
            icon: <BsGlobeAmericas className="text-4xl" />,
            title: "Website",
            desription: "food-order.com",
        },
    ];
    return (
        <>  <Link>
            <div>
                {" "}
                <div className="md:w-96 mx-auto text-center my-24">
                    <div className="text-2xl font-bold">Contact Me</div>
                    <div className="text-xl">

                        Wasim Khan, the visionary owner of this Food Ordering System, has crafted a culinary masterpiece that seamlessly blends efficiency and indulgence. His dedication to creating a gastronomic utopia is evident in this realm, where food ordering becomes an art form, and palates are tantalized with unparalleled flavors. Wasim Khan's name will forever be associated with the sublime experience of ordering food.
                    </div>
                </div>
                {/* Cards */}
                <div className="container mx-auto my-12 h-auto">
                    <div className="flex gap-5 justify-center flex-wrap h-auto lg:flex-nowrap ">
                        {contactTab.map((x, index) => {
                            return (
                                <div key={index} className="card w-full  shadow-xl h-auto ">
                                    <div className="card-body items-center flex-grow-0  text-center">
                                        <h2 className="card-title">{x.icon}</h2>
                                        <p className="text-lg font-bold my-3">{x.title}</p>
                                        <div className="">
                                            <p className=" text-lg font-semibold">{x.desription}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className=" container mx-auto  flex flex-wrap shadow-2xl my-20 rounded-md p-5">
                <div className="lg:w-1/2 w-full p-4">
                    <form className="  shadow-md rounded-lg px-2 pt-6 pb-8 mb-4">
                        <div className="flex  flex-col">
                            {formTab.map((x, index) => {
                                return (
                                    <div key={index} className="mx-auto form-control w-full">
                                        <label className="label">
                                            <span className="label-text">What is your name?</span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered w-full  "
                                        />
                                    </div>
                                );
                            })}
                            <div className="w-full my-4 flex justify-end ">
                                <button className="btn rounded-full w-full">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="lg:w-1/2 w-full   p-4">
                    <div className="relative aspect-w-16 h-[50vw] lg:h-full aspect-h-9">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.67292831256!2d72.71637308774599!3d19.082502004627383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1697293402825!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        //   loading="lazy"
                        // src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        ></iframe>
                    </div>
                </div>
            </div>
        </Link>

        </>
    );
};

export default Contact;



// import React from "react";

// const ContactPage = () => {
//     return (
//         <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
//             <div className="max-w-md p-4 bg-white rounded-lg shadow-lg">
//                 <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
//                 <p className="text-gray-600 mb-4">
//                     If you have any questions or feedback, feel free to get in touch with us.
//                 </p>
//                 <form className="mb-4">
//                     <div className="mb-4">
//                         <label htmlFor="name" className="block text-gray-600 font-semibold">
//                             Your Name
//                         </label>
//                         <input
//                             type="text"
//                             id="name"
//                             className="w-full p-2 border rounded-md"
//                             placeholder="John Doe"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-gray-600 font-semibold">
//                             Email Address
//                         </label>
//                         <input
//                             type="email"
//                             id="email"
//                             className="w-full p-2 border rounded-md"
//                             placeholder="john@example.com"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="message" className="block text-gray-600 font-semibold">
//                             Message
//                         </label>
//                         <textarea
//                             id="message"
//                             className="w-full p-2 border rounded-md"
//                             rows="4"
//                             placeholder="Your message here..."
//                         ></textarea>
//                     </div>
//                     <button
//                         type="submit"
//                         className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//                     >
//                         Send
//                     </button>
//                 </form>
//             </div>
//             <div className="mt-8">
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-4">Follow Us</h2>
//                 <div className="flex space-x-4">
//                     <a
//                         href="#"
//                         className="text-blue-600 hover:text-blue-800"
//                     >
//                         <i className="fab fa-facebook-square text-2xl"></i>
//                     </a>
//                     <a
//                         href="#"
//                         className="text-blue-400 hover:text-blue-600"
//                     >
//                         <i className="fab fa-twitter-square text-2xl"></i>
//                     </a>
//                     <a
//                         href="#"
//                         className="text-red-500 hover:text-red-700"
//                     >
//                         <i className="fab fa-instagram-square text-2xl"></i>
//                     </a>
//                     {/* Add more social media links as needed */}
//                 </div>
//             </div>
//             <div className="mt-8">
//                 {/* Add your tracking widget code here */}
//             </div>
//         </div>
//     );
// };

// export default ContactPage;
