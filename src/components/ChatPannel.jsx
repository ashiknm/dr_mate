import MicIcon from "@mui/icons-material/Mic";
import logo from "../assets/logo.svg"
import { useModeContext } from "../contexts/hooks";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


export default function ChatPannel() {
  const {mode, colors} = useModeContext();
    return (
        <div
          style={{backgroundColor : colors[mode].backgroundColor}}
          className={` w-[100%]  p-4 flex flex-col`}
        >

          <h3 style={{color : colors[mode].textColor}}>
            {mode==='mode1'? "Pruthvi C M" : "Genetic Research Project"}
          </h3>

          <div className="w-full h-20 flex justify-center ">
            <div className="flex items-center w-[95%]  gap-x-10">
              <div style={{borderColor : colors[mode].textColor}} className="w-[45%] border-b"></div>
              <h3 style={{color : colors[mode].textColor}}>Today</h3>
              <div style={{borderColor : colors[mode].textColor}} className="w-[45%] border-b"></div>
            </div>
          </div>
    
          <div className="w-full flex justify-end mt-5 mb-10">
            <section className="w-[55%] min-h-30 flex items-end gap-x-4">
              <div style={{backgroundColor : colors[mode].primaryColor}} className="userMessage w-[80%] h-auto  py-4 px-2">
                <p className="text-white/[30%] text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae, amet. Eius ut, est corporis deserunt voluptate
                </p>
              </div>
              <div style={{backgroundColor : colors[mode].primaryColor}}  className="userAvatar"></div>
            </section>
          </div>
    
          <div className="w-full flex justify-start mt-5 ms-5">
            <section className="w-[55%]  min-h-30 flex items-end gap-x-4">
              <div style={{backgroundColor : colors[mode].secondaryColor}} className="userAvatar flex items-center justify-center">
                <img src={logo} alt="Logo" className={`logo ${mode==='mode2'? 'logo2': ''}`} />
              </div>
              <div style={{backgroundColor : colors[mode].secondaryColor}} className="replyMessge w-[80%] h-auto  py-4 px-2">
                <p className="text-white/[90%] text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda nisi quas excepturi perferendis. Quibusdam repellendus
                  nihil facere obcaecati, tempore, quo cumque blanditiis id, quos at
                  odio non? Reprehenderit, obcaecati pariatur! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Error neque soluta, deserunt
                  maiores minus tempore eaque aliquid necessitatibus tempora odit,
                  eveniet repellendus pariatur dolorem fuga aliquam ullam velit!
                  Perferendis, dignissimos.
                </p>
              </div>
            </section>
          </div>
    
          <div className="h-20 w-full  mt-auto flex items-center gap-x-2 p-3">
            <div style={{backgroundColor : colors[mode].inputArea}}  className="inputArea w-full flex items-center justify-between gap-2 p-3">
              <input placeholder="Type your messsage here..." style={{color :  colors[mode].textColor}} className=" text-sm w-[90%] bg-transparent outline-none"  />
              <SendOutlinedIcon className="text-white/[60%] w-[10%]" />
            </div>
            <div style={{backgroundColor : colors[mode].inputArea}}   className="micArea flex">
              <MicIcon  className="m-auto text-white" />
            </div>
          </div>
        </div>
      );
}
