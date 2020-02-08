import React from 'react';

const changes = [
    {
        version: 'v2.0.0',
        description: "Initialisation of the React-divcreator's new version."
    },
    {
        version: 'v2.0.1',
        description: "Added Readme.md file modules names."
    },
    {
        version: 'v2.0.2',
        description: "Added new keys: triangleWH, contentBackgroundColor, headerBackgroundColor, triangleBackgroundColor to the module BoxWindow."
    },
    {
        version: 'v2.0.3',
        description: "Added new key: allMatchesCallback to the module SourceCode."
    },
    {
        version: 'v2.0.4',
        description: "Improved performance and matching quality of the module SourceCode."
    },
    {
        version: 'v2.0.5',
        description: (
            <span>
                Added new keys: removeLines, removeLinesChar to the module SourceCode.
                <br/>
                Added new key: animationType to the module MenuFixedBottom.
                <br/>
                Added new key: animationType to the module MenuFixedLeft.
                <br/>
                Added new key: animationType to the module MenuFixedRight.
                <br/>
                Added new key: animationType to the module MenuFixedTop.
            </span>
        )
    },
    {
        version: 'v2.0.6',
        description: "Improved toggling functionality for the buttons: maximize and minimize to the module BoxWindow."
    },
    {
        version: 'v2.0.7',
        description: "Administrative tasks."
    },
    {
        version: 'v2.0.8',
        description: (
            <span>
                Added new module BoxMenu.
                <br/>
                Added new module Breadcrumbs.
            </span>
        )
    },
    {
        version: 'v2.0.9',
        description: "Removed babel-polyfill from project."
    },
    {
        version: 'v2.0.10',
        description: "Improved module: Slider (interactive part) and added mobile devices support for interactive sliding."
    },
    {
        version: 'v2.0.11',
        description: (
            <span>
                Improved module: Slider (interactive part and css properties).
                <br/>
                Added new key: displayButtons to the module Slider.
                <br/>
                Removed keys: moveSliderSpeed, moveSliderLeft, moveSliderRight, moveSliderTop and moveSliderDown.
            </span>
        )
    },
    {
        version: 'v2.0.12',
        description: "Improved the module Slider (interactive part in combination with active dots and prev next buttons)."
    },
    {
        version: 'v2.0.13',
        description: (
            <span>
                Added new module: InputSuggestion. 
                <br/>
                Added new key: animationType to the module Accordion.
            </span>
        )
    },
    {
        version: 'v2.0.14',
        description: "Added new keys: sortAsc and sortDesc in the module InputSuggestion."
    },
    {
        version: 'v2.0.15',
        description: (
            <span>
                Added new keys: showAllSuggestionsOnFocus and mouseOverSelection to the module InputSuggestion.
                <br/>
                Added new key: sliderSpeed to the module Slider.
                <br/>
                Improved module Slider in case moveSlider=true while sliding with the mouse to the left and right site.
            </span>
        )
    }
];

export const generateChangelogHtml = () => {
    const allChangesJsx = [];

    changes.map( entry => {
        allChangesJsx.push(
            {
                top: {
                    title: (
                        <span>
                            <div className="box-text-icon">
                                <i className="fas fa-laptop-code"></i>
                                <h1>
                                    {
                                        entry.version
                                    }
                                </h1>
                            </div>
                        </span>
                    )
                },
                content: (
                    <span className="box-content">
                        <div className="box-content--div">
                            {
                                entry.description
                            }
                        </div>
                    </span>
                )
            }
        );
    });
    return allChangesJsx;
} 