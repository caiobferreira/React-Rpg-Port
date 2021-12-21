import {Menu} from '../components/Menu'

export function Home(){

    return(
        <>
        <Menu/>
        <div className='home-container'>
        <h1>WELCOME TO REACT WORLD!</h1>
        <div className="about-container">
        <p>
        Welcome no my programing kingdom!
        </p>
        <br/>
        <p>
<p>This web app was developed with the intention of serving as an interactive portfolio built entirely from ReactJs.</p>
<br/>
<p>
This web application consists of:<br/>
- <b>About:</b> Where all developer information is found;<br/>
- <b>Skills:</b> Where are the developer's skills and skill levels;<br/>
- <b>Battle:</b> A mini game in the RPG style that consists of rolling dice and battling characters, resulting in the gain or loss of xp, which makes you level up or down.<br/>
</p>
<br/>
<p>
This application was developed using, ReactJs, Typescript, Sass and Firebase FireStore.
</p>
        </p>
        </div>
        <br/>
        <button>THE BATTLE BEGIN (CONTRACT ME PLEASE, IS NOT A JOKE)</button>
        </div>

        </>
    )
}