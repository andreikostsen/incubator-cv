import React from "react";

import style from './App.module.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Works} from "./works/Works";
import {Freelance} from "./freelance/Freelance";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
  return (

      <div className={style.App}>

          <Header />
          <Main />
          <Skills />
          <Works />
          <Freelance />
          <Contacts />
          <Footer />

      </div>
  );
}

export default App;
