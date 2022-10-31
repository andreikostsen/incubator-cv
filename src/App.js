import React, {useLayoutEffect, useState} from "react";

import style from './App.module.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {Freelance} from "./freelance/Freelance";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import {Stories} from "./story/Stories";
import {Sidebar} from "./common/components/sidebar/Sidebar";

// helpers

const clamp = (value) => Math.max(0, value);

const isBetween = (value, floor, ceil) =>
    value >= floor && value <= ceil;


// hooks
const useScrollspy = (ids, offset = 0) => {
    const [activeId, setActiveId] = useState("");

    useLayoutEffect(() => {
        const listener = () => {
            const scroll = window.scrollY;

            const position = ids
                .map((id) => {
                    const element = document.getElementById(id);

                    if (!element) return { id, top: -1, bottom: -1 };

                    const rect = element.getBoundingClientRect();
                    const top = clamp(rect.top + scroll - offset);
                    const bottom = clamp(rect.bottom + scroll - offset);

                    return { id, top, bottom };
                })
                .find(({ top, bottom }) => isBetween(scroll, top, bottom));

            setActiveId(position?.id || "");
        };

        listener();

        window.addEventListener("resize", listener);
        window.addEventListener("scroll", listener);

        return () => {
            window.removeEventListener("resize", listener);
            window.removeEventListener("scroll", listener);
        };
    }, [ids, offset]);

    return activeId;
};


function App() {

    const ids = ["Home", "Skills", "Portfolio", "Story","Contacts"]
    const activeId = useScrollspy(ids, 80); // 54 is navigation height

  return (

      <div className={style.App} id="App">
          <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} menuItems={ids}/>

          <div id="page-wrap">
              <Header menuItems={ids} activeId={activeId}/>
              <Main id={ids[0]}/>
              <Skills id={ids[1]}/>
              <Works id={ids[2]}/>
              <Freelance/>
              {/*<Contacts />*/}
              <Stories id={ids[3]}/>
              <Footer id={ids[4]}/>
          </div>

      </div>
  );
}

export default App;
