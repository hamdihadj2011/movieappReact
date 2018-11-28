import React, {Component} from 'react';
import './Loader.css'
function LoaderHOC(WrappedComponent) {
  return class LoaderHOC extends Component{
  
    render(){
    
        return this.props.moviesList.length===0 ? <div><p className="ld" > Movie not Found ... </p><div class="lds-circle"><div></div></div></div> : <WrappedComponent {...this.props}/>;
    
      }
  }

}
export default LoaderHOC;