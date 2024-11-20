"use client";
import Image from "next/image";
import Link from "next/link";
// import Link from "next-preload-headers";
import Proplist from "./Proplist";
import Footer from "../components/Footer";

export default function Home() {
  return (
    
    <>
      <main className="bg-white/95">
        <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-white/45  sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r  h-full w-full "></div>
          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 justify-center">
            <div className="max-w-xl text-center sm:text-center ">
              <h1 className="text-3xl font-extrabold text-blue-900 sm:text-5xl">
                <strong className=" ml-3 font-extrabold text-primary">
                  Nexus MollyB
                </strong>
              </h1>

              <p className="mt-4 max-w-lg text-white font-bold sm:text-xl/relaxed ">
                Your Trusted Search For Credible Real Estate
              </p>
              <div className="md:max-w-md sm:w-md lg:col-span-2">
                <span className="text-base font-medium tracking-wide text-white">
                  Search Properties
                </span>
                <form className="flex  items-center mt-4 md:flex-row md:space-x-2 w-full">
                  <input
                    placeholder="Search Rent or Buy"
                    required
                    type="text"
                    className="w-[80%] md:w-2/3 h-12 px-4 mx-auto  transition duration-200 text-slate-900 border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                  />
                  <button
                    type="submit"
                    className="w-[30%] md:w-auto h-12 px-6 mx-auto md:mt-0 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-600 hover:bg-red-700 focus:shadow-outline focus:outline-none"
                  >
                    Search
                  </button>
                </form>
              </div>

              <div className="mt-8 w-full text-center  space-y-5">
                <p className="text-2xl font-bold text-slate-900 ">
                  BUY, SELL, RENT HOUSES AND PURCHASE LAND
                </p>
                {/* <HeroSearchForm /> */}
              </div>
            </div>
          </div>
        </section>

        <section className="p-5 ">
          {/* <Suspense fallback={<Loader />}>
            <GetProducts />
          </Suspense> */}
          <Proplist />
          <section>
            <div className="grid md:grid-cols-2 gap-2 ">
              <article className=" bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
                <div className="flex items-center sm:gap-8 ">
                  <Image
                    src="/search.png"
                    width={100}
                    height={100}
                    alt="search image"
                  />

                  <div>
                    <h3 className="mt-4 text-lg text-black font-medium sm:text-xl">
                      <Link href="" className="hover:underline">
                        Property Request Posting
                      </Link>
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">
                      Easily post property for rent or sale on our user-friendly
                      site with real-time information. Our property search
                      results are quick and accurate, tailored to your exact
                      needs. Make informed decisions for buying or renting
                      property armed with honest and relevant information..
                    </p>
                    <div>
                      <button className="block  rounded bg-primary text-white py-2 px-4 text-sm font-medium transition hover:scale-105 float-right">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </article>
              <article className=" bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
                <div className="flex items-center sm:gap-8 ">
                  <Image
                    src="/search.png"
                    width={100}
                    height={100}
                    alt="search image"
                  />

                  <div>
                    <h3 className="mt-4 text-black  text-lg font-medium sm:text-xl">
                      <Link href="" className="hover:underline">
                        Agent Vetting on Our Platform
                      </Link>
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">
                      At our platform, we thoroughly vet real estate agents to
                      ensure reliability and professionalism. We connect you
                      with reputable local agents who will assist you in finding
                      the perfect property.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            {/* Nexus Sales property */}
            <article>
              <div className="grid place-items-center mt-5 min-h-[60dvh] ">
                <div className="w-10/12 grid text-center  gap-9s rounded-2xl border border-gray-400 hover:border-gray-300 p-8 group hover:bg-gray-100 duration-300 cursor-pointer shadow-lg shadow-black/100 ">
                  <section>
                    <h3 className="text-slate-900  text-center  font-bold text-3xl font-cde my-3">
                      NEXUS MollyB
                    </h3>
                    <article className="text-slate-900 text-xl text-center leading-[3rem]">
                      Hi there!, Selling a home or renting can be an exciting
                      venture, however it can also be an emotional, or even
                      stressful, experience. <br />
                      Nexus Classic understand and empathize with what you may
                      be feeling during this process. <br />
                      In our experience, the best way to manage uncertainty is
                      to arm yourself with knowledge! <br />
                      We provide small pieces of information to prepare you for
                      each step of your home selling journey.
                      <br /> For even more in-depth information, check out our
                      Buy and sell pages.
                    </article>
                    <article className="text-slate-00 text-center  text-xl leading-[3rem]">
                      We will give you value and quality for your money.
                    </article>
                    <p className="text-slate-900  text-center  text-xl leading-[3rem]">
                      {" "}
                      You will enjoy our site experience.
                    </p>
                  </section>
                </div>
              </div>

              {/* Evelyn Omolara Memorium */}

              <div className="grid place-items-center mt-10 min-h-[60dvh] ">
                <div className="w-10/12 grid text-center  gap-9s rounded-2xl border border-gray-400 hover:border-gray-300 p-8 group hover:bg-gray-100 duration-300 cursor-pointer shadow-lg shadow-black/100 ">
                  <h3 className="text-slate-900 mt-5 text-center  font-bold text-3xl font-cde my-3">
                    MollyB Memorium
                  </h3>
                  <h2 className="text-slate-800  mt-5 uppercase mb-20  text-[1rem] font-cde text-center">
                    I am dedicating this Project to the memory of our mother,
                    <br />
                    Mrs. Evelyn Omolara Wilson a.k.a MollyBW. Who passed to be
                    <br /> with the Lord recently. She was a Lover of art and
                    artist
                    <br />
                    herself. These are some of her works below. <br /> The art
                    works are for sale, please order yours.
                    <br />
                    They come with frames.
                    <br /> Call or Whatsapp 0818-569-6269 for price and other
                    art work.
                  </h2>
                </div>
              </div>
              {/* end memorium */}

              <div className="container px-4 mt-10 mx-auto">
                <div className="flex flex-wrap -m-8">
                  <div className="w-full md:w-1/3 p-8">
                    <div className="max-w-xs mx-auto text-center">
                      <Image
                        className="mx-auto mb-0 rounded-xl"
                        src="/mum.jpg"
                        width={500}
                        height={500}
                        alt=""
                      />
                      <h3 className="mb-4 text-xl font-semibold tracking-tight">
                        Mrs. Evelyn Omolara Wilson
                      </h3>
                      <p className="mb-8 tracking-tight">
                        Public Relations Officer, Linguist, Art collector and
                        Artist.
                      </p>
                      {/* <a
                    className="font-semibold text-indigo-500 hover:text-indigo-600 tracking-tight transition duration-200"
                    href="#"
                  >
                    <Link href="/Business"> Go to business page</Link>
                  </a> */}
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-8">
                    <div className="max-w-xs mx-auto text-center">
                      <Image
                        className="mx-auto mb-9 rounded-xl"
                        src="/paint1.jpg"
                        width={500}
                        height={500}
                        alt=""
                      />
                      <h3 className="mb-4 text-xl font-semibold tracking-tight">
                        TREE ART WORK 15.5 x 15.5 inches size
                      </h3>
                      <p className="mb-8 tracking-tight">
                        Just like the root of the tree supplies nutrients <br />
                        to the branches so she was to us.
                      </p>
                      <a
                        className="font-semibold text-indigo-500 hover:text-indigo-600 tracking-tight transition duration-200"
                        href="#"
                      >
                        <p>Call or Whatsapp 0818-569-6269 for price </p>
                      </a>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-8">
                    <div className="max-w-xs mx-auto text-center">
                      <Image
                        className="mx-auto mb-9 rounded-xl"
                        src="/paint2.jpg"
                        width={500}
                        height={500}
                        alt=""
                      />
                      <h3 className="mb-4 text-xl font-semibold tracking-tight">
                        PEACOCK ART 26 x 21.5 inches size
                      </h3>
                      <p className="mb-8 tracking-tight">
                        Like the peacock mum was full of life and colors
                        <br />
                        She was beautiful in and out.
                      </p>
                      <a
                        className="font-semibold text-indigo-500 hover:text-indigo-600 tracking-tight transition duration-200"
                        href="#"
                      >
                        <p>Call or Whatsapp 0818-569-6269 for price </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* mumsy paintings 2 */}
              <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -m-8">
                  <div className="w-full md:w-1/3 p-8">
                    <div className="max-w-xs mx-auto text-center">
                      <Image
                        className="mx-auto mb-0 rounded-xl"
                        src="/mumsy.jpg"
                        width={500}
                        height={500}
                        alt=""
                      />
                      <h3 className="mb-4 text-xl font-semibold tracking-tight">
                        MollyBW
                      </h3>
                      <p className="mb-8 tracking-tight">
                        She was a mother to so many and loved. <br />
                        rest in the bossom of the Lord.
                      </p>
                      {/* <a
                  className="font-semibold text-indigo-500 hover:text-indigo-600 tracking-tight transition duration-200"
                  href="#"
                >
                  <Link href="/Business"> Go to business page</Link>
                </a> */}
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-8">
                    <div className="max-w-xs mx-auto text-center">
                      <Image
                        className="mx-auto mb-9 rounded-xl"
                        src="/paint4.jpg"
                        width={500}
                        height={500}
                        alt=""
                      />
                      <h3 className="mb-4 text-xl font-semibold tracking-tight">
                        TIGER ART WORK 24 x 15 inches size.
                      </h3>
                      <p className="mb-8 tracking-tight">
                        Like the tiger she was majestic and strong. <br />
                        An Enigma and disciplinarian.
                      </p>
                      {/* <a
                  className="font-semibold text-indigo-500 hover:text-indigo-600 tracking-tight transition duration-200"
                  href="#"
                >
                  <p>Call or Whatsapp 0818-569-6269 for price </p>
                </a> */}
                    </div>
                  </div>
                  <div className="w-full md:w-1/3 p-8">
                    <div className="max-w-xs mx-auto text-center">
                      <Image
                        className="mx-auto mb-9 rounded-xl"
                        src="/paint3.jpg"
                        width={500}
                        height={500}
                        alt=""
                      />
                      <h3 className="mb-4 text-xl font-semibold tracking-tight">
                        TREE 15.5 X 15.5 inches size
                      </h3>
                      <p className="mb-8 tracking-tight">
                        Like the tree mama was a shade and help for many
                        <br />
                        she was philantropic and a giver.
                      </p>
                      {/* <a
                  className="font-semibold text-indigo-500 hover:text-indigo-600 tracking-tight transition duration-200"
                  href="#"
                >
                  <Link href="/Business"> Go to business page</Link>
                </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </section>
        <Footer />
      </main>
    </>
  );
}
