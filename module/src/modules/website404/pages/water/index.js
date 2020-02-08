import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import './index.scss';

class Water extends Component {

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
            shipName: this.props.props.shipName ? this.props.props.shipName : 'SHIP-12345',
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
            <div style={styleBox} className="react-divcreator-404-water">
                <div className="holder-404">
                    <div className="water">
                        <div className='box'>
                            <div className="ship-move">
                                <div className="ship">
                                    <p className="ship-name">
                                        {
                                            this.state.shipName
                                        }
                                    </p>
                                    <div className="box box-1">
                                        <div className="point-x"></div>
                                        <div className="point-y"></div>
                                    </div>
                                    <div className="box box-2">
                                        <div className="point-x"></div>
                                        <div className="point-y"></div>
                                    </div>
                                    <div className="box box-3">
                                        <div className="point-x"></div>
                                        <div className="point-y"></div>
                                    </div>
                                    <div className="box box-4">
                                        <div className="point-x"></div>
                                        <div className="point-y"></div>
                                    </div>
                                    <div className="box box-5">
                                        <div className="point-x"></div>
                                        <div className="point-y"></div>
                                    </div>
                                    <div className="box box-6">
                                        <div className="point-x"></div>
                                        <div className="point-y"></div>
                                    </div>
                                    <div className="box box-7">
                                        <div className="point-x"></div>
                                        <div className="point-y"></div>
                                    </div>
                                    <div className="box box-8">
                                        <div className="point-x"></div>
                                        <div className="point-y"></div>
                                    </div>
                                    <div className="box box-9">
                                        <div className="point-x"></div>
                                        <div className="point-y"></div>
                                    </div>
                                    <div className="box box-10">
                                        <div className="point-x"></div>
                                        <div className="point-y"></div>
                                    </div>
                                    <div className="ship-bottom">
                                        <div className="spin">
                                            <div className="spin-end">
                                                <div className="spin-1"></div>
                                                <div className="spin-2"></div>
                                            </div>
                                            <span className="air-move">
                                                <div className="air air-1"></div>
                                                <div className="air air-2"></div>
                                                <div className="air air-3"></div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="water-holder">
                                <div className='wave water-1'></div>
                                <div className='wave water-2'></div>
                                <div className='wave water-3'></div>
                                <div className='wave water-4'></div>
                                <div className='wave water-5'></div>
                                <div className='wave water-6'></div>
                                <div className='wave water-7'></div>
                                <div className='wave water-8'></div>
                                <div className='wave water-9'></div>
                                <div className='wave water-10'></div>
                                <div className='wave water-11'></div>
                                <div className='wave water-12'></div>
                                <div className='wave water-13'></div>
                                <div className='wave water-14'></div>
                                <div className='wave water-15'></div>
                                <div className='wave water-16'></div>
                                <div className='wave water-17'></div>
                                <div className='wave water-18'></div>
                                <div className='wave water-19'></div>
                                <div className='wave water-20'></div>
                            </div>
                            <div className="fish">
                                <span className="fish-content">
                                    <div className={true == this.state.bad ? 'fish-body bad-fish' : 'fish-body'}>
                                        <div className="eye">
                                            <div className="pupil"></div>
                                        </div>
                                    </div>
                                    <div className={true == this.state.bad ? 'fin bad-fin' : 'fin'}></div>
                                    <div className={true == this.state.bad ? 'fin fin-bottom bad-fin' : 'fin fin-bottom'}></div>
                                </span>
                            </div>
                            <div className="fish-2">
                                <span className="fish-content">
                                    <div className={true == this.state.bad ? 'fish-body fish-body-2 bad-fish' : 'fish-body fish-body-2'}>
                                        <div className="eye">
                                            <div className="pupil"></div>
                                        </div>
                                    </div>
                                    <div className={true == this.state.bad ? 'fin fin-2 bad-fin' : 'fin fin-2'}></div>
                                    <div className={true == this.state.bad ? 'fin fin-2 fin-bottom bad-fin' : 'fin fin-2 fin-bottom'}></div>
                                </span>
                            </div>
                            <div className="fish-3">
                                <span className="fish-content">
                                    <div className={true == this.state.bad ? 'fish-body fish-body-3 bad-fish' : 'fish-body fish-body-3'}>
                                        <div className="eye">
                                            <div className="pupil"></div>
                                        </div>
                                    </div>
                                    <div className={true == this.state.bad ? 'fin fin-3 bad-fin' : 'fin fin-3'}></div>
                                    <div className={true == this.state.bad ? 'fin fin-3 fin-bottom bad-fin' : 'fin fin-3 fin-bottom'}></div>
                                </span>
                            </div>
                        </div>
                    </div>
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
export default Water;