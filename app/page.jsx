import Image from "next/image";
import nextImages from "../public/illu.png";
import gifImage from "../public/Programming.gif";

export default function Home() {
  return (
    <main>
      <div className="box-border block ">
        <div>
          <section>
            <div id="firstPage">
              <div className="box-border flex items-center justify-between h-screen p-0 m-0 text-blue-300 bgc relative pb-8 pt-8">
                <div className="flex-col items-center block mx-32 text-4xl">
                  <div className="mb-5">
                    <span className="">Hello There!</span>
                  </div>
                 
                  <div className="mb-12">
                    <span>I am Vaibhav Jaiswal</span>
                  </div>
                  <p className="">Software Developer</p>
                </div>

                <div className="p-12">
                  {/* <Image src={nextImages} alt="img"  width={450} height={500}/> */}
                  <Image src={gifImage} alt="img" width={450} height={500} />
                </div>
              </div>
            </div>

            {/* Second Page Start from here */}

            <div
              className="flex-col text-white bgc pb-16 pt-16"
              id="secondPage"
            >
              <h1 className="text-5xl ml-32 mb-2 box-border text-white text-center">
                LET ME <span className=" text-yellow-300">INTRODUCE</span>{" "}
                MYSELF
              </h1>
              {/* This div for image and paragraph */}
              <div className="flex justify-between  p-32">
                <p>
                  I am a 4th year undergraduate at Guru Ghasidas University
                  <br />
                  <br />
                  I am a tech geek and always learn and explore things related
                  to Technology and Softwares.
                  <br />
                  <br />I am a{" "}
                  <span className="text-yellow-300">Full Stack Developer</span>.
                  <br />
                  <br />I am Co-lead of{" "}
                  <span className="text-yellow-300">Google</span> Developer
                  Club.
                  <br />
                  <br />I love problem solving and{" "}
                  <span className="text-yellow-300">
                    competitive programming
                  </span>
                  .
                  <br />
                  <br />
                  My field of Interest &apos;s are building new{" "}
                  <span className="text-yellow-300">
                    Web Technologies and Products
                  </span>
                  .
                  <br />
                  <br />I also have knowledge of{" "}
                  <span className="text-yellow-300">Web3</span> Cryptography and
                  Blockchain.
                  <br />
                  <br />
                  Currently I&apos;m learning different{" "}
                  <span className="text-yellow-300">
                    System Design Concepts
                  </span>{" "}
                  to make an application fast and scalable.
                  <br />
                  <br />
                  My hobbies are playing cricket, watching movie.
                  <br />
                  <br />
                </p>
                <div className="relative">
                  <Image src={gifImage} alt="img" width={450} height={500} />
                </div>
              </div>
              <div className="text-4xl text-center m-1 ">Find Me ON</div>
              <div className="text-sm text-center m-1">
                Feel free to <span className="text-yellow-300">connect</span>{" "}
                with me
              </div>
              <div className="text-center  mt-4">Icons</div>
            </div>
          </section>
          <footer className="box-border flex items-center justify-between w-full pt-2 pb-2 pl-3 pr-3 ml-auto mr-auto text-white bg-black h-14">
            <p>Designed And Developed By Vaibhav Jaiswal</p>
            <p> Copyright 2023 Vaibhav Jaiswal</p>
            <p className="pl-3 pr-14">social media handle</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
