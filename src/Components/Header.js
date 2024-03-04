import {Link} from 'react-router-dom'
const Header = () =>{

    return(
        <>
        <div className="flex justify-between	">
        <h1 className= "text-5xl pt-2 mx-2 ">𝓷𝓪𝓶𝔂𝓾𝓶</h1>
        <div className="flex">
        <h1 className= "mx-3 py-6 text-xl italic">
          <Link to = "/">Home</Link>
          </h1>
        <h1 className= "mx-3 py-6 text-xl italic"><Link to = "/About">About</Link></h1>
        <h1 className= "mx-3 py-6 text-xl italic"><Link to = "/Contact">Contact</Link></h1>
        <h1 className= "mx-3 py-6 text-xl italic">Login</h1>
        </div>
        </div>
        <div className="pl-[300px] pt-2 flex bg-black text-white h-16">
          <h1 className="mx-4 pt-1">GET THE <strong className="italic text-3xl">Latest recipes</strong> RIGHT IN YOUR INBOX</h1>
          <input className= "h-8 w-[300px] my-2"type="text" placeholder="   email address"/>
          <h1 className="mx-4 pt-3 ">SIGN UP</h1>
        </div>
        </>
    )
}

export default Header