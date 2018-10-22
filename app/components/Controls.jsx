import React from 'react';

class Controls extends React.Component {
    static propTypes = {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    }; 
    constructor (props) {
    super(props);
    
    }
    onStatusChange= (newStatus) =>{
        return () =>{
            this.props.onStatusChange(newStatus);
        }
    }

    componentWillReceiveProps= (newProps) => {
        // console.log('componentWillReceiveProps', newProps.countdownStatus)
    }

    render(){
        var {countdownStatus}  = this.props
        var renderStartStopButton = () =>{
            if(countdownStatus === 'started'){
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            }else {
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            }
        }
        return(
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
            
        )
    }
}
// var Controls = React.createClass({
//     propTypes :{
//         countdownStatus: React.PropTypes.string.isRequired,
//         onStatusChange: React.PropTypes.func.isRequired
//     },
//     onStatusChange: function(newStatus){
//         return () =>{
//             this.props.onStatusChange(newStatus);
//         }
//     },

//     //recevie countdownStatus
//     componentWillReceiveProps: function(newProps){
//         // console.log('componentWillReceiveProps', newProps.countdownStatus)
//     },
//     render: function(){
//         var {countdownStatus}  = this.props
//         var renderStartStopButton = () =>{
//             if(countdownStatus === 'started'){
//                 return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
//             }else {
//                 return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
//             }
//         }
//         return(
//             <div className="controls">
//                 {renderStartStopButton()}
//                 <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
//             </div>
          
//         )
//     }
// })

module.exports = Controls