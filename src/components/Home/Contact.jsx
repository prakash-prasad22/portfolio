import { PiPhoneCallFill } from "react-icons/pi";
import { MdOutlineAlternateEmail } from "react-icons/md";

function Contact() {

  return (
    <div className="py-4 md:py-20 px-10 bg-zinc-900">
      <div className="w-full flex flex-col md:flex-row gap-4">

        {/* Contact Details */}
        <div className="w-full md:w-1/2 mt-8 md:mt-30">
            {["Let's" , "Work" , "Together"].map((item,index) => {
                    return (
                      <div className="w-fit flex" key={index}>
                        {index === 1 && (<div className="w-[6vw] h-[1vh] md:h-[1vw] mt-[1.5vw] mr-2 bg-[#28534f]"></div>)}
                        <h2 className="uppercase font-[highlighted] text-[#28534f] text-[4vh] md:text-[4vw] h-full leading-none md:leading-[4vw]">
                          {item}
                        </h2>
                      </div>
                    )
            })}

            <div className="flex flex-col gap-4 mt-10 ">
              <div className="flex gap-4 items-center text-[#28534f] font-[primary] ">
                <div className="text-5xl font-bold">
                  <PiPhoneCallFill />
                </div>
                <div>
                  <h2 className="font-semibold text-md md:text-2xl">+91 9707319669</h2>
                  <p>Call me at</p>
                </div>
              </div>
              <div className="flex gap-4 items-center text-[#28534f] font-[primary] ">
                <div className="text-5xl font-bold">
                  <MdOutlineAlternateEmail />
                </div>
                <div>
                  <h2 className="block font-semibold text-md md:text-2xl">prakashprasad221100@gmail.com</h2>
                  <p>Email at</p>
                </div>
              </div>
            </div>  
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-2/3 h-[50vmax] border border-[#28534f] p-5 shadow-lg shadow-[#28534f] rounded-2xl">
            <h1 className="font-[highlighted] text-2xl md:text-5xl text-[#28534f] py-4 md:py-10 font-semibold">Get In Touch</h1>
            <div className="flex flex-col gap-6">
              {[{target : "What's your name ?", hint : "Enter your name"} ,
                {target : "What's your email ?" , hint : "Enter your email address"} ,
                {target : "Type in Your Message :" , hint : "Enter your message"} ].map((item,index) => {
                    return (
                      <div className="w-full flex flex-col gap-2" key={index}>
                        <h2 className="text-[#28534f] text-[2vmax] font-semibold font-[primary]">
                          {item.target}
                        </h2>
                        <input 
                              type="text" 
                              placeholder={item.hint} 
                              className="w-full h-[4vmax] font-[secondary] px-4 border-b-[1px] border-zinc-700 text-[#3b9778] text-[2vmax]"/>
                      </div>
                    ) 
              })}
            </div>

            <div className="flex justify-end mt-4 md:mt-10">
                <button className="rounded-lg text-zinc-900 bg-[#28534f] md:bg-[#3b9778] text-md px-10 py-3 font-[primary] font-bold
                              hover:bg-[#28534f] hover:shadow-lg hover:shadow-[#28534f] hover:text-lg cursor-pointer"
                >  
                      Send
                </button>
            </div>
        </div>
      </div>
    </div>

  )
}

export default Contact