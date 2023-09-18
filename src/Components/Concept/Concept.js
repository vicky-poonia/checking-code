const Concept = (i) =>{

  // const Concept = (image,title,description) =>{
    console.log(i);
      return(
          <li className="concept">
            {/* <img src={i.p.image}  />
            <h2>{i.p.title}</h2>
            <p>{i.p.description}</p> */}
            <img src={i.title.image}  />
            <h2>{i.title.title}</h2>
            <p>{i.title.description}</p>
          </li>
      )
  }
  
  export default Concept;