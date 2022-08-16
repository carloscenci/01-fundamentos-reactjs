import Header from './components/Header';
import Post from './Post';

import './global.css'
import styles from './App.module.css'
import { SideBar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post 
            author="Carlos Cenci" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quisquam vitae at et sequi officia harum! Quidem repellat, eos dolores, architecto enim in ab consectetur harum alias, illum tempore atque!" 
          />
          <Post 
            author="Alexa" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quisquam vitae at et sequi officia harum! Quidem repellat, eos dolores, architecto enim in ab consectetur harum alias, illum tempore atque!" 
          />
        </main>
      </div>
    </div>
  )
}

export default App
