import React, { Component } from 'react';

import { Header } from '../../modules/header';

import { Website404 } from '../../../module/build/react-divcreator';

class NotFound extends Component {

    constructor(props) {
        super(props)
    }

    naviagateToTop() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="website--notfound">
                <Header/>
                <Website404
                    type='clouds'
                    link={false}
                    width='100%'
                    height='100%'
                    href='/#'
                    text={
                        (
                            <span>
                                Go to homepage
                            </span>
                        )
                    }
                    attributes={
                        {
                            title: 'Navigate to the homepage'
                        }
                    }
                    function={this.naviagateToTop}
                />
            </div>
        );
    }
};
export default NotFound;