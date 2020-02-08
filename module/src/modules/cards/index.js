import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import customKey from '../funtions/customKey';

import checkRequiredProps from '../funtions/checkRequiredProperties';

import missingKeyOrInvalidType from '../funtions/missingKeyOrType';

import { logBuildTime } from '../funtions/logBuildTime';

class cards extends Component {
    constructor(props) {
        super(props)
        this.type = 'Cards'
        this.defaultClass = `react-divcreator-cards`;
        this.defaultClassMounted = 'react-divcreator-cards-mounted mounted';
        this.requiredProps = {
            'data': 'object',
            'align': 'number',
            'link': 'boolean'
        };
        this.buildTimeStart = Date.now();

        this.state = {
            break: this.props.break ? this.props.break : 1,
            border: this.props.border ? this.props.border : false,
            mounted: false
        };
    }

    componentDidMount() {
        window.requestAnimationFrame(() => this.setState({ mounted: true }));
        this.props.performance ? logBuildTime(this.buildTimeStart, this.type) : null;
    }

    handleClick(event, item) {
        if (item.function && 'function' == typeof item.function) {
            (item.function)(event, item, item.functionData);
        }
    }

    render() {

        let checkProps = checkRequiredProps(this.props, this.requiredProps);

        if (true == checkProps.keysAvailable && false == checkProps.type) {
            /**
             * User properties
             */
            // div
            let rootClass = this.props.class ? this.props.class : '';
            rootClass = `${this.state.mounted ? this.defaultClassMounted : 'before-mount'} ${rootClass}`;

            let root_id = this.props.id ? this.props.id : `${customKey()}`;

            if (this.props.data && this.props.data.length) {

                const cards = [];
                let currentItems = [];
                let counterCards = 0;

                this.props.data.map((item, count) => {
                    counterCards++;

                    if (item.href) {
                        if (this.props.link) {

                            switch (this.props.align) {
                                case 1: {
                                    currentItems.push(
                                        <div className={`react-divcreator-cards__single-card ${this.state.border ? 'border' : ''}`} key={customKey()}>
                                            <Link
                                                to={item.href}
                                                key={customKey()}
                                                className='react-divcreator-cards-a'
                                                onClick={(e) => this.handleClick(e, item)}
                                                {...item.attributes}
                                            >
                                                <div className="react-divcreator-cards-content">
                                                    {
                                                        item.path &&
                                                        <div className="react-divcreator-cards-image">
                                                            {

                                                                <img src={item.path} alt={`${item.alt ? item.alt : ''}`} />
                                                            }
                                                        </div>
                                                    }
                                                    {
                                                        item.title &&
                                                        <div className="react-divcreator-cards-title">
                                                            <span className='react-divcreator-cards-title-span'>
                                                                {item.title}
                                                            </span>
                                                        </div>
                                                    }
                                                    {
                                                        item.description &&
                                                        <div className="react-divcreator-cards-description">
                                                            {
                                                                <span className='react-divcreator-cards-description-span'>
                                                                    {item.description}
                                                                </span>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </Link>
                                            {
                                                item.data && item.data
                                            }
                                        </div>
                                    );
                                    break;
                                }
                                case 2: {
                                    currentItems.push(
                                        <div className={`react-divcreator-cards__single-card ${this.state.border ? 'border' : ''}`} key={customKey()}>
                                            <Link
                                                to={item.href}
                                                key={customKey()}
                                                className='react-divcreator-cards-a'
                                                onClick={(e) => this.handleClick(e, item)}
                                                {...item.attributes}
                                            >
                                                <div className="react-divcreator-cards-content">
                                                    {
                                                        item.title &&
                                                        <div className="react-divcreator-cards-title">
                                                            <span className='react-divcreator-cards-title-span'>
                                                                {item.title}
                                                            </span>
                                                        </div>
                                                    }
                                                    {
                                                        item.path &&
                                                        <div className="react-divcreator-cards-image">
                                                            {

                                                                <img src={item.path} alt={`${item.alt ? item.alt : ''}`} />
                                                            }
                                                        </div>
                                                    }
                                                    {
                                                        item.description &&
                                                        <div className="react-divcreator-cards-description">
                                                            {
                                                                <span className='react-divcreator-cards-description-span'>
                                                                    {item.description}
                                                                </span>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </Link>
                                            {
                                                item.data && item.data
                                            }
                                        </div>
                                    );
                                    break;
                                }
                                case 3: {
                                    currentItems.push(
                                        <div className={`react-divcreator-cards__single-card ${this.state.border ? 'border' : ''}`} key={customKey()}>
                                            <Link
                                                to={item.href}
                                                key={customKey()}
                                                className='react-divcreator-cards-a'
                                                onClick={(e) => this.handleClick(e, item)}
                                                {...item.attributes}
                                            >
                                                <div className="react-divcreator-cards-content">
                                                    {
                                                        item.title &&
                                                        <div className="react-divcreator-cards-title">
                                                            <span className='react-divcreator-cards-title-span'>
                                                                {item.title}
                                                            </span>
                                                        </div>
                                                    }
                                                    {
                                                        item.description &&
                                                        <div className="react-divcreator-cards-description">
                                                            {
                                                                <span className='react-divcreator-cards-description-span'>
                                                                    {item.description}
                                                                </span>
                                                            }
                                                        </div>
                                                    }
                                                    {
                                                        item.path &&
                                                        <div className="react-divcreator-cards-image">
                                                            {

                                                                <img src={item.path} alt={`${item.alt ? item.alt : ''}`} />
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </Link>
                                            {
                                                item.data && item.data
                                            }
                                        </div>
                                    );
                                    break;
                                }
                                case 4: {
                                    currentItems.push(
                                        <div className={`react-divcreator-cards__single-card ${this.state.border ? 'border' : ''}`} key={customKey()}>
                                            <Link
                                                to={item.href}
                                                key={customKey()}
                                                className='react-divcreator-cards-a'
                                                onClick={(e) => this.handleClick(e, item)}
                                                {...item.attributes}
                                            >
                                                <div className="react-divcreator-cards-content">
                                                    {
                                                        item.path &&
                                                        <div className="react-divcreator-cards-image">
                                                            {

                                                                <img src={item.path} alt={`${item.alt ? item.alt : ''}`} />
                                                            }
                                                        </div>
                                                    }
                                                    {
                                                        item.title &&
                                                        <div className="react-divcreator-cards-title">
                                                            <span className='react-divcreator-cards-title-span'>
                                                                {item.title}
                                                            </span>
                                                        </div>
                                                    }
                                                    {
                                                        item.description &&
                                                        <div className="react-divcreator-cards-description">
                                                            {
                                                                <span className='react-divcreator-cards-description-span'>
                                                                    {item.description}
                                                                </span>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </Link>
                                            {
                                                item.data && item.data
                                            }
                                        </div>
                                    );
                                    break;
                                }
                                default: {
                                    currentItems.push(
                                        <div className={`react-divcreator-cards__single-card ${this.state.border ? 'border' : ''}`} key={customKey()}>
                                            <Link
                                                to={item.href}
                                                key={customKey()}
                                                className='react-divcreator-cards-a'
                                                onClick={(e) => this.handleClick(e, item)}
                                                {...item.attributes}
                                            >
                                                {
                                                    item.data && item.data
                                                }
                                                <div className="react-divcreator-cards-content">
                                                    {
                                                        item.path &&
                                                        <div className="react-divcreator-cards-image">
                                                            {

                                                                <img src={item.path} alt={`${item.alt ? item.alt : ''}`} />
                                                            }
                                                        </div>
                                                    }
                                                    {
                                                        item.title &&
                                                        <div className="react-divcreator-cards-title">
                                                            <span className='react-divcreator-cards-title-span'>
                                                                {item.title}
                                                            </span>
                                                        </div>
                                                    }
                                                    {
                                                        item.description &&
                                                        <div className="react-divcreator-cards-description">
                                                            {
                                                                <span className='react-divcreator-cards-description-span'>
                                                                    {item.description}
                                                                </span>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                    break;
                                }
                            }
                        }
                        else {
                            switch (this.props.align) {
                                case 1: {
                                    currentItems.push(
                                        <div className={`react-divcreator-cards__single-card ${this.state.border ? 'border' : ''}`} key={customKey()}>
                                            <a
                                                href={item.href}
                                                key={customKey()}
                                                className='react-divcreator-cards-a'
                                                onClick={(e) => this.handleClick(e, item)}
                                                {...item.attributes}
                                            >
                                                <div className="react-divcreator-cards-content">
                                                    {
                                                        item.path &&
                                                        <div className="react-divcreator-cards-image">
                                                            {

                                                                <img src={item.path} alt={`${item.alt ? item.alt : ''}`} />
                                                            }
                                                        </div>
                                                    }
                                                    {
                                                        item.title &&
                                                        <div className="react-divcreator-cards-title">
                                                            <span className='react-divcreator-cards-title-span'>
                                                                {item.title}
                                                            </span>
                                                        </div>
                                                    }
                                                    {
                                                        item.description &&
                                                        <div className="react-divcreator-cards-description">
                                                            {
                                                                <span className='react-divcreator-cards-description-span'>
                                                                    {item.description}
                                                                </span>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </a>
                                            {
                                                item.data && item.data
                                            }
                                        </div>
                                    );
                                    break;
                                }
                                case 2: {
                                    currentItems.push(
                                        <div className={`react-divcreator-cards__single-card ${this.state.border ? 'border' : ''}`} key={customKey()}>
                                            <a
                                                href={item.href}
                                                key={customKey()}
                                                className='react-divcreator-cards-a'
                                                onClick={(e) => this.handleClick(e, item)}
                                                {...item.attributes}
                                            >
                                                <div className="react-divcreator-cards-content">
                                                    {
                                                        item.title &&
                                                        <div className="react-divcreator-cards-title">
                                                            <span className='react-divcreator-cards-title-span'>
                                                                {item.title}
                                                            </span>
                                                        </div>
                                                    }
                                                    {
                                                        item.path &&
                                                        <div className="react-divcreator-cards-image">
                                                            {

                                                                <img src={item.path} alt={`${item.alt ? item.alt : ''}`} />
                                                            }
                                                        </div>
                                                    }
                                                    {
                                                        item.description &&
                                                        <div className="react-divcreator-cards-description">
                                                            {
                                                                <span className='react-divcreator-cards-description-span'>
                                                                    {item.description}
                                                                </span>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </a>
                                            {
                                                item.data && item.data
                                            }
                                        </div>
                                    );
                                    break;
                                }
                                case 3: {
                                    currentItems.push(
                                        <div className={`react-divcreator-cards__single-card ${this.state.border ? 'border' : ''}`} key={customKey()}>
                                            <a
                                                href={item.href}
                                                key={customKey()}
                                                className='react-divcreator-cards-a'
                                                onClick={(e) => this.handleClick(e, item)}
                                                {...item.attributes}
                                            >
                                                <div className="react-divcreator-cards-content">
                                                    {
                                                        item.title &&
                                                        <div className="react-divcreator-cards-title">
                                                            <span className='react-divcreator-cards-title-span'>
                                                                {item.title}
                                                            </span>
                                                        </div>
                                                    }
                                                    {
                                                        item.description &&
                                                        <div className="react-divcreator-cards-description">
                                                            {
                                                                <span className='react-divcreator-cards-description-span'>
                                                                    {item.description}
                                                                </span>
                                                            }
                                                        </div>
                                                    }
                                                    {
                                                        item.path &&
                                                        <div className="react-divcreator-cards-image">
                                                            {

                                                                <img src={item.path} alt={`${item.alt ? item.alt : ''}`} />
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </a>
                                            {
                                                item.data && item.data
                                            }
                                        </div>
                                    );
                                    break;
                                }
                                case 4: {
                                    currentItems.push(
                                        <div className={`react-divcreator-cards__single-card ${this.state.border ? 'border' : ''}`} key={customKey()}>
                                            <a
                                                href={item.href}
                                                key={customKey()}
                                                className='react-divcreator-cards-a'
                                                onClick={(e) => this.handleClick(e, item)}
                                                {...item.attributes}
                                            >
                                                <div className="react-divcreator-cards-content">
                                                    {
                                                        item.path &&
                                                        <div className="react-divcreator-cards-image">
                                                            {

                                                                <img src={item.path} alt={`${item.alt ? item.alt : ''}`} />
                                                            }
                                                        </div>
                                                    }
                                                    {
                                                        item.title &&
                                                        <div className="react-divcreator-cards-title">
                                                            <span className='react-divcreator-cards-title-span'>
                                                                {item.title}
                                                            </span>
                                                        </div>
                                                    }
                                                    {
                                                        item.description &&
                                                        <div className="react-divcreator-cards-description">
                                                            {
                                                                <span className='react-divcreator-cards-description-span'>
                                                                    {item.description}
                                                                </span>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </a>
                                            {
                                                item.data && item.data
                                            }
                                        </div>
                                    );
                                    break;
                                }
                                default: {
                                    currentItems.push(
                                        <div className={`react-divcreator-cards__single-card ${this.state.border ? 'border' : ''}`} key={customKey()}>
                                            <a
                                                href={item.href}
                                                key={customKey()}
                                                className='react-divcreator-cards-a'
                                                onClick={(e) => this.handleClick(e, item)}
                                                {...item.attributes}
                                            >
                                                {
                                                    item.data && item.data
                                                }
                                                <div className="react-divcreator-cards-content">
                                                    {
                                                        item.path &&
                                                        <div className="react-divcreator-cards-image">
                                                            {

                                                                <img src={item.path} alt={`${item.alt ? item.alt : ''}`} />
                                                            }
                                                        </div>
                                                    }
                                                    {
                                                        item.title &&
                                                        <div className="react-divcreator-cards-title">
                                                            <span className='react-divcreator-cards-title-span'>
                                                                {item.title}
                                                            </span>
                                                        </div>
                                                    }
                                                    {
                                                        item.description &&
                                                        <div className="react-divcreator-cards-description">
                                                            {
                                                                <span className='react-divcreator-cards-description-span'>
                                                                    {item.description}
                                                                </span>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </a>
                                        </div>
                                    );
                                    break;
                                }
                            }
                        }
                    }
                    else {
                        switch (this.props.align) {
                            case 1: {
                                currentItems.push(
                                    <div className={`react-divcreator-cards__single-card ${this.state.border ? 'border' : ''}`} key={customKey()}>
                                        <div
                                            className='react-divcreator-cards-content'
                                            key={customKey()}
                                            onClick={(e) => this.handleClick(e, item)}
                                            {...item.attributes}
                                        >
                                            {
                                                item.path &&
                                                <div className="react-divcreator-cards-image">
                                                    {

                                                        <img src={item.path} alt={`${item.alt ? item.alt : ''}`} />
                                                    }
                                                </div>
                                            }
                                            {
                                                item.title &&
                                                <div className="react-divcreator-cards-title">
                                                    <span className='react-divcreator-cards-title-span'>
                                                        {item.title}
                                                    </span>
                                                </div>
                                            }
                                            {
                                                item.description &&
                                                <div className="react-divcreator-cards-description">
                                                    {
                                                        <span className='react-divcreator-cards-description-span'>
                                                            {item.description}
                                                        </span>
                                                    }
                                                </div>
                                            }
                                            {
                                                item.data && item.data
                                            }
                                        </div>
                                    </div>
                                );
                                break;
                            }
                            case 2: {
                                currentItems.push(
                                    <div className={`react-divcreator-cards__single-card ${this.state.border ? 'border' : ''}`} key={customKey()}>
                                        <div
                                            key={customKey()}
                                            className='react-divcreator-cards-content'
                                            onClick={(e) => this.handleClick(e, item)}
                                            {...item.attributes}
                                        >
                                            {
                                                item.title &&
                                                <div className="react-divcreator-cards-title">
                                                    <span className='react-divcreator-cards-title-span'>
                                                        {item.title}
                                                    </span>
                                                </div>
                                            }
                                            {
                                                item.path &&
                                                <div className="react-divcreator-cards-image">
                                                    {

                                                        <img src={item.path} alt={`${item.alt ? item.alt : ''}`} />
                                                    }
                                                </div>
                                            }
                                            {
                                                item.description &&
                                                <div className="react-divcreator-cards-description">
                                                    {
                                                        <span className='react-divcreator-cards-description-span'>
                                                            {item.description}
                                                        </span>
                                                    }
                                                </div>
                                            }
                                            {
                                                item.data && item.data
                                            }
                                        </div>
                                    </div>
                                );
                                break;
                            }
                            case 3: {
                                currentItems.push(
                                    <div className={`react-divcreator-cards__single-card ${this.state.border ? 'border' : ''}`} key={customKey()}>
                                        <div
                                            className='react-divcreator-cards-content'
                                            key={customKey()}
                                            onClick={(e) => this.handleClick(e, item)}
                                            {...item.attributes}
                                        >
                                            {
                                                item.title &&
                                                <div className="react-divcreator-cards-title">
                                                    <span className='react-divcreator-cards-title-span'>
                                                        {item.title}
                                                    </span>
                                                </div>
                                            }
                                            {
                                                item.description &&
                                                <div className="react-divcreator-cards-description">
                                                    {
                                                        <span className='react-divcreator-cards-description-span'>
                                                            {item.description}
                                                        </span>
                                                    }
                                                </div>
                                            }
                                            {
                                                item.path &&
                                                <div className="react-divcreator-cards-image">
                                                    {

                                                        <img src={item.path} alt={`${item.alt ? item.alt : ''}`} />
                                                    }
                                                </div>
                                            }
                                            {
                                                item.data && item.data
                                            }
                                        </div>
                                    </div>
                                );
                                break;
                            }
                            case 4: {
                                currentItems.push(
                                    <div className={`react-divcreator-cards__single-card ${this.state.border ? 'border' : ''}`} key={customKey()}>
                                        <div
                                            className='react-divcreator-cards-content'
                                            key={customKey()}
                                            onClick={(e) => this.handleClick(e, item)}
                                            {...item.attributes}
                                        >
                                            {
                                                item.path &&
                                                <div className="react-divcreator-cards-image">
                                                    {

                                                        <img src={item.path} alt={`${item.alt ? item.alt : ''}`} />
                                                    }
                                                </div>
                                            }
                                            {
                                                item.title &&
                                                <div className="react-divcreator-cards-title">
                                                    <span className='react-divcreator-cards-title-span'>
                                                        {item.title}
                                                    </span>
                                                </div>
                                            }
                                            {
                                                item.description &&
                                                <div className="react-divcreator-cards-description">
                                                    {
                                                        <span className='react-divcreator-cards-description-span'>
                                                            {item.description}
                                                        </span>
                                                    }
                                                </div>
                                            }
                                            {
                                                item.data && item.data
                                            }
                                        </div>
                                    </div>
                                );
                                break;
                            }
                            default: {
                                currentItems.push(
                                    <div className={`react-divcreator-cards__single-card ${this.state.border ? 'border' : ''}`} key={customKey()}>
                                        <div
                                            className='react-divcreator-cards-content'
                                            key={customKey()}
                                            onClick={(e) => this.handleClick(e, item)}
                                            {...item.attributes}
                                        >
                                            {
                                                item.data && item.data
                                            }
                                            {
                                                item.path &&
                                                <div className="react-divcreator-cards-image">
                                                    {

                                                        <img src={item.path} alt={`${item.alt ? item.alt : ''}`} />
                                                    }
                                                </div>
                                            }
                                            {
                                                item.title &&
                                                <div className="react-divcreator-cards-title">
                                                    <span className='react-divcreator-cards-title-span'>
                                                        {item.title}
                                                    </span>
                                                </div>
                                            }
                                            {
                                                item.description &&
                                                <div className="react-divcreator-cards-description">
                                                    {
                                                        <span className='react-divcreator-cards-description-span'>
                                                            {item.description}
                                                        </span>
                                                    }
                                                </div>
                                            }
                                        </div>
                                    </div>
                                );
                                break;
                            }
                        }
                    }
                    // display items in flex row clientX >= 1024px
                    // else display in flex column < 1024px
                    if (this.state.break == counterCards && currentItems.length) {
                        cards.push(
                            <div key={customKey()} className={`${rootClass} ${this.defaultClass}`} id={root_id}>
                                {
                                    currentItems
                                }
                            </div>
                        );
                        currentItems = [];
                        counterCards = 0;
                    }

                    if (count == this.props.data.length - 1 && currentItems.length) {
                        cards.push(
                            <div key={customKey()} className={`${rootClass} ${this.defaultClass}`} id={root_id}>
                                {
                                    currentItems
                                }
                            </div>
                        );
                        currentItems = [];
                    }
                });
                return cards;
            }
            else {
                return <p>No enought data passed to the type: {this.type}</p>;
            }
        } else {
            return missingKeyOrInvalidType(checkProps, this.type);
        }
    }
}
export default cards;
