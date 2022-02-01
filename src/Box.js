import React,{Component} from 'react';
import './Box.css'

class Box extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num:Math.floor(Math.random() * this.props.colors.length )
        }
        this.handleClick  = this.handleClick.bind(this);
    }

    changeColor() {
        let rand;
        
        do{
            rand=Math.floor(Math.random() * this.props.colors.length )
        } while(rand===this.state.num)

        this.setState({num:rand});
    }

    handleClick() {
        this.changeColor();
    }

    render() {
        return (
            <div className = 'Box' onClick={this.handleClick} style={{backgroundColor:this.props.colors[this.state.num]}}></div>
        )
    }
}

export default Box;