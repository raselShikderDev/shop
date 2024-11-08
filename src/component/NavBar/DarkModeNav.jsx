import { useEffect, useState } from "react"
import darkButton from "../../assets/website/dark-mode-button.png"
import lightButton from "../../assets/website/light-mode-button.png"


const DarkModeNav = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
  const element = document.documentElement
  console.log(element)
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark")
      localStorage.setItem("theme", "dark")
      
    } else {
      element.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  })
  
  return (
    <div className="relative">
      <img onClick={() => setTheme(theme === "light" ? "dark" : "light")} src={lightButton} alt="Dark" className={`w-12 transition-all duration-200 drop-shadow-[1px_1px_1px_rgba(0, 0, 0, 0.1)] cursor-pointer absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"}`} />
      <img onClick={()=>setTheme(theme === "light" ? "dark" : "light")} src={darkButton} alt="Light" className="w-12 transition-all duration-200 drop-shadow-[1px_1px_1px_rgba(0, 0, 0, 0.1)] cursor-pointer" />
    </div>
  )
}

export default DarkModeNav
