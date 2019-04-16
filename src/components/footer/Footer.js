import React from 'react';
import 'jquery/src/jquery';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.min.css';
import './Footer.css';
import FooterInfo from './sub/FooterInfo.js'
import FooterCenter from './sub/FooterCenter.js'
import FooterMail from './sub/FooterMail.js'
import FooterBottom from './sub/FooterBottom.js'
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    };
        componentWillMount() {
            //truoc khi render
        
        };
        render() {
            return <footer>
                <FooterInfo />
                <FooterCenter />
                <FooterMail />
                <FooterBottom/>
                </footer>
            
       
        }
    }

    export default Footer