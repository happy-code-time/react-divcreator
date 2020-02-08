import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { navigateToTopOfWebpage, ButtonsNavigation, customKey } from '../../../module/build/react-divcreator';

import { singleModules } from '../../data/menu';

class footerComponents extends Component {
    constructor(props) {
        super(props);
        this.scroll = this.scroll.bind(this);
        
        this.state = {
            currentItem: this.props.currentItem ? this.props.currentItem.toLowerCase() : '',
            previous: '',
            next: '',
            scrollToTop: false,
            scrollToTopClass: 'animation-start',
            srollTopX: 800,
            scrollTopAnimationDuration: 300,
        };
        this.uuid = `${customKey()}`;
    }

    componentDidMount() {
        let matchAt = 0;

        for (let x = 0; x <= singleModules.length - 1; x++) {
            if (singleModules[x].toLowerCase() == this.state.currentItem) {
                matchAt = x;
            }
        }

        this.setState({
            previous: singleModules[matchAt-1] ? singleModules[matchAt-1] : '',
            next: singleModules[matchAt + 1] ? singleModules[matchAt + 1] : ''
        });
        document.addEventListener("scroll", this.scroll);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.scroll);
    }

    scroll() {
        if (document.documentElement.scrollTop >= this.state.srollTopX) {
            if (!this.state.scrollToTop) {
                this.setState({
                    scrollToTop: true,
                    scrollToTopClass: 'animation-start'
                });
            }
        } else {
            if (this.state.scrollToTop) {
                if (document.getElementById(this.uuid)) {
                    document.getElementById(this.uuid).classList.add('animation-back');
                }
                setTimeout(() => {
                    this.setState({
                        scrollToTop: false
                    });
                }, this.state.scrollTopAnimationDuration);
            }
        }
    }

    render() {

        return (
            <div className='footer-components'>
                {
                    this.state.previous &&
                    <div className="prev">
                        <Link
                            to={`/components/${this.state.previous.toLowerCase()}`}
                            className="is-link"
                            title={`Navigate to the previous available component: ${this.state.previous.charAt(0).toUpperCase() + this.state.previous.slice(1)}`}
                            onClick={navigateToTopOfWebpage}
                        >
                            <span>
                                <i className="fas fa-external-link-square-alt"></i>
                                {
                                    this.state.previous
                                }
                            </span>
                        </Link>
                    </div>
                }
                {
                    this.state.next &&
                    <div className="next">
                        <Link
                            to={`/components/${this.state.next.toLowerCase()}`}
                            className="is-link"
                            title={`Navigate to the next available component: ${this.state.next.charAt(0).toUpperCase() + this.state.next.slice(1)}`}
                            onClick={navigateToTopOfWebpage}
                        >
                            {
                                <span>
                                    {
                                        this.state.next
                                    }
                                    <i className="fas fa-external-link-square-alt"></i>
                                </span>
                            }
                        </Link>
                    </div>
                }
                {
                    this.state.scrollToTop &&
                    <div className="sroll-top">
                        <ButtonsNavigation
                            id={this.uuid}
                            class={this.state.scrollToTopClass}
                            navigationTo='top'
                            navigationTime={300}
                            html={<i className="fas fa-location-arrow"></i>}
                            attributes={
                                {
                                    title: 'Navigate to the top of the page'
                                }
                            }
                        />
                    </div>
                }
            </div>
        );
    }
}

export {
    footerComponents as FooterComponents
};