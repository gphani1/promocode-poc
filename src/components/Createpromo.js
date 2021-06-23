import React,{ Fragment } from 'react'
import Header from './Header';
import CreateForm from './CreateForm';
import Table from './Table';


class Createpromo extends React.Component{
    constructor(props){
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleformSubmit = this.handleformSubmit.bind(this)
        this.handleChecked = this.handleChecked.bind(this)

        this.state = {
            code : '',
            decription: '',
            discount: '',
            delivery:false,
            items:[]
        }
    }

    handleformSubmit = (e) => {
        e.preventDefault();
        

        const details = {
            code:this.state.code,
            description: this.state.description,
            discount: this.state.discount,
            delivery:this.state.delivery
        };
        //console.log(details)

        this.setState(() => ({
            items:[...this.state.items,details],
            code: '',
            decription: '',
            discount: '',
            delivery:false
            
        }))
    }

    handleInputChange = (e) =>{
       let name = e.target.name
       let value = e.target.value

       this.setState({
           [name] : value
       })
    }
    handleChecked = (e) => {
        
        this.setState({  [e.target.name]: e.target.checked });
    }
     
    render(){
        const title = "Create New Promo Code"
        return(
            <Fragment className= "container" >
                <div className = "display_create">
                    <Header
                    title = {title}/>
                    <CreateForm
                      handleformSubmit = {this.handleformSubmit}
                      handleInputChange = {this.handleInputChange}
                      code = {this.state.code}
                      decription={this.state.decription}
                      discount = {this.state.discount}
                      delivery = {this.state.delivery}
                      handleChecked = {this.handleChecked}
                    />

                </div>
              
              <Table 
              promoCodeDetails= {this.state.items}/>
            </Fragment>
        )
    }
}



export default Createpromo;