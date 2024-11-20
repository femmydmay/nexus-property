import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <main>
        <div className="grid place-items-center  relative min-h-[90dvh] ">
          <Image
            src="/modernhouse3.jpg"
            width={500}
            height={500}
            alt="search image"
            className="absolute
              border-gray-100  shadow-sm mt-7
          w-[100%] h-full object-cover -z-10 top-0  "
          />

          <h1 className=" lg:text-5xl   py-5 px-10 rounded font-bold  text-white top-1/2 left-1/2 bg-slate-200 bg-opacity-40  -z-10 mb-0 sm:text-lg">
            NEXUS CLASSIC PROPERTIES
          </h1>
        </div>

        <div className="w-10/12 grid mx-auto py-20  h-full gap-9s z-10">
          <section>
            <h3 className="text-slate-900 text-4xl text-center  font-bold my-3">
              ABOUT NEXUS CLASSIC PROPERTIES a.k.a Mollyb
            </h3>
            <article className="text-slate-900 text-2xl text-center leading-[3rem]">
              At Nexus Classic Properties our priority is customer satisfaction
              and excellence in quality and performance. We provide the best and
              easiest search for all our clients. Whether you intend to buy,
              sell or rent we connect you with your local agent that is vetted,
              <br /> and will guide through getting the perfect home or
              apartment.
            </article>
            <article className="text-slate-900 text-center  text-2xl leading-[3rem]">
              We offer you the best in Real Estate services
            </article>
            <p className="text-slate-900  text-center  text-2xl leading-[3rem]">
              {" "}
              Our Customer satisfaction is guaranteed to exceed your
              expectation.
            </p>
          </section>

          <div className="mt-3 mx-auto">
            <button className="bg-slate-300 ml-30 px-1 py-2 text-slate-900 rounded">
              Contact Us
            </button>
          </div>
        </div>

        <section className="min-h-[60vh] w-10/12  mx-auto">
          <h2 className="text-slate-900 uppercase mb-12  text-[3rem]  font-bold text-center">
            Our Real Estate Vision
          </h2>
          <div className="grid max-md:grid-cols-1 grid-cols-3 lg:h-[40vh] max-md:gap-10 gap-4">
            <article className="shadow-lg bg mb-10  shadow-yellow-800 p-2 grid">
              <header className="text-[#276bd6] font-bold uppercase">
                Our Vision and Values
              </header>
              <section className="text-slate-900">
                <p>
                  Our vision is to be the Nigerias&apos; leading, most trusted
                  Real Estate site, creating exceptional experience in home sale
                  and renting. To create world class experience in search for
                  property buying, selling and renting.
                </p>
                <button className="bg-slate-300 px-2 py-1 rounded">
                  Contact Us
                </button>
              </section>
            </article>
            <article className="shadow-lg mb-10  shadow-yellow-800 p-2 grid">
              <header className="text-[#276bd6] font-bold uppercase">
                Area Of Operation
              </header>
              <section className="text-slate-900">
                <p>
                  Our area of operation covers majorly, Lagos, Abuja, Port
                  Harcourt, Enugu and other parts of Nigeria. operating from
                  five strategically placed regional offices so we can apply our
                  knowledge of the local markets directly.
                </p>
                <button className="bg-slate-300 px-2 py-1 rounded">
                  Contact Us
                </button>
              </section>
            </article>
            <article className="shadow-lg mb-10  shadow-yellow-800  p-2 grid">
              <header className="text-[#276bd6] font-bold uppercase">
                Tackling Homelessness
              </header>
              <section className="text-slate-900">
                <p>
                  Our vision to be the Nigerias&apos; leading, most trusted
                  Property search site. should still apply, even for those whose
                  only home is the streets that surround them or those who want
                  better accomodation.
                </p>
                <button className="bg-slate-300 px-2 py-1 rounded">
                  Contact Us
                </button>
              </section>
            </article>
          </div>
        </section>

        <div className="grid place-items-center min-h-[60dvh] ">
          <div className="w-10/12 grid text-center  gap-9s">
            <section>
              <h3 className="text-slate-900 text-center text-5xl font-bold my-3">
                Our Values
              </h3>
              <article className="text-slate-900 text-2xl leading-[3rem]">
                At Nexus Classic Properties, we improve our clients lives by
                finding homes that reflect their tastes and lifestyle. However,
                our values go much deeper than that. We believe we can
                strengthen the community by helping our clients achieve
                stability and wealth through property ownership. That is why we
                focus on working with families and individuals new to the
                process and seeking homes or renting in the mid-level range. Our
                proven success in our strong word of mouth accounts for much of
                our business.
              </article>
              <article className="text-slate-900 text-2xl leading-[3rem]">
                Be well informed while buying, selling or renting properties.
              </article>
              <p className="text-slate-900 text-2xl leading-[3rem]">
                {" "}
                We inform you real time and accurately.
              </p>
            </section>

            <div className="mt-3 mb-6">
              <button className="bg-slate-300 px-1 py-2  rounded">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <section className="min-h-[60vh] w-10/12 mt-4 mx-auto">
          <h2 className="text-slate-900 uppercase mb-12  text-[3rem]  font-bold text-center">
            Testimonies
          </h2>
          <div className="grid max-md:grid-cols-1 grid-cols-3 lg:h-[40vh] max-md:gap-10 gap-4">
            <article className="shadow-lg bg mb-10  shadow-yellow-800 p-2 grid">
              <header className="text-[#276bd6] font-bold uppercase">
                Client in Abuja
                <div className="flex">
                  <AiFillStar size="15" color="yellow" />
                  <AiFillStar size="15" color="yellow" />
                  <AiFillStar size="15" color="yellow" />
                  <AiFillStar size="15" color="yellow" />
                  <AiFillStar size="15" color="yellow" />
                  <p>a month ago</p>
                </div>
              </header>
              <section className="text-slate-900">
                <p>
                  I am James and I worked with agents on Nexus to buy our first
                  home in Abuja and could not have had a better experience.
                </p>
                <button className="bg-slate-300 px-2 py-1 rounded  font-bold hover:bg-green-200 hover:text-red-900">
                  Contact Us
                </button>
              </section>
            </article>
            <article className="shadow-lg mb-10  shadow-yellow-800 p-2 grid">
              <header className="text-[#276bd6] font-bold uppercase">
                Agent in Port Harcourt
                <div className="flex">
                  <AiFillStar size="15" color="yellow" />
                  <AiFillStar size="15" color="yellow" />
                  <AiFillStar size="15" color="yellow" />
                  <AiFillStar size="15" color="yellow" />
                  <AiFillStar size="15" color="yellow" />
                  <p>2 months ago</p>
                </div>
              </header>
              <section className="text-slate-900">
                <p>
                  I am Queen and reside in PH. The site has been developed to
                  serve both buyers and renters, with ease of use.
                </p>
                <button className="bg-slate-300 px-2 py-1 rounded  font-bold hover:bg-green-200 hover:text-red-900">
                  Contact Us
                </button>
              </section>
            </article>
            <article className="shadow-lg mb-10  shadow-yellow-800  p-2 grid">
              <header className="text-[#276bd6] font-bold uppercase">
                Agent in Lagos
                <div className="flex">
                  <AiFillStar size="15" color="yellow" />
                  <AiFillStar size="15" color="yellow" />
                  <AiFillStar size="15" color="yellow" />
                  <AiFillStar size="15" color="yellow" />
                  <AiFillStar size="15" color="yellow" />
                  <p>a month ago</p>
                </div>
              </header>
              <section className="text-slate-900">
                <p>
                  Hi, I am Henry and I work with a property firm. We have been
                  able to get good business in a short while, using this
                  website. Great Job guys.
                </p>
                <button className="bg-slate-300 px-2 py-1 rounded  font-bold hover:bg-green-200 hover:text-red-900">
                  Contact Us
                </button>
              </section>
            </article>
          </div>
        </section>
        {/* picture grid */}

        <div className="">
          <h2 className="text-slate-800   uppercase mb-12 mt-10  text-[3rem]    text-center">
            Prepare to Sell or rent Your Home.
          </h2>
          <div className="container px-4 mt-10 mx-auto">
            <section className="flex flex-col lg:flex-row lg:space-x-8 flex-wrap">
              <div className="flex-1">
                <h1 className="crew text-center">Important Tips For Clients</h1>
                {/* <img
                  className="border-slate-900 rounded-lg shadow-sm mt-7 w-full h-auto object-cover mb-6"
                  src="../houserent3.jpg"
                  alt="House Rent 3"
                /> */}
                <Image
                  src="/houserent3.jpg"
                  width={500}
                  height={500}
                  alt="House Rent pic1"
                  className="border-slate-900 rounded-lg shadow-sm mt-7 w-full h-auto object-cover mb-6"
                />
                <p className="mt-4">
                  Your timeline is an important part of the process. Are you in
                  a hurry to sell? Do you need to sell quickly to close on
                  another property? Is deciding how much the home will list for?
                  Your agent will run a Comparative Market Analysis (CMA) to
                  compare your home with others in your area.
                </p>
                <button className="butenq_request px-3 py-1 bg-slate-300 text-bold text-[.8rem] h-10 rounded font-bold hover:bg-green-200 hover:text-red-900 mt-4">
                  Contact Us
                </button>
              </div>
              <div className="flex-1">
                <h1 className="crew text-center">Along the Way: Clean Up!</h1>
                {/* <img
                  className="border-gray-400 rounded-lg shadow-sm mt-7 w-full h-auto object-cover mb-6"
                  src="../houserent9.jpg"
                  alt="House Rent 9"
                /> */}
                <Image
                  src="/houserent9.jpg"
                  width={500}
                  height={500}
                  alt="House Rent pic2"
                  className="border-gray-400 rounded-lg shadow-sm mt-7 w-full h-auto object-cover mb-6"
                />
                <p className="mt-4">
                  Once you have decided to move, it is a good idea to start
                  cleaning out closets and getting rid of excess items. Even if
                  you are moving into a home of an equivalent size, it is likely
                  that you have accumulated a lot. By minimizing your clutter,
                  it will be easier to get work done, deep clean, and stage your
                  home.
                </p>
                <button className="butenq_request px-3 py-1 bg-slate-300 text-bold text-[.8rem] h-10 rounded font-bold hover:bg-green-200 hover:text-red-900 mt-4">
                  Contact Us
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* picture grid ends */}

        <Footer />
      </main>
    </>
  );
};

export default AboutUs;
