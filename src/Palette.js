import React,{Component} from 'react';
import Box from './Box.js';
import './Palette.css';

// Hardcoded for 16 boxes

class Palette extends Component {

    static defaultProps = {
        colors : ['#0A9396','#EE9B00','#FAE1DD',
                  '#0096C7','#ADE8F4','#7209B7',
                  '#219EBC','#FFADAD','#B5E48C',
                  '#A7C957','#ADB5BD','#14213D',
                  '#EE66C4D','#7BCBF','#84A59D',
                  '003566']
    }
    render() {
        return(
            <div className='Palette'>
                {this.props.colors.map((ele,idx,arr) => <Box colors={arr} /> )}
            </div>
        )
    }
}

export default Palette;