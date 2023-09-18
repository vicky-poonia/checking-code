const Concept = (image,title,description) =>{
    console.log(title);
      return(
  
          <li className="concept">
            <img src={image}  />
            <h2>{title}</h2>
            <p>{description}</p>
          </li>
      )
  }
  
  export default Concept;