import React, { Component } from 'react';
class Dropdown extends React.Component {

    constructor(props){
      super(props)
      this.state = {}
    }
    renderSelectOtions (arr){
      var proList =[];
      arr.forEach( 
        (element)=>{
          proList.push(<option className="list-group-item text-white bg-dark" value={element.id}>{element.name}</option>)
        });
      return proList;
    }
    render (){
      const pros = [
        {
          id:70388657,
          name:"navi.dendi",
          img:''
        },
        {
          id:105248644,
          name:'liquid.miracle',
          img:''
        },
        {  
          id:86745912,
          name:'eg.arteezy',
          img:''
        },
        {
          id:92423451,
          name:'vp.9pasha',
          img:''
        }
      ];
  
  
      return(
        <select onChange={(event)=>this.props.setId(event.target.value)}  className="form-control bg-dark text-white">{this.renderSelectOtions(pros)}</select>
      );
    }
  }
  
export default Dropdown;  