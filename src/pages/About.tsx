import {Menu} from '../components/Menu'



export function About (){

    return(
        <>
<Menu />
<br/>
<div className="about-container">

       <div>
           <h1>About</h1>
           <br/>
       <p className="name"><b>NAME</b> CAIO FERREIRA</p>
       <br/>
       <p className="age"><b>AGE</b>27y</p>
       <br/>
       <p className="area"><b>AREA</b> FRONTEND</p>
       <br/>
       <p className="professional">
           <b>PROFESSIONAL EXPERIENCE</b>
           Extensive knowledge in the commercial area, personal service and teamwork, with experience in multinational companies. English intermediary.
       </p>
       <br/>
       <p className="formation"><b>FORMATION</b>
       Technician in System Development - ETEC Rodrigues de Abreu (Centro Paula Souza) 2020-2021
       </p>
       <br/>
       </div>
       <div>
       <p className="photo">caio</p>
       <br/>
       <p className="social">SOCIAL CONTACTS</p>
       </div>
      

</div>
<br/>
        </>
    )
    }