import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Intro.css';

class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    };
        componentWillMount() {
            //truoc khi render
            const data = {
                "data": 
                    {
                        "introtext":"Gia nhập thế giới làm đẹp và thành công cùng Bella Beauty",
                        "introurl": "http://haravan.com/?ref=nobita-1",
                      
                    }
                
            };
            this.setState(data);
        };
        componentDidMount() {
            //sau khi render
            // Jquery here $(...)...
        };
        render() {
            return <div class="wrapper-top50">
	
            <div class="intro">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="msg-intro">
                                <a href={this.state.data.introurl}>{this.state.data.introtext}</a>
                            </div>
                        </div>
                    </div>		
                </div>
            </div>
            </div>
        }
    }

    export default Intro