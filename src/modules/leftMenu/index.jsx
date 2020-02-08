import React, { Component } from 'react';

import { generatedMenuData } from '../../data/menu';

import { MenuVerticalClick } from '../../../module/build/react-divcreator';

import { version } from '../../data/react-divcreator-version';

class LeftMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menuItems: generatedMenuData()
        }
    }

    render() {
        return (
            <div className='left-menu'>
                <div className='header-menu-vertical-click'>
                    <span>
                        <div className="header-title">
                            <h1>React-divcreator</h1>
                            <p>
                                { version }
                            </p>
                        </div>
                        <MenuVerticalClick
                            id=""
                            class="header-menu-vertical-click"
                            link={true}
                            data={this.state.menuItems}
                            animation={true}
                            animationTime={200}
                            keepOpen={true}
                            animateKeepOpenBack={true}
                        />
                    </span>
                </div>
            </div>
        );
    }
};

export {
    LeftMenu
};