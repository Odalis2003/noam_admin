import React, {useState} from "react";

const LinkForm = (props)=> {

    const initialStateValues ={
        categoria: '',
        descripcion:'',
        precio: '',
        nombre:'',
        material: '',
    }

    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = e=>{
        const {name, value} = e.target;
        setValues({...values, [name] : value});
        
    };

    function handlesubmit(e) {
        e.preventDefault();
        console.log(values);
        props.addOrEditLink(values);
    }


    return (
        <form className="card card-body" onSubmit={handlesubmit}>
           

           {/* CATEGORIA*/}
           <div className="form-froup input-group my-2">
            <div className="input-group-text bg-light">
            <i className="fa-sharp fa-solid fa-cubes-stacked"></i>
            </div>
            <input type="text" className="form-control" name="categoria" placeholder="Categoria" onChange={handleInputChange}/>
            
           </div>



           {/* Descripcion*/}
           <div className="form-group">
            <textarea name="descripcion" rows="3" className="form-control" placeholder="Escribe una descripción" onChange={handleInputChange}></textarea>
           </div>


    
           {/* Precio*/}
           <div className="form-froup input-group my-2">
            <div className="input-group-text bg-light">
            <i className="fa-solid fa-money-bill"></i>
            </div>
            <input type="number" className="form-control" name="precio" placeholder="Precio del producto" onChange={handleInputChange}/>
           </div>



            {/* NOMBRE*/}
            <div className="form-froup input-group my-2">
            <div className="input-group-text bg-light">
            <i className="fa-solid fa-box"></i>
            </div>
            <input type="text" className="form-control" name="nombre" placeholder="Nombre del producto" onChange={handleInputChange}/>
           </div>

           {/* MATERIAL*/}
           <div className="form-froup input-group my-2">
            <div className="input-group-text bg-light">
            <i className="fa-solid fa-screwdriver-wrench"></i>
            </div>
            <input type="text" className="form-control" name="material" placeholder="Material del producto" onChange={handleInputChange}/>
           </div>



           




           <button type="submit" className="btn btn-primary btn-block my-2" >
            Save
           </button>

        </form>
    )
}

export default LinkForm;