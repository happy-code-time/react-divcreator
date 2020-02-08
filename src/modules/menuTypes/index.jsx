import React, { Component } from 'react';

import { MenuVerticalClick } from '../../../module/build/react-divcreator';

import { generatedMenuData } from '../../data/menu';

class menuTypes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menuItems: generatedMenuData()
        }
    }

    render() {

        return (
            <div className='divcreator-types-menu'>
                <MenuVerticalClick
                    id=""
                    class=""
                    link={true}
                    data={this.state.menuItems}
                    site='left'
                    animation={true}
                    animationTime={0}
                    activateDots={true}
                    activeCount={false}
                    activeCountHtml=". "
                    border={true}
                />
            </div>
        );
    }
};
export {
    menuTypes as MenuTypes
};