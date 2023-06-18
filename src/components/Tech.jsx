import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";


const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      <div className="w-full text-center text-[30px] text-bold">Technologies I use</div>
      {
        technologies.map(technology => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="text-center mt-2 space-y-2">{technology.name}</p>
          </div>
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech, "");