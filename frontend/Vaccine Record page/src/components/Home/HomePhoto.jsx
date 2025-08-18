// // src/components/CustomCarousel.js
// import React, { useState, useEffect, useRef } from 'react';
// import { assets } from '../../assets/assets';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// const HomePhoto = () => {
//     const [currentIndex, setCurrentIndex] = useState(1);
//     const slidesRef = useRef(null);

//     const slides = [
//         {
//             image: assets.police2,
//             title: 'Streamlined Bail Process',
//             description: 'Our platform simplifies the bail process, making it faster and more efficient for all parties involved.'
//         },
//         {
//             image: assets.police3,
//             title: 'Comprehensive Legal Aid',
//             description: 'Access comprehensive legal provisions and procedural checklists designed to support legal aid providers.'
//         },
//         {
//             image: assets.police1,
//             title: 'Eligibility Checker',
//             description: 'Quickly assess bail eligibility based on various factors with our easy-to-use eligibility checker tool.'
//         },
//         {
//             image: assets.police6,
//             title: 'Procedural Compliance',
//             description: 'Ensure compliance with all procedural requirements through interactive checklists and real-time guidance.'
//         },
//         {
//             image: assets.police4,
//             title: 'Automated Documentation',
//             description: 'Effortlessly generate and customize bail application documents with our automated documentation system.'
//         },
//         {
//             image: assets.police5,
//             title: 'Procedural Compliance',
//             description: 'Ensure compliance with all procedural requirements through interactive checklists and real-time guidance.'
//         },
//     ];

//     const duplicatedSlides = [
//         slides[slides.length - 1],
//         ...slides,
//         slides[0]
//     ];

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => {
//             if (prevIndex === duplicatedSlides.length - 2) {
//                 slidesRef.current.style.transition = 'none';
//                 slidesRef.current.style.transform = `translateX(-${100}%)`;
//                 return 1;
//             }
//             return prevIndex + 1;
//         });
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => {
//             if (prevIndex === 0) {
//                 slidesRef.current.style.transition = 'none';
//                 slidesRef.current.style.transform = `translateX(-${(duplicatedSlides.length - 2) * 100}%)`;
//                 return duplicatedSlides.length - 3;
//             }
//             return prevIndex - 1;
//         });
//     };

//     useEffect(() => {
//         const interval = setInterval(nextSlide, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     useEffect(() => {
//         if (currentIndex === 1 || currentIndex === duplicatedSlides.length - 2) {
//             slidesRef.current.style.transition = 'transform 0.7s ease-in-out';
//         }
//     }, [currentIndex]);

//     return (
//         <div className="relative w-full overflow-hidden text-black bg-white" >
//             <div
//                 className="relative flex transition-transform duration-700 ease-in-out"
//                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//                 ref={slidesRef}
//             >
//                 {duplicatedSlides.map((slide, index) => (
//                     <div key={index} className="w-full flex-shrink-0 ">
//                         <img src={slide.image} className="w-full h-[75vh] object-cover" alt={slide.title} />
//                         <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-center items-center text-black p-6">
//                             <h3 className="text-2xl font-bold mb-4">{slide.title}</h3>
//                             <p className="text-lg">{slide.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <button
//                 onClick={prevSlide}
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-10 hover:bg-opacity-50 text-white rounded-full p-2 text-2xl"
//             >
//                 &#10094;
//             </button>
//             <button
//                 onClick={nextSlide}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-10 hover:bg-opacity-50 text-white rounded-full p-2 text-2xl"
//             >
//                 &#10095;
//             </button>
//         </div>
//     );
// };

// export default HomePhoto;



// import React, { useState, useEffect, useRef } from 'react';
// import { assets } from '../../assets/assets';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import Font Awesome icons

// const HomePhoto = () => {
//     const [currentIndex, setCurrentIndex] = useState(1);
//     const slidesRef = useRef(null);

//     const slides = [
//         {
//             image: assets.police2,
//             title: 'Streamlined Bail Process',
//             description: 'Our platform simplifies the bail process, making it faster and more efficient for all parties involved.'
//         },
//         {
//             image: assets.police3,
//             title: 'Comprehensive Legal Aid',
//             description: 'Access comprehensive legal provisions and procedural checklists designed to support legal aid providers.'
//         },
//         {
//             image: assets.police1,
//             title: 'Eligibility Checker',
//             description: 'Quickly assess bail eligibility based on various factors with our easy-to-use eligibility checker tool.'
//         },
//         {
//             image: assets.police6,
//             title: 'Procedural Compliance',
//             description: 'Ensure compliance with all procedural requirements through interactive checklists and real-time guidance.'
//         },
//         {
//             image: assets.police4,
//             title: 'Automated Documentation',
//             description: 'Effortlessly generate and customize bail application documents with our automated documentation system.'
//         },
//         {
//             image: assets.police5,
//             title: 'Procedural Compliance',
//             description: 'Ensure compliance with all procedural requirements through interactive checklists and real-time guidance.'
//         },
//     ];

//     const duplicatedSlides = [
//         slides[slides.length - 1],
//         ...slides,
//         slides[0]
//     ];

//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => {
//             if (prevIndex === duplicatedSlides.length - 2) {
//                 slidesRef.current.style.transition = 'none';
//                 slidesRef.current.style.transform = `translateX(-${100}%)`;
//                 return 1;
//             }
//             return prevIndex + 1;
//         });
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prevIndex) => {
//             if (prevIndex === 0) {
//                 slidesRef.current.style.transition = 'none';
//                 slidesRef.current.style.transform = `translateX(-${(duplicatedSlides.length - 2) * 100}%)`;
//                 return duplicatedSlides.length - 3;
//             }
//             return prevIndex - 1;
//         });
//     };

//     useEffect(() => {
//         const interval = setInterval(nextSlide, 3000);

//         return () => clearInterval(interval);
//     }, []);

//     useEffect(() => {
//         if (currentIndex === 1 || currentIndex === duplicatedSlides.length - 2) {
//             slidesRef.current.style.transition = 'transform 0.7s ease-in-out';
//         }
//     }, [currentIndex]);

//     return (
//         <div style={{ backgroundColor: '#f8f9fa' }} className="relative w-full m-50 overflow-hidden text-black ">
//             <div
//                 className="relative flex transition-transform duration-700 ease-in-out"
//                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//                 ref={slidesRef}
//             >
//                 {duplicatedSlides.map((slide, index) => (
//                     <div key={index} className="w-full flex-shrink-0 px-16">
//                         <img src={slide.image} className="w-full h-[75vh] object-cover rounded-lg" alt={slide.title} />
//                         <div className="absolute inset-0 bg-white bg-opacity-50 flex flex-col justify-center items-center text-black p-6">
//                             <h3 className="text-2xl font-bold mb-4">{slide.title}</h3>
//                             <p className="text-lg">{slide.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <button
//                 onClick={prevSlide}
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-10 hover:bg-opacity-50 text-white rounded-full p-2 text-2xl"
//             >
//                 <FaChevronLeft />
//             </button>
//             <button
//                 onClick={nextSlide}
//                 className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-10 hover:bg-opacity-50 text-white rounded-full p-2 text-2xl"
//             >
//                 <FaChevronRight />
//             </button>
//         </div>
//     );
// };

// export default HomePhoto;