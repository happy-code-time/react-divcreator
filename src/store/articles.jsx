import React from 'react';

import { Articles } from '../../module/build/react-divcreator';

const consoleLog = (event, customData) => {
    console.clear();
    console.info(event);
    console.info(customData);
};
const mainDescription = '';
const articlesData = [
    {
        class: 'articles-exammple-1',
        description: 'Example with 2 articles. This example has keepOpen={false} - its mean do close all toggled elements.',
        html: (
            <Articles
                id="article-2"
                class="custom-article-1"
                articleType={2}
                link={true}
                borderActive={true}
                borderColor="dodgerblue"
                borderSite='left'
                borderWidth={5}
                performance={true}
                animation={true}
                keepOpen={false}
                data={
                    [
                        {
                            title: 'Lorem Ipsum',
                            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Click to show more:',
                            class: 'article-custom-class',
                            onlyImage: true,
                            srcOptions: 'no-repeat center center fixed',
                            function: consoleLog,
                            functionData: ["article 1 clicked"],
                            dataImage: "",
                            dataContent: (
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                </p>
                            )
                        },
                        {
                            title: 'Lorem Ipsum',
                            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Click to show more:',
                            class: 'article-custom-class',
                            onlyImage: true,
                            srcOptions: 'no-repeat center center fixed',
                            function: consoleLog,
                            functionData: ["article 2 clicked"],
                            dataImage: (
                                <h1> Birds </h1>
                            ),
                            dataContent: (
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, 
                                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                                    ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
                                    eos et accusam et justo duo dolores et ea rebum.
                                </p>
                            )
                        }
                    ]
                }
            />
        ),
        cssCode: (
            `
.custom-article-1{
    max-width:100%;
    height:auto;
    overflow:auto;
    clear:both;
    padding:20px 10px;

    .divcreator-article-click,
    .divcreator-article-click{
        width:100%;
        max-height:100%;
        min-height:100px;
        height:auto;
        overflow:auto;
        margin:1.5%;
        padding:1%;
        box-sizing: border-box;
        transition-duration: 500ms;
        cursor:pointer;
    
        .divcreator-article-click--content-title{
            width:100%;
            padding: 0 0 20px 0;
            min-height:30px;
            height:auto;
            overflow:auto;
        }
        .divcreator-article-click--content-description,
        .divcreator-article-click--content-to-toggle--down{
            p{
                color:rgba(69,69,69,1);
                font-size:16px;
                line-height:25px;
            }            
        }
        h1 {
            color:rgba(69,69,69,.9);
            font-size:18px;
            text-align:left;
        }
    }
}`
        ),
        reactCode: (
`import { Articles } from 'react-divcreator';
    
<Articles
    id="article-2"
    class="custom-article-1"
    articleType={2}
    link={true}
    borderActive={true}
    borderColor="dodgerblue"
    borderSite='left'
    borderWidth={5}
    performance={true}
    animation={true}
    keepOpen={false}
    data={
        [
            {
                title: 'Lorem Ipsum',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                sed diam nonumy eirmod tempor invidunt ut labore et 
                                dolore magna aliquyam erat, sed diam voluptua. 
                                Click to show more:',
                class: 'article-custom-class',
                onlyImage: true,
                srcOptions: 'no-repeat center center fixed',
                function: consoleLog,
                functionData: ["article 1 clicked"],
                dataImage: "",
                dataContent: (
                    <p>
                        ...
                    </p>
                )
            },
            {
                title: 'Lorem Ipsum',
                description: '...',
                class: 'article-custom-class',
                onlyImage: true,
                srcOptions: 'no-repeat center center fixed',
                function: consoleLog,
                functionData: ["article 2 clicked"],
                dataImage: (
                    <h1> Birds </h1>
                ),
                dataContent: (
                    <p>
                        ...
                    </p>
                )
            }
        ]
    }
/>`
        ),
        jsCode: (
            `
const consoleLog = (event, customData) => {
    console.info(event);
    console.info(customData);
};`
        )
    },
    {
        class: 'articles-exammple-1',
        description: 'Example with 2 articles. This example has keepOpen={true} (with the second option animateKeepOpenBack={true}) - its mean do NOT close all toggled elements except the current clicked.',
        html: (
            <Articles
                id="article-2"
                class="custom-article-1"
                articleType={2}
                link={true}
                borderActive={true}
                borderColor="dodgerblue"
                borderSite='left'
                borderWidth={5}
                performance={true}
                animation={true}
                keepOpen={true}
                animateKeepOpenBack={true}
                data={
                    [
                        {
                            title: 'Lorem Ipsum',
                            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Click to show more:',
                            class: 'article-custom-class',
                            onlyImage: true,
                            srcOptions: 'no-repeat center center fixed',
                            function: consoleLog,
                            functionData: ["article 1 clicked"],
                            dataImage: "",
                            dataContent: (
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                </p>
                            )
                        },
                        {
                            title: 'Lorem Ipsum',
                            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Click to show more:',
                            class: 'article-custom-class',
                            onlyImage: true,
                            srcOptions: 'no-repeat center center fixed',
                            function: consoleLog,
                            functionData: ["article 2 clicked"],
                            dataImage: (
                                <h1> Birds </h1>
                            ),
                            dataContent: (
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, 
                                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                                    ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
                                    eos et accusam et justo duo dolores et ea rebum.
                                </p>
                            )
                        }
                    ]
                }
            />
        ),
        cssCode: (
            `
.custom-article-1{
    max-width:100%;
    height:auto;
    overflow:auto;
    clear:both;
    padding:20px 10px;

    .divcreator-article-click,
    .divcreator-article-click{
        width:100%;
        max-height:100%;
        min-height:100px;
        height:auto;
        overflow:auto;
        margin:1.5%;
        padding:1%;
        box-sizing: border-box;
        transition-duration: 500ms;
        cursor:pointer;
    
        .divcreator-article-click--content-title{
            width:100%;
            padding: 0 0 20px 0;
            min-height:30px;
            height:auto;
            overflow:auto;
        }
        .divcreator-article-click--content-description,
        .divcreator-article-click--content-to-toggle--down{
            p{
                color:rgba(69,69,69,1);
                font-size:16px;
                line-height:25px;
            }            
        }
        h1 {
            color:rgba(69,69,69,.9);
            font-size:18px;
            text-align:left;
        }
    }
}`
        ),
        reactCode: (
`import { Articles } from 'react-divcreator';
    
<Articles
    id="article-2"
    class="custom-article-1"
    articleType={2}
    link={true}
    borderActive={true}
    borderColor="dodgerblue"
    borderSite='left'
    borderWidth={5}
    performance={true}
    animation={true}
    keepOpen={true}
    animateKeepOpenBack={true}
    data={
        [
            {
                title: 'Lorem Ipsum',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                sed diam nonumy eirmod tempor invidunt ut labore et 
                                dolore magna aliquyam erat, sed diam voluptua. 
                                Click to show more:',
                class: 'article-custom-class',
                onlyImage: true,
                srcOptions: 'no-repeat center center fixed',
                function: consoleLog,
                functionData: ["article 1 clicked"],
                dataImage: "",
                dataContent: (
                    <p>
                        ...
                    </p>
                )
            },
            {
                title: 'Lorem Ipsum',
                description: '...',
                class: 'article-custom-class',
                onlyImage: true,
                srcOptions: 'no-repeat center center fixed',
                function: consoleLog,
                functionData: ["article 2 clicked"],
                dataImage: (
                    <h1> Birds </h1>
                ),
                dataContent: (
                    <p>
                        ...
                    </p>
                )
            }
        ]
    }
/>`
        ),
        jsCode: (
            `
const consoleLog = (event, customData) => {
    console.info(event);
    console.info(customData);
};`
        )
    },
    {
        class: 'articles-exammple-1',
        description: 'Example with scrollable text (provided by the key "dataContent").',
        html: (
            <Articles
                id="article-3"
                class="custom-article-2"
                articleType={2}
                link={true}
                borderActive={true}
                borderColor="pink"
                borderSite='left'
                borderWidth={5}
                performance={true}
                animation={true}
                data={
                    [
                        {
                            title: 'Lorem Ipsum',
                            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr...',
                            class: 'article-custom-class',
                            onlyImage: true,
                            srcOptions: 'no-repeat center center fixed',
                            function: consoleLog,
                            functionData: ["a"],
                            dataImage: "",
                            dataContent: (
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                </p>
                            )
                        },
                        {
                            title: 'Lorem Ipsum',
                            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr...',
                            class: 'article-custom-class',
                            onlyImage: true,
                            srcOptions: 'no-repeat center center fixed',
                            function: consoleLog,
                            functionData: ["a"],
                            dataImage: (
                                <h1> Birds </h1>
                            ),
                            dataContent: (
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                </p>
                            )
                        },
                        {
                            title: 'Lorem Ipsum',
                            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr...',
                            class: 'article-custom-class',
                            onlyImage: true,
                            srcOptions: 'no-repeat center center fixed',
                            function: consoleLog,
                            functionData: ["a"],
                            dataImage: (
                                <h1> Birds </h1>
                            ),
                            dataContent: (
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                </p>
                            )
                        },
                        {
                            title: 'Lorem Ipsum',
                            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr...',
                            class: 'article-custom-class',
                            onlyImage: true,
                            srcOptions: 'no-repeat center center fixed',
                            function: consoleLog,
                            functionData: ["a"],
                            dataImage: (
                                <h1> Birds </h1>
                            ),
                            dataContent: (
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                </p>
                            )
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.react-divcreator-articles-toggle {
    p{
        box-sizing: border-box;
        padding:10px;
        line-height:25px;
        color:rgba(69,69,69, .8);
    }
}
.custom-article-3{
    max-width:100%;
    height:auto;
    overflow:auto;
    clear:both;
    padding:20px 10px;

    .divcreator-article-click{
        width:100%;
        max-height:400px;
        min-height:100px;
        height:auto;
        overflow:auto;
        margin:1.5%;
        padding:1%;
        box-sizing: border-box;
        transition-duration: 500ms;
        cursor:pointer;
        display: inline-block;
    
        .divcreator-article-click--content{
            overflow: hidden;
        }
        .divcreator-article-click--content-title{
            width:100%;
            padding: 0 0 20px 0;
            min-height:30px;
            height:auto;
            overflow:auto;
        }
        .divcreator-article-click--content-description,
        .divcreator-article-click--content-to-toggle--down{
            max-height:300px;
            overflow: hidden;
            background:transparent;
            box-sizing: border-box;

            p{
                color:rgba(69,69,69,1);
                font-size:16px;
                line-height:25px;
            }            
        }
        h1 {
            color:rgba(69,69,69,.9);
            font-size:18px;
            text-align:left;
        }
    }
}`
        ),
        reactCode: (
`import { Articles } from 'react-divcreator';
    
<Articles
    id="article-3"
    class="custom-article-2"
    articleType={2}
    link={true}
    borderActive={true}
    borderColor="pink"
    borderSite='left'
    borderWidth={5}
    performance={true}
    animation={true}
    data={
        [
            {
                title: 'Lorem Ipsum',
                description: '...',
                class: 'article-custom-class',
                onlyImage: true,
                srcOptions: 'no-repeat center center fixed',
                function: consoleLog,
                functionData: ["a"],
                dataImage: "",
                dataContent: (
                    <p>
                        ...
                    </p>
                )
            },
            {
                title: 'Lorem Ipsum',
                description: '...',
                class: 'article-custom-class',
                onlyImage: true,
                srcOptions: 'no-repeat center center fixed',
                function: consoleLog,
                functionData: ["a"],
                dataImage: (
                    <h1> Birds </h1>
                ),
                dataContent: (
                    <p>
                        ...
                    </p>
                )
            },
            {
                title: 'Lorem Ipsum',
                description: '...',
                class: 'article-custom-class',
                onlyImage: true,
                srcOptions: 'no-repeat center center fixed',
                function: consoleLog,
                functionData: ["a"],
                dataImage: (
                    <h1> Birds </h1>
                ),
                dataContent: (
                    <p>
                        ....
                    </p>
                )
            },
            {
                title: 'Lorem Ipsum',
                description: '...',
                class: 'article-custom-class',
                onlyImage: true,
                srcOptions: 'no-repeat center center fixed',
                function: consoleLog,
                functionData: ["a"],
                dataImage: (
                    <h1> Birds </h1>
                ),
                dataContent: (
                    <p>
                        ...
                    </p>
                )
            }
        ]
    }
/>`
        ),
        jsCode: (
`const consoleLog = (event, customData) => {
    console.info(event);
    console.info(customData);
};`
        )
    },
    {
        class: 'articles-exammple-1',
        description: 'Example with scrollable content after toggling the card.',
        html: (
            <Articles
                id="article-3"
                class="custom-article-3"
                articleType={2}
                link={true}
                borderActive={true}
                borderColor="purple"
                borderSite='left'
                borderWidth={5}
                performance={true}
                animation={true}
                data={
                    [
                        {
                            title: 'Lorem Ipsum',
                            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Click to show more:',
                            class: 'article-custom-class',
                            onlyImage: true,
                            srcOptions: 'no-repeat center center fixed',
                            function: consoleLog,
                            functionData: ["a"],
                            dataImage: "",
                            dataContent: (
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                </p>
                            )
                        },
                        {
                            title: 'Lorem Ipsum',
                            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Click to show more:',
                            class: 'article-custom-class',
                            onlyImage: true,
                            srcOptions: 'no-repeat center center fixed',
                            function: consoleLog,
                            functionData: ["a"],
                            dataImage: (
                                <h1> Birds </h1>
                            ),
                            dataContent: (
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                </p>
                            )
                        },
                        {
                            title: 'Lorem Ipsum',
                            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Click to show more:',
                            class: 'article-custom-class',
                            onlyImage: true,
                            srcOptions: 'no-repeat center center fixed',
                            function: consoleLog,
                            functionData: ["a"],
                            dataImage: (
                                <h1> Birds </h1>
                            ),
                            dataContent: (
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                </p>
                            )
                        },
                        {
                            title: 'Lorem Ipsum',
                            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Click to show more:',
                            class: 'article-custom-class',
                            onlyImage: true,
                            srcOptions: 'no-repeat center center fixed',
                            function: consoleLog,
                            functionData: ["a"],
                            dataImage: (
                                <h1> Birds </h1>
                            ),
                            dataContent: (
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum.
                                </p>
                            )
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.react-divcreator-articles-toggle {
    p{
        box-sizing: border-box;
        padding:10px;
        line-height:25px;
        color:rgba(69,69,69, .8);
    }
}
.custom-article-2{
    max-width:100%;
    height:auto;
    overflow:auto;
    clear:both;
    padding:20px 10px;

    .divcreator-article-click{
        width:100%;
        max-height:400px;
        min-height:100px;
        height:auto;
        overflow:auto;
        margin:1.5%;
        padding:1%;
        box-sizing: border-box;
        transition-duration: 500ms;
        cursor:pointer;
    
        .divcreator-article-click--content-title{
            width:100%;
            padding: 0 0 20px 0;
            min-height:30px;
            height:auto;
            overflow:auto;
        }
        .divcreator-article-click--content-description,
        .divcreator-article-click--content-to-toggle--down{
            max-height:300px;
            overflow-y: auto;
            background:transparent;

            p{
                color:rgba(69,69,69,1);
                font-size:16px;
                line-height:25px;
            }            
        }
        h1 {
            color:rgba(69,69,69,.9);
            font-size:18px;
            text-align:left;
        }
    }
}`
        ),
        reactCode: (
`import { Articles } from 'react-divcreator';
    
<Articles
    id="article-3"
    class="custom-article-3"
    articleType={2}
    link={true}
    borderActive={true}
    borderColor="purple"
    borderSite='left'
    borderWidth={5}
    performance={true}
    animation={true}
    data={
        [
            {
                title: 'Lorem Ipsum',
                description: '...',
                class: 'article-custom-class',
                onlyImage: true,
                srcOptions: 'no-repeat center center fixed',
                function: consoleLog,
                functionData: ["a"],
                dataImage: "",
                dataContent: (
                    <p>
                        ...
                    </p>
                )
            },
            {
                title: 'Lorem Ipsum',
                description: '...',
                class: 'article-custom-class',
                onlyImage: true,
                srcOptions: 'no-repeat center center fixed',
                function: consoleLog,
                functionData: ["a"],
                dataImage: (
                    <h1> Birds </h1>
                ),
                dataContent: (
                    <p>
                        ...
                    </p>
                )
            },
            {
                title: 'Lorem Ipsum',
                description: '...',
                class: 'article-custom-class',
                onlyImage: true,
                srcOptions: 'no-repeat center center fixed',
                function: consoleLog,
                functionData: ["a"],
                dataImage: (
                    <h1> Birds </h1>
                ),
                dataContent: (
                    <p>
                        ...
                    </p>
                )
            },
            {
                title: 'Lorem Ipsum',
                description: '...',
                class: 'article-custom-class',
                onlyImage: true,
                srcOptions: 'no-repeat center center fixed',
                function: consoleLog,
                functionData: ["a"],
                dataImage: (
                    <h1> Birds </h1>
                ),
                dataContent: (
                    <p>
                        ...
                    </p>
                )
            }
        ]
    }
/>`
        ),
        jsCode: (
`const consoleLog = (event, customData) => {
    console.info(event);
    console.info(customData);
};`
        )
    },
    {
        class: 'articles-exammple-1',
        description: 'Example with Articles as image and text.',
        html: (
            <Articles
                id="article-1"
                class="custom-article-4"
                articleType={4}
                link={true}
                borderActive={true}
                borderColor="gold"
                borderSite='right'
                borderWidth={5}
                performance={true}
                animation={true}
                data={
                    [
                        {
                            title: 'Click to read more',
                            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
                            class: 'article-custom-class',
                            src: '/src/static/images/birds.jpg',
                            href: '',
                            onlyImage: true,
                            srcOptions: 'no-repeat center center fixed',
                            function: consoleLog,
                            functionData: ["a"],
                            dataImage: "",
                            dataContent: (
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, 
                                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                </p>
                            )
                        },
                        {
                            title: 'Click to read more',
                            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
                            class: 'article-custom-class',
                            src: '/src/static/images/users.jpg',
                            href: '',
                            onlyImage: true,
                            srcOptions: 'no-repeat center center fixed',
                            function: consoleLog,
                            functionData: ["a"],
                            dataImage: (
                                <h1> Text inside the image </h1>
                            ),
                            dataContent: (
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, 
                                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                                    ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
                                    eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor 
                                    sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                                    At vero eos et accusam et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, 
                                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                                    ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
                                    eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor 
                                    sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                                    At vero eos et accusam et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                    et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, 
                                    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                                    ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
                                    eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor 
                                    sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                                    At vero eos et accusam et justo duo dolores et ea rebum.
                                </p>
                            )
                        }
                    ]
                }
            />
        ),
        cssCode: (
`.react-divcreator-articles-toggle {
    p{
        box-sizing: border-box;
        padding:10px;
        line-height:25px;
        color:rgba(69,69,69, .8);
    }
}
.custom-article-4{
    .react-divcreator-articles-image,
    .react-divcreator-articles-imageclick{
        max-height:100%;
        min-height:100px;
        height:auto;
        overflow:auto;
        padding:20px;
        box-sizing: border-box;
        transition-duration: 500ms;
        cursor:pointer;
    
        .react-divcreator-articles-image--img,
        .react-divcreator-articles-imageclick--img{
            display:none;
            transition-duration: 500ms;
            width: 100%;
            height: 150px;
        }
        .react-divcreator-articles-imageclick--content-title{
            width:100%;
            padding: 0 0 20px 0;
            min-height:30px;
            height:auto;
            overflow:auto;
        }
        .react-divcreator-articles-imageclick--content-description,
        .react-divcreator-articles-toggle{
            p{
                color:rgba(69,69,69,1);
                font-size:16px;
                line-height:25px;
            }            
        }
        h1 {
            color:rgba(69,69,69,.9);
            font-size:18px;
            text-align: center;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color:rgb(255,255,255) !important;
        }
    }
}`
        ),
        reactCode: (
`import { Articles } from 'react-divcreator';
    
<Articles
    id="article-1"
    class="custom-article-4"
    articleType={4}
    link={true}
    borderActive={true}
    borderColor="gold"
    borderSite='right'
    borderWidth={5}
    performance={true}
    animation={true}
    data={
        [
            {
                title: 'Click to read more',
                description: '...',
                class: 'article-custom-class',
                src: 'path/to/image.jpg',
                href: '',
                onlyImage: true,
                srcOptions: 'no-repeat center center fixed',
                function: consoleLog,
                functionData: ["a"],
                dataImage: "",
                dataContent: (
                    <p>
                        ...
                    </p>
                )
            },
            {
                title: 'Click to read more',
                description: '...',
                class: 'article-custom-class',
                src: 'path/to/image.jpg',
                href: '',
                onlyImage: true,
                srcOptions: 'no-repeat center center fixed',
                function: consoleLog,
                functionData: ["a"],
                dataImage: (
                    <h1> Birds </h1>
                ),
                dataContent: (
                    <p>
                        ...
                    </p>
                )
            }
        ]
    }
/>`
        ),
        jsCode: (
`const consoleLog = (event, customData) => {
    console.info(event);
    console.info(customData);
};`
        )
    }
];

const articleKeys = [
    {
        key: 'id',
        description: 'String - Custom id of root element.'
    },
    {
        key: 'class',
        description: 'String - Custom classname of root element.'
    },
    {
        key: 'performance',
        description: "Boolean - If true then the time between module's initialisation (in modules constructor) and after the render function called (in componentDidMount) are logged to the console."
    },
    {
        key: 'articleType',
        description: 'Numeric - Choose between 4 types. 1 image with text (without click function). 2 text with click function. 3 text (without click function). 4 image with text and click function.'
    },
    {
        key: 'link',
        description: 'Boolean - If the user click on the box, should the user be redirected to another page, set this option to true'
    },
    {
        key: 'borderActive',
        description: 'Boolean - Draw an border.'
    },
    {
        key: 'borderSite',
        description: 'String - Draw an border on the site ( top, bottom, right, left)'
    },
    {
        key: 'borderColor',
        description: 'String - Color of the border ( examples: #111, rgb(1,1,1), rgba(1,1,1,.2), red)'
    },
    {
        key: 'borderWidth',
        description: 'Numeric - With of the border in px'
    },
    {
        key: 'animation',
        description: 'Boolean - if true then the text (passed in the key "customData") are displayed with an animation.'
    },
    {
        key: 'keepOpen',
        description: 'Boolean - If true then keep opened all toggled elements.'
    },
    {
        key: 'animateKeepOpenBack',
        description: 'Boolean - If true and keepOpen={true} then animate toggling back the current clicked element, otherwise toggle back without an animation.'
    },
    {
        key: 'data',
        description: 'Array - of objects.'
    },
    {
        key: 'data.toggled',
        description: 'If true and data.childs (array) has valid childs (as object) then the childs are toggled (opened).',
        type: 'Boolean'
    },
    {
        key: 'data.title',
        description: 'String - Title of box.'
    },
    {
        key: 'data.description',
        description: 'String - Text in the box after title.'
    },
    {
        key: 'data.class',
        description: 'String - Add class name to the div.'
    },
    {
        key: 'data.src',
        description: 'String - If type is image then the src is the path to you image.'
    },
    {
        key: 'data.href',
        description: 'String - If you choose the link option, then the href is target destination, if the href is empty then the redirecter is not active.'
    },
    {
        key: 'data.onlyImage',
        description: 'Boolean - Should display data from the key dataImage or display only image.'
    },
    {
        key: 'data.function',
        description: 'Developers callback function after the single accordion has been clicked. The 1 parameter passed to the callback function is the click event, the 3 argument are the custom data provided with the key "functionData".',
        type: 'Function'
    },
    {
        key: 'data.functionData',
        description: 'Passed as 2 argument to the callback function.',
        type: 'Any'
    },
    {
        key: 'data.dataImage',
        description: 'JSX - Data inside the image div.'
    },
    {
        key: 'data.dataContent',
        description: 'JSX - Data, to display after the click event.'
    }
]

export {
    mainDescription,
    articlesData,
    articleKeys
};

