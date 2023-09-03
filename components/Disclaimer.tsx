import React from 'react'

// https://stackoverflow.com/questions/55151041/window-is-not-defined-in-next-js-react-app

export default function Disclaimer() {
  return (
    <>
      <div className="w-full absolute bottom-0 bg-white border-[18px] border-black h-auto flex justify-between items-center overflow-hidden z-0">
        <div className="animate">
          {
            [0, 1].map((i) => (
              <div key={i} className="text-[34px] font-poe text-black whitespace-nowrap inline-flex items-center justify-center">&nbsp;&#9733;&nbsp;&#9733;&nbsp;&#9733;&nbsp;&#9733;&nbsp;&#9733;&nbsp;CAUTION: SATIRE AND EPICNESS AHEAD!!111!i WELCOME TO THE SITE THAT BLURS THE LINE BETWEEN IRONY, SERIOUSNESS, AND CRINGE (OR MAYBE THAT LINE NEVER EXISTED TO BEGIN WITH). ALL OPINIONS ARE VALID BUT MINE ARE MORE VALID AND SHOULD BE TAKEN AS NOTHING BUT THE ABSOLUTE TRUTH. SORRY, I DON’T MAKE THE RULES (I DO, IN FACT, MAKE THE RULES). YEE-HAW!!!</div>
            ))
          }
        </div>
      </div>
      
    </>
  );
}