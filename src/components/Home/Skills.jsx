import { skillsData } from '../../assets/data/skillsData';
import Marquee from 'react-fast-marquee';
import BentoCard from "./BentoCard"
import { CodeXml, Cpu, Database, Palette, Globe, HardDrive, Terminal } from 'lucide-react';


function Skills() {

  return (
    <section id='skills' className="relative w-full py-20 bg-linear-to-b from-[#253b39] to-zinc-900">
        <div className="w-full">
            <h1 className="font-[primary] text-3xl md:text-6xl text-[white] uppercase text-center font-semibold leading-none">  My Skills   </h1>
            <div className="flex w-9/10 m-auto overflow-hidden mask-edges flex-nowrap">
                <Marquee speed={100}>
                    <div className="flex mt-10 md:mt-20 pl-20 space-x-20 animate-marquee">
                        {
                            skillsData.map((skill)=>{
                                return(
                                    <div key={skill.id} className="flex flex-col items-center gap-4">
                                        <img src={skill.image} alt="" className="p-2 invert-75 rounded-0 aspect-square w-[70px] h-[70px] md:w-[150px] md:h-[150px]"/>
                                        <div className="w-5/5 w-3/5 p-2 m-auto mt-2 font-[highlighted]  text-center text-white border-0 border-blue-400 rounded-xl bg-white/20">{ skill.name }</div>
                                    </div>
                                )
                            })
                        }
                    </div>
              
              
                    <div className="flex pl-20 mt-10 md:mt-20 space-x-20 animate-marquee">
                        {
                            skillsData.map((skill)=>{
                                return(
                                    <div key={skill.id} className="flex flex-col items-center gap-4">
                                        <img src={skill.image} alt="" className="p-2 invert-75 rounded-0 aspect-square w-[70px] h-[70px] md:w-[150px] md:h-[150px]"/>
                                        <div className="w-5/5 md:w-3/5 p-2 m-auto mt-2 font-[highlighted] tracking-tighter text-center text-white border-0 border-blue-400 rounded-xl bg-white/20">{ skill.name }</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Marquee>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-9/10 m-auto mt-20">
          
              {/* LAYER 1: Frontend & Languages */}
              <div className="md:col-span-2">
                <BentoCard 
                  icon={<Palette size={28} />}
                  title="Frontend Development" 
                  colorClass="text-cyan-400" 
                  borderHoverColor="rgba(34, 211, 238, 0.2)"
                >
                  {["HTML5","CSS3","ReactJS", "NextJs", "Redux", "Tailwind CSS", "Framer Motion","GSAP"].map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm text-zinc-400">
                      {skill}
                    </span>
                  ))}
                </BentoCard>
              </div>

              <BentoCard 
                icon={<CodeXml size={28} />}
                title="Languages" 
                colorClass="text-emerald-400" 
                borderHoverColor="rgba(52, 211, 153, 0.2)"
              >
                <div className="flex flex-wrap gap-3">
                  {["C++", "JavaScript", "Kotlin",].map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm text-zinc-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </BentoCard>

              {/* LAYER 2: Tools & Backend */}
              <BentoCard
                icon={<Cpu size={28} />} 
                title="Tools & Environment" 
                colorClass="text-purple-400" 
                borderHoverColor="rgba(192, 132, 252, 0.2)"
              >
                <div className="flex flex-wrap gap-3">
                  {["Git/GitHub", "Postman", "VS Code", "Android Studio", "Vite"].map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm text-zinc-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </BentoCard>

              <div className="md:col-span-2">
                <BentoCard
                  icon={<Database size={28} />} 
                  title="Backend & Databases" 
                  colorClass="text-orange-400" 
                  borderHoverColor="rgba(251, 146, 60, 0.2)"
                >
                  <div className="flex flex-wrap gap-3">
                    {["NodeJS", "ExpressJs", "RestAPI", "MongoDB", "MySQL", "JWT", "Firebase"].map(skill => (
                      <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm text-zinc-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </BentoCard>
              </div>

              {/* LAYER 3: Core CS & DevOps (New) */}
              {/* <div className="md:col-span-2">
                <BentoCard
                  icon={<HardDrive size={28} />} 
                  title="Computer Science Core" 
                  colorClass="text-pink-400" 
                  borderHoverColor="rgba(244, 114, 182, 0.2)"
                >
                  <div className="flex flex-wrap gap-3">
                    {["DSA", "OOPS", "DBMS", "Operating Systems", "Computer Networks", "System Design"].map(skill => (
                      <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm text-zinc-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </BentoCard>
              </div> */}

              {/* DevOps - Commented out for future learning */}
              {/* <BentoCard
                icon={<Globe size={28} />} 
                title="DevOps & Cloud" 
                colorClass="text-yellow-400" 
                borderHoverColor="rgba(250, 204, 21, 0.2)"
              >
                <div className="flex flex-wrap gap-3">
                  {["Docker", "Kubernetes", "AWS", "CI/CD", "Nginx"].map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-sm text-zinc-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </BentoCard> 
              */}

              {/* Future AI Section Placeholder */}
              {/* <div className="md:col-span-3">
                <BentoCard icon={<Terminal size={28} />} title="Artificial Intelligence" colorClass="text-blue-400" ... />
              </div>
              */}

            </div>
        </div> 
    </section>
  )
}

export default Skills