"use client";
import React, { useState } from 'react';
import FormComponent from '@/components/Popups';
import Techno1 from "@/public/Techno11.png"
import Techno2 from "@/public/Techno2.png"
import Techno3 from "@/public/Techno3.png"
import Image from 'next/image'
import Modal from '@/components/Modal'; // Assuming Modal is in the same directory
import ContactForm from '@/components/Popups';
const Technology = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);

  };
  return (
    <div className='open_sans_display cursor-default '>

      <div className="flex flex-col items-center justify-center md:mx-20 lg:mx-28 xl:mx-36 2xl:mx-72  xl:px-10 mt-10  lg:mt-32 text-center p-6">
        <h2 className="text-2xl md:text-4xl  xl:text-5xl 2xl:text-6xl  font-bold playfair_display">Techlerate specializes in crafting exceptional mobile applications using React Native.</h2>
        <p className="mt-4  md:mx-16 xl:mx-24 2xl:mx-32 text-base md:text-lg lg:text-2xl font-semibold  open_sans_display"> Our
          experienced developers use this flexible framework to provide excellent solutions for iOS and
          Android platforms.</p>
        <div className="mt-8">
          <Image src={Techno1} alt="Mobile applications showcasing React Native capabilities" className=" w-full h-full 2xl:w-[1272px] mt-4
 2xl:h-[977px]" width={1000} height={100} />
        </div>
      </div>

      <div className=" xl:mb-10 md:mx-20  lg:mx-28 xl:mx-24 2xl:mx-52 mx-6 md:p-6 bg-card open_sans_display ">
        <h2 className="text-3xl  mb-4">React Native</h2>
        <p className="text-base lg:text-xl 2xl:text-2xl mb-4 open_sans_display">
          Designed by Facebook, React Native is an open-source framework allowing developers to create
          natively rendered mobile apps with JavaScript and React.</p>
      </div>

      <div className="xl:mb-10 md:mx-20 lg:mx-28 2xl:mx-52 p-6 bg-background open_sans_display ">
        <h2 className="text-2xl md:text-3xl  text-foreground mb-4">Why Choose React Native? </h2>
        <p className="text-base md:text-xl xl:pr-72 2xl:mr-96 mb-6">React Native is a premier front-end framework for developing cross-platform apps with a native interface and other features like:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 mb-6 lg:grid-cols-3 gap-4">
          <div className="p-4 c xl:pt-8 bg-[#F8F8F8] 2xl:p-8  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F] ">
            <h3 className="font-semibold text-lg xl:text-lg lg:text-xl text-foreground">Cross-platform compatibility</h3>
            <p className="xl:text-base xl:pr-2 2xl:pr-20">
            Single Codebase: Run everywhere once you write. Share codes between Apple and Android systems. 
Reduced Development Time: Create concurrently for both platforms, hence lowering the time-to--
market. 
Economical: Reduce the expenses related to several native development teams.
            </p>
          </div>
          <div className="p-4  xl:pt-6 bg-[#F8F8F8]  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F] ">
            <h3 className="font-semibold text-lg lg:text-xl  text-accent-foreground"> Faster Development</h3>
            <p className="xl:text-base xl:pr-2  2xl:pr-20">
            JavaScript and React: Make use of a large library ecosystem and known technologies, JavaScript and 
            React .Hot Reloading: See updates right away without app rebuild. 
            Effective Iterations: Test and polish your app fast.             </p>
          </div>
          <div className="p-4  xl:pt-6 bg-[#F8F8F8]  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F] ">
            <h3 className="font-semibold text-lg lg:text-xl  text-foreground">Economic Efficiency</h3>
            <p className="xl:text-base xl:pr-0 2xl:pr-20">
            Shared Codebase: Update and keep a single codebase to reduce maintenance costs. 
            Minimised Training: Developers can work on both systems.              </p>
          </div>
          <div className="p-4  xl:pt-6 bg-[#F8F8F8]  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F] ">
            <h3 className="font-semibold text-lg lg:text-xl  text-foreground">Native Modular Access</h3>
            <p className="xl:text-base  2xl:pr-20">
            Native Performance: For best performance access native APIs and modules. 
Platform-Specific Characteristics: Seamlessly integrate unique features from iOS and Android 
platforms, enhancing your app&apos;s functionality and user experience. 
Perfect Integration: Combine React Native and native elements.              </p>
          </div>
          <div className="p-4  xl:pt-6 bg-[#F8F8F8]  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F] ">
            <h3 className="font-semibold text-lg lg:text-xl text-foreground"> Broad Community Support </h3>
            <p className="xl:text-base 2xl:pr-20">
            Active Forums: Engage in energetic communities (Stack Overflow, Reddit). 
Comprehensive Libraries: Grow by leaps and bounds with a vast collection of reusable libraries and 
frameworks. 
Frequent Updates: Regular updates, security patches, and feature enhancements keep React Native 
up and running.              </p>
          </div>

          <div className="p-4  xl:pt-6 bg-[#F8F8F8]  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F] ">
            <h3 className="font-semibold text-lg lg:text-xl  text-foreground">Easy Integration</h3>
            <p className="xl:text-base 2xl:pr-20">
            Third-Party APIs: Easily consolidate external services (social networking, payment gateways) to 
provide a holistic experience to your users. 
Backend Integration: Trouble free linking to either custom or existing backend systems. 
Cloud Services: Painlessly blend AWS and Firebase, among other cloud systems.
              </p>
          </div>

          <div className="p-4  xl:pt-6 bg-[#F8F8F8]  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F] ">
            <h3 className="font-semibold text-lg lg:text-xl  text-foreground">Safety</h3>
            <p className="xl:text-base 2xl:pr-20">
            Secure Data Storage: Access to encrypted storage options for user protection. 
Regular Security Updates: Frequent updates for security. 
Secure Authentication: Robust identification systems for unmatched identity verification              </p>
          </div>

          <div className="p-4  xl:pt-6 bg-[#F8F8F8]  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F] ">
            <h3 className="font-semibold text-lg lg:text-xl  text-foreground"> Scalable</h3>
            <p className="xl:text-base 2xl:pr-20">
            Easy addition or deletion of elements in modular architecture. 
Make changes according to your business needs with its flexible design. 
Manage your rising traffic with comfort.
              </p>
          </div>

          <div className="p-4  xl:pt-6 bg-[#F8F8F8]  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F] ">
            <h3 className="font-semibold text-lg lg:text-xl  text-foreground">User Experience</h3>
            <p className="xl:text-base 2xl:pr-20">
            Flawless and responsive experiences lead to a Native-like performance. 
Create distinctive, user-friendly layouts using its customizable UI. 
Promote user engagement with fluid animations.               </p>
          </div>

          <div className="p-4  xl:pt-6 bg-[#F8F8F8]  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F] ">
            <h3 className="font-semibold text-lg lg:text-xl  text-foreground"> Future-Proof </h3>
            <p className="xl:text-base 2xl:pr-20">
            Stay updated with React Native&apos;s newest capabilities. 
Long-term upkeep and customer support. 
Integrate the latest technologies and trends.
              </p>
          </div>
          
        </div>
      </div>
      <div>
        <div className="bg-black xl:mb-10  text-white  w-full  p-2 sm:p-8 flex flex-row md:flex-row items-center open_sans_displays font-extralight">

          <div className=" p-0  lg:ml-28 2xl:ml-48 mt-10 md:space-y-8 w-1/2">
            <div className=" font-extralight md:space-y-4 flex flex-col">
              <span className=" text-lg sm:text-4xl xl:text-5xl 2xl:text-6xl font-extralight">Why is React Native </span>
              <span className=" text-lg sm:text-4xl xl:text-5xl 2xl:text-6xl font-extralight">The Future of</span>
              <span className="text-lg sm:text-4xl xl:text-5xl 2xl:text-6xl font-extralight">Mobile App</span>
              <span className="text-lg sm:text-4xl xl:text-5xl 2xl:text-6xl font-extralight">Development?</span>
            </div>
            <button onClick={handleButtonClick} className=" mt-4  max-w-xl text-sm md:text-lg bg-gradient-to-r from-[#C9784F] via-[#A06A7B] to-[#6C506F] px-3  sm:px-6 py-2 rounded-3xl">Let&apos;s Talk</button>

          </div>
          <div className=" mt-10 sm:mt-6 2xl:mr-20 mb-6">
            <Image src={Techno2} alt="Mobile App Screenshot 1" className=" w-40 h-40 sm:w-96 sm:h-full 2xl:w-[550px] 2xl:h-[500px]" width={1000} height={1000} />

          </div>


        </div>
      </div>
      <section className="md:mx-20 xl:mb-10 lg:mx-28 2xl:mx-52 p-6 bg-background open_sans_display  ">
        <h2 className="text-3xl  2xl:text-4xl  mb-4">Our React Native Solutions</h2>
        <p className="mb-6 xl:text-lg 2xl:text-2xl xl:pr-48 xl:mr-40 2xl:pr-60 2xl:mr-96">
          At Techlerate, we provide React Native services in a whole spectrum to meet various corporate
          requirements. Our experience covers the entire lifetime of mobile app development.

        </p>

        <div className="space-y-8 2xl:pl-10 xl:w-[900px] 2xl:w-[1000px]">
          <div className="p-6   shadow-lg shadow-[#E9A0FF4D]   rounded-lg bg-muted">
            <h3 className="text-xl font-semibold mb-2"> Mobile App Development</h3>
            <p className="text-muted-foreground ">
              Create customised mobile apps from scratch, matching your company objectives and needs, thereby
              harmonising with your ambitions.
              The latest React Native features are always at your fingertips to refresh and revamp existing
              applications.
              Also, combine online and native technologies to produce seamless, cross-platform experiences in
              hybrid app development.
              React Native allows you to quickly, and dependably come up with interesting web apps.
            </p>
          </div>

          <div className="p-6 shadow-lg shadow-[#FFD7A04D]   rounded-lg bg-muted">
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-muted-foreground  2xl:pr-10">
              User Research: We analyze users to guide design decisions.
              Wireframing and Prototyping: Our team creates interactive prototypes that let you visualize and
              fine-tune your app’s design before it goes live.
              User Interface Design: Our designers craft beautiful, intuitive, and consistent interfaces that are easy
              to navigate across your app.
              User Experience (UX) Strategy: We plan and study user interaction with your app to make sure it’s
              simple, smooth, and enjoyable from start to finish.
            </p>
          </div>

          <div className="p-6 shadow-lg shadow-[#A0C5FF4D]   rounded-lg bg-muted">
            <h3 className="text-xl font-semibold mb-2">App Integration</h3>
            <p className="text-muted-foreground xl:pr-24 2xl:pr-36">
              Third-party API integration: Seamlessly integrate outside APIs for services including maps, social
              media, and payment gateways.
              Backend Integration: Link your app to either custom or current backend infrastructure.
              Hardware Integration: Take full advantage of your device’s features, like GPS, Bluetooth, and the
              camera.
              Cloud Integration: Need to scale? We can connect your app to cloud services like Firebase, AWS, or
              Azure to keep things running smoothly.            </p>
          </div>

          <div className="p-6 shadow-lg shadow-[#A0FFDE4D]   rounded-lg bg-muted">
            <h3 className="text-xl font-semibold mb-2">Thorough Testing and Debugging</h3>
            <p className="text-muted-foreground xl:pr-20 2xl:pr-28">
              Unit Testing: Leaving no loose ends, we carefully test each part of your app to make sure it functions
              as expected.
              Integration Testing: For seamless performance, we verify that all the different components of your
              app work well together.
              UI Testing: We carefully test the user interface to ensure it&apos;s simple to navigate and functions
              seamlessly.
              Performance Optimization: We refine your app to ensure it runs efficiently, boosting speed, reducing
              memory usage, and extending battery life.            </p>
          </div>

          <div className="p-6 shadow-lg shadow-[#A0FFDE4D]   rounded-lg bg-muted">
            <h3 className="text-xl font-semibold mb-2">Maintenance and Support</h3>
            <p className="text-muted-foreground xl:pr-20 2xl:pr-28">
              Regular Updates: Keep your app current with the latest React Native features and security updates.
              Bug Fixing: Smoothly address issues to ensure the smooth functioning of your app.
              Performance Monitoring: Make improvements where needed by continuously tracking and
              analyzing performance.
              Security Audits: Perform regular checks to safeguard user data and maintain trust.           </p>
          </div>

        
          <div className="p-6 shadow-lg shadow-[#A0FFDE4D]   rounded-lg bg-muted">
            <h3 className="text-xl font-semibold mb-2"> Strategy Consulting</h3>
            <p className="text-muted-foreground xl:pr-20 2xl:pr-28">
              Mobile Strategy: Align your mobile strategy with business goals.
              Technical Consulting: Provide expert guidance on React Native architecture, scalability, and best
              practices.
              Code Review: Conduct thorough code reviews to ensure quality and maintainability.</p>

          </div>

          <div className="p-6 shadow-lg shadow-[#A0FFDE4D]   rounded-lg bg-muted">
            <h3 className="text-xl font-semibold mb-2"> Knowledge Transfer and Training</h3>
            <p className="text-muted-foreground xl:pr-20 2xl:pr-28">
            Developer Training: Provide your internal development team training sessions. 
            Knowledge Transfer: Continuous knowledge transfer for maintenance and support.</p>

          </div>
          </div>
      </section>

      <div className="mb-10">
        <Image src={Techno3} alt="Mobile App Screenshot 1" className="w-full  h-full 2xl:h-[1000px]" width={1000} height={1000} />

      </div>
      <section className="md:mx-20 xl:mb-10 lg:mx-28 2xl:mx-52 p-6 bg-background open_sans_display ">
        <h2 className="text-3xl  2xl:text-4xl   mb-4">React Native Going Forward</h2>
        <p className="mb-16 md:text-lg 2xl:text-2xl xl:text-lg xl:pr-60 xl:mr-24 2xl:pr-60 2xl:mr-96">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:pr-60 w-full">
          <div className="p-4  w-auto 2xl:w-[400px] bg-[#F8F8F8] xl:pt-6 2xl:p-8  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F]">
            <h3 className="font-semibold text-lg xl:text-lg lg:text-xl text-foreground">Meta&apos;s Continued Support</h3>
            <p className=" xl:text-base  2xl:pr-6  ">
            Timely updates and security patches are in order, as Meta, the creator of React Native, remains 
            committed to investing in the framework&apos;s ecosystem.
            </p>
          </div>

          <div className="p-4  2xl:w-[400px] bg-[#F8F8F8] xl:pt-6 2xl:p-8  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F]">
            <h3 className="font-semibold text-lg xl:text-lg lg:text-xl text-foreground">Growing Adoption</h3>
            <p className="xl:text-base  2xl:pr-6">
            React Native&apos;s popularity is on the rise, and it is expected to continue growing. 
With its ongoing evolution to expand applications beyond mobile apps, many leading companies and 
startups are swiftly integrating it into their development processes.            </p>
          </div>
          <div className="p-4  2xl:w-[400px] bg-[#F8F8F8] xl:pt-6 2xl:p-8  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F]">
            <h3 className="font-semibold text-lg xl:text-lg lg:text-xl text-foreground"> Emerging Directions</h3>
            <p className="xl:text-base  2xl:pr-6">
            Augmented Reality and Virtual Reality. 
Artificial Intelligence and Machine Learning. 
Internet of Things. 
Progressive Web Apps.            </p>
          </div>

          <div className="p-4 2xl:w-[400px]  bg-[#F8F8F8] xl:pt-6 2xl:p-8 hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F]">
            <h3 className="font-semibold text-lg xl:text-lg lg:text-xl text-foreground">Enhancements and Features</h3>
            <p className="xl:text-base  2xl:pr-6">
            Improved Performance: Consistent optimisations help in faster rendering and better memory 
management. 
Enhanced Security: Advanced security features and encryption for data protection. 
Better Debugging Tools: Improved debugging and testing experiences for foolproof results. 
More Native Modules: Expanded library of native modules for enhanced functionality.            </p>
          </div>

          <div className="p-4  2xl:w-[400px] bg-[#F8F8F8] xl:pt-6 2xl:p-8  hover:text-white hover:bg-gradient-to-b from-[#C9784F] via-[#A06A7B] to-[#6C506F]">
            <h3 className="font-semibold text-lg xl:text-lg lg:text-xl text-foreground"> Community-Driven Development</h3>
            <p className="xl:text-base  2xl:pr-6">
            Open-Source Contributions: Active community involvement in code development 
Plugin Architecture: Simplified plugin development and sharing 
Community-Driven Features: Prioritization of community-requested features
            </p>
          </div>

        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm onClose={closeModal} />
      </Modal>

    </div>
  )
}

export default Technology
