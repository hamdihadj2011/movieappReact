import React from 'react';
import {FormInline, Fa  } from 'mdbreact';



const Search =({value = '', onChange = () => {}}) => (
    

    
            <FormInline className="md-form active-cyan active-cyan-2 search">
  <Fa icon="search" />
  <input style={{ width:"40%", padding:"2%",margin:"2%",borderRadius:'5px',outline:'none',fontSize:'100%'}}
 
  className="form-control form-control-sm ml-3 w-75" type="text" value={value} 
  onChange={(event) => {
      onChange(event.target.value)
  }}/>

</FormInline> 
    
)
 

export default Search;