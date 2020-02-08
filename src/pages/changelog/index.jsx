import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { BoxBoxes, Sourcecode, customKey, navigateToTopOfWebpage } from '../../../module/build/react-divcreator';

import { Header } from '../../modules/header';

import { LeftMenu } from '../../modules/leftMenu';

import { generateChangelogHtml } from '../../data/generateChangelogHtml';

import { countOfAvailableComponents, singleModules } from '../../data/menu';

class ChangeLog extends Component {

    constructor(props) {
        super(props);
        this.resize = this.resize.bind(this);

        this.state = {
            changeLog: generateChangelogHtml(),
            countedAnimationComponents: countOfAvailableComponents(),
            uniqueIdForAnimations: `animated-count-uuid-${customKey()}`,
            animationDone: false,
            allAvailableComponents: singleModules,
            display: false
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        this.resize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize() {
        const self = this;

        if (document.documentElement.getBoundingClientRect().width >= 1024){
            if (self.state.display) {
                self.setState({
                    display: false
                });
            }
        } else {
            if (!self.state.display) {
                self.setState({
                    display: true
                });
            }
        }
    }

    render() {
        return (
            <div className="website--documentation website--changelog">
                <div className="content">
                    {
                        !this.state.display &&
                        <LeftMenu />
                    }
                    <div className="right-site">
                        <Header />
                        <BoxBoxes
                            id="boxes"
                            class="boxes"
                            border={true}
                            // Responsive keys
                            responsive={true}
                            responsiveX={1024}
                            // Animation config
                            animation={true}
                            animationTime={500}
                            animationTimeAdder={100}
                            // mount || scroll
                            animationOn={'mount'}
                            // how many elements should be in 1 single row
                            leftBreak={1}
                            leftData={this.state.changeLog}
                        />
                        <h3>
                            Next steps
                        </h3>
                        <h4>
                            Learn more about the React-divcreator's components:
                        </h4>
                        <div className="next-steps">
                        {
                            this.state.allAvailableComponents.map( i => {
                                return  (
                                    <Link 
                                        key={customKey()} 
                                        to={`/components/${i.toLowerCase()}`} 
                                        onClick={navigateToTopOfWebpage}
                                        className="documentation--links"
                                    >
                                        {
                                            i
                                        }
                                        <i className="fas fa-external-link-square-alt"></i>
                                    </Link>
                                );
                            })
                        }
                        </div>
                    </div>
                </div>
                <form style={{
                    display: 'none !important',
                    opacity: 0,
                    position: 'absolute',
                    zIndex: '-1',
                    width: 0,
                    height: 0,
                    overflow: 'hidden'
                }}>
                    <textarea
                        id="copy-to-clipboard"
                        value=''
                        readOnly={true}
                    />
                </form>
            </div>
        );
    }
};
export default ChangeLog;