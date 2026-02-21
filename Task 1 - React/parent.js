import navbar from "./navbar.js"; 
import firstpage from "./firstpage.js";

export const parent = () => {
    return React.createElement('div',{id: 'parent'}, [navbar(), firstpage()])
}
