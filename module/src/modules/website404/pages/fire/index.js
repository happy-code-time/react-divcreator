import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './index.scss';

class Fire extends Component {

    constructor (props) {
        super(props);

        this.state = {
            width: this.props.props.width ? this.props.props.width : (window.screen.width ? `${window.screen.width}px` : '100vw'),
            height: this.props.props.height ? this.props.props.height : (window.screen.height ? `${window.screen.height}px` : '100vh'),
            link: this.props.props.link ? this.props.props.link : false,
            href: this.props.props.href ? this.props.props.href : '',
            text: this.props.props.text ? this.props.props.text : 'Homepage',
            attributes: this.props.props.attributes ? this.props.props.attributes : {},
            function: this.props.props.function ? this.props.props.function : null,
            text404: this.props.props.text404 ? this.props.props.text404 : '404',
            text1: this.props.props.text1 ? this.props.props.text1 : 'THE PAGE',
            text2: this.props.props.text2 ? this.props.props.text2 : 'WAS NOT FOUND',
            bad: this.props.props.bad ? this.props.props.bad : false,
        }
    }

    linkCallback(e) {
        if (this.state.function && 'function' === typeof this.state.function) {
            (this.state.function)(e);
        }
    }

    render() {
        const styleBox = {
            minWidth: `${this.state.width}`,
            minHeight: `${this.state.height}`
        }

        return (
            <div style={styleBox} className="react-divcreator-404-fire">
                <div className="holder-404">
                    <div className="wall-bottom"></div>
                </div>
                <div className="content-404">
                    <div className="text-404">
                        {
                            this.state.text404
                        }
                    </div>
                    <hr />
                    <div className="text-1">
                        {
                            this.state.text1
                        }
                    </div>
                    <div className="text-2">
                        {
                            this.state.text2
                        }
                    </div>
                    {
                        '' !== this.state.href && true === this.state.link &&
                        <Link
                            className="button-navigation"
                            to={this.state.href}
                            {...this.state.attributes}
                            onClick={(e) => this.linkCallback(e)}
                        >
                            {
                                this.state.text
                            }
                        </Link>
                    }
                    {
                        '' !== this.state.href && false === this.state.link &&
                        <a
                            className="button-navigation"
                            href={this.state.href}
                            {...this.state.attributes}
                            onClick={(e) => this.linkCallback(e)}
                        >
                            {
                                this.state.text
                            }
                        </a>
                    }
                </div>
            </div>
        );
    }
};
export default Fire;