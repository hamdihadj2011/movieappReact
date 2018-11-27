import React from 'react';
import {FormInline, Fa  } from 'mdbreact';



class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            keyword:''
         }
    }
    handelchange=(event)=>{
        this.setState({keyword:event.target.value})
        this.props.searchname(this.state.keyword)
    }

    render() { 
        return ( 
            <FormInline className="md-form active-cyan active-cyan-2 search">
  <Fa icon="search" />
  <input style={{ width:"40%", padding:"2%",margin:"2%",borderRadius:'5px',outline:'none',fontSize:'100%'}}
 
  className="form-control form-control-sm ml-3 w-75" type="text" onChange={this.handelchange}/>

</FormInline> 
         );
    }
}
 

export default Search;