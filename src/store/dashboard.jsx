import React from 'react';

import { Buttons, Cards, Dashboard, Image, MenuAnimationDots, Videobackground } from '../../module/build/react-divcreator';

const dashboardData = [
    {
        class: 'dashboard-example-1',
        description: 'Example with 5 available areas and responsiveX={1024} - its mean change the dashboards flex direction from row to column on document width smaller then 1024px.',
        html: (
            <Dashboard
                id=''
                class='dashboard-1'
                performance={true}
                border={true}
                vector={'px'}
                top={true}
                responsive={true}
                responsiveX={1024}
                topData={
                    (
                        <MenuAnimationDots
                            id="menu-anim-dashboard"
                            class="custom-menu-dashboard"
                            link={true}
                            clickNavigateToTop={false}
                            left={false}
                            border={false}
                            includeContent={true}
                            routes={
                                [
                                    {
                                        href: '/components/dashboard',
                                        title: 'Navigate to Cards',
                                        class: 'my-custom-classname-link',
                                        id: '',
                                        text: (<span><i className="fas fa-columns"></i> Cards</span>),
                                        isLink: true
                                    },
                                    {
                                        href: '/components/dashboard',
                                        title: 'Navigate to Dashboard',
                                        class: 'my-custom-classname-link',
                                        text: (<span><i className="fas fa-chart-bar"></i> Dashboard</span>),
                                        isLink: true
                                    },
                                    {
                                        href: '/components/dashboard',
                                        title: 'Navigate to Slider',
                                        class: 'my-custom-classname-link',
                                        text: (<span><i className="fas fa-sliders-h"></i> Slider</span>),
                                        isLink: true
                                    }
                                ]
                            }
                        />
                    )
                }
                left={true}
                leftWidth={200}
                leftData={
                    (
                        <Buttons
                            link={true}
                            class="buttons-dashboard-example"
                            data={
                                [
                                    {
                                        href: '/components/dashboard',
                                        text: 'default',
                                        status: 'default',
                                        attributes: {
                                            title: "Custom title button 1"
                                        }
                                    },
                                    {
                                        href: '/components/dashboard',
                                        text: 'disabled',
                                        status: 'disabled',
                                        attributes: {
                                            title: "Custom title button 2"
                                        }
                                    },
                                    {
                                        href: '/components/dashboard',
                                        text: 'success',
                                        status: 'success',
                                        attributes: {
                                            title: "Custom title button 3"
                                        }
                                    },
                                    {
                                        href: '/components/dashboard',
                                        text: 'error',
                                        status: 'error',
                                        attributes: {
                                            title: "Custom title button 4"
                                        }
                                    },
                                    {
                                        href: '/components/dashboard',
                                        text: 'warning',
                                        status: 'warning',
                                        attributes: {
                                            title: "Custom title button 5"
                                        }
                                    }
                                ]
                            }
                        />
                    )
                }
                center={true}
                centerData={
                    (
                        <Image
                            class="custom-image-dashboard"
                            onlyImage={true}
                            src="/src/static/images/abstract.jpg"
                            srcOptions='no-repeat'
                            background="rgba(255,255,255,.1)"
                            performance={true}
                        />
                    )
                }
                right={true}
                rightWidth={200}
                rightData={
                    (
                        <Cards
                            id=''
                            class='own-card-class own-card-class-2'
                            align={5}
                            link={false}
                            break={1}
                            border={true}
                            data=
                            {
                                [
                                    {
                                        description: `Lorem ipsum dolor sit amet, 
                                                  consetetur elitr.`,
                                        attributes: {
                                            title: "Card title 2"
                                        },
                                        data: (
                                            <Videobackground
                                                id=""
                                                class="my-video-example"
                                                src="/./src/static/videos/Black13495.mp4"
                                                autoplay={true}
                                                muted={true}
                                                loop={true}
                                                controls={true}
                                                type='video/mp4'
                                            />
                                        )
                                    },
                                    {
                                        description: `Lorem ipsum dolor sit amet, 
                                                  consetetur elitr.`,
                                        attributes: {
                                            title: "Card title 2"
                                        },
                                        data: (
                                            <Videobackground
                                                id=""
                                                class="my-video-example"
                                                src="/./src/static/videos/earth.mp4"
                                                autoplay={true}
                                                muted={true}
                                                loop={true}
                                                controls={true}
                                                type='video/mp4'
                                            />
                                        )
                                    },
                                    {
                                        description: `Lorem ipsum dolor sit amet, 
                                                  consetetur elitr.`,
                                        attributes: {
                                            title: "Card title 3"
                                        },
                                        data: (
                                            <Videobackground
                                                id=""
                                                class="my-video-example"
                                                src="/./src/static/videos/coffee.mp4"
                                                autoplay={true}
                                                muted={true}
                                                loop={true}
                                                controls={true}
                                                type='video/mp4'
                                            />
                                        )
                                    }
                                ]
                            }
                        />

                    )
                }
                bottom={true}
                bottomData={
                    (
                        <p>REACT-DIVCREATOR</p>
                    )
                }
            />
        ),
        cssCode: (
`.react-divcreator-dashboard{
    .react-divcreator-dashboard-left__data,
    .react-divcreator-dashboard-center__data{
        padding:0 20px;
    }
    .react-divcreator-dashboard-top{
        padding-bottom:10px;
    
        .custom-menu-dashboard{
            .react-divcreator-menuanimation-hamburger__icons{
                margin-top:10px;
    
                .react-divcreator-menuanimation-hamburger__icons-p-animation-1,
                .react-divcreator-menuanimation-hamburger__icons-p-animation-2,
                .react-divcreator-menuanimation-hamburger__icons-p-animation-3{
                    background:rgb(255,255,255);
                }
            }
            .link-animation{
                line-height: 40px;
                color:rgb(255,255,255);
            }
            .react-divcreator-menuanimation-holder{
                @media screen and (max-width: $media-break){
                    width: 100%;
                    min-width: 350px;            
                }
                border-radius:5px;
                width: 400px;
    
                .react-divcreator-menuanimation-holder-accordion{
                    background:transparent;
    
                    .react-divcreator-accordion,
                    .react-divcreator-accordion__single-content{
                        padding:0;
                    }
                    .parent-div{
                        .react-divcreator-accordion__single-accordion-element{
                            border-bottom: 1px solid cornflowerblue;
                        }
                        .my-custom-classname-link{
                            text-decoration: none;
                            color:rgb(222,222,222);
                            font-size: 1.2rem;
                            transition-duration: 300ms;
                        }
                        .my-custom-classname-link:hover{
                            color:gold;
                        }
                        i{
                            color: rgba(199,199,199,.6);
                            margin-right:10px;
                            font-size: 1.4rem;
                        }
                    }
                }
            }
        }
        .react-divcreator-menuanimation-holder{
            background-color: #212529;
        }
    }
    .react-divcreator-dashboard-center{
        .react-divcreator-image{
            min-height:100%;
        }
    }
    .react-divcreator-dashboard-right{
        .own-card-class-2{
            margin:0 auto 20px auto;
            
            .react-divcreator-cards__single-card{
                min-height: 200px;
            }
        }
    }
    .react-divcreator-dashboard-bottom{
        text-align:center;
        color:rgb(255,255,255);
        margin-top:10px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        line-height:50px;
    }
    .react-divcreator-dashboard-bottom{
        background-color: #212529;
    }
    .buttons-dashboard-example{
        display: block;
    
        .react-divcreator-buttons__single-button{
            margin: 10px 0;
        }
    }
}`
        ),
        reactCode: (
`import { Buttons, Cards, Dashboard, Image, MenuAnimationDots, Videobackground  } from 'react-divcreator';
    
<Dashboard
    id=''
    class='dashboard-1'
    performance={true}
    border={true}
    vector={'px'}
    top={true}
    responsiveX={1024}
    topData={
        (
            <MenuAnimationDots
                id="menu-anim-dashboard"
                class="custom-menu-dashboard"
                link={true}
                clickNavigateToTop={false}
                left={false}
                border={false}
                includeContent={true}
                routes={
                    [
                        {
                            href: '/components/dashboard',
                            title: 'Navigate to Cards',
                            class: 'my-custom-classname-link',
                            id: '',
                            text: (<span><i className="fas fa-columns"></i> Cards</span>)
                        },
                        {
                            href: '/components/dashboard',
                            title: 'Navigate to Dashboard',
                            class: 'my-custom-classname-link',
                            text: (<span><i className="fas fa-chart-bar"></i> Dashboard</span>)
                        },
                        {
                            href: '/components/dashboard',
                            title: 'Navigate to Slider',
                            class: 'my-custom-classname-link',
                            text: (<span><i className="fas fa-sliders-h"></i> Slider</span>)
                        }
                    ]
                }
            />
        )
    }
    left={true}
    leftWidth={200}
    leftData={
        (
            <Buttons
                link={true}
                class="buttons-dashboard-example"
                data={
                    [
                        {
                            href: '/components/dashboard',
                            text: 'default',
                            status: 'default',
                            attributes: {
                                title: "Custom title button 1"
                            }
                        },
                        {
                            href: '/components/dashboard',
                            text: 'disabled',
                            status: 'disabled',
                            attributes: {
                                title: "Custom title button 2"
                            }
                        },
                        {
                            href: '/components/dashboard',
                            text: 'success',
                            status: 'success',
                            attributes: {
                                title: "Custom title button 3"
                            }
                        },
                        {
                            href: '/components/dashboard',
                            text: 'error',
                            status: 'error',
                            attributes: {
                                title: "Custom title button 4"
                            }
                        },
                        {
                            href: '/components/dashboard',
                            text: 'warning',
                            status: 'warning',
                            attributes: {
                                title: "Custom title button 5"
                            }
                        }
                    ]
                }
            />
        )
    }
    center={true}
    centerData={
        (
            <Image
                class="custom-image-dashboard"
                onlyImage={true}
                src="/src/static/images/birds.jpg"
                srcOptions='no-repeat'
                background="rgba(255,255,255,.1)"
                performance={true}
            />
        )
    }
    right={true}
    rightWidth={200}
    rightData={
        (
            <Cards
                id=''
                class='own-card-class own-card-class-2'
                align={5}
                link={false}
                break={1}
                border={true}
                data=
                {
                    [
                        {
                            description: \`Lorem ipsum dolor sit amet, 
                                        consetetur elitr.\`,
                            attributes: {
                                title: "Card title 2"
                            },
                            data: (
                                <Videobackground
                                    id=""
                                    class="my-video-example"
                                    src="/./src/static/videos/Black13495.mp4"
                                    autoplay={true}
                                    muted={true}
                                    loop={true}
                                    controls={true}
                                    type='video/mp4'
                                />
                            )
                        },
                        {
                            description: \`Lorem ipsum dolor sit amet, 
                                        consetetur elitr.\`,
                            attributes: {
                                title: "Card title 2"
                            },
                            data: (
                                <Videobackground
                                    id=""
                                    class="my-video-example"
                                    src="/./src/static/videos/earth.mp4"
                                    autoplay={true}
                                    muted={true}
                                    loop={true}
                                    controls={true}
                                    type='video/mp4'
                                />
                            )
                        },
                        {
                            description: \`Lorem ipsum dolor sit amet, 
                                        consetetur elitr.\`,
                            attributes: {
                                title: "Card title 3"
                            },
                            data: (
                                <Videobackground
                                    id=""
                                    class="my-video-example"
                                    src="/./src/static/videos/coffee.mp4"
                                    autoplay={true}
                                    muted={true}
                                    loop={true}
                                    controls={true}
                                    type='video/mp4'
                                />
                            )
                        }
                    ]
                }
            />
        )
    }
    bottom={true}
    bottomData={
        (
            <p>REACT-DIVCREATOR</p>
        )
    }
/>`
        ),
        jsCode: ''
    }
];

const dashboardKeys = [
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
        key: 'vector',
        description: 'String - available vectors: "px" or "%" for the calculation of the with of the left, center and right site.'
    },
    {
        key: 'border',
        description: 'Boolean - If true then draw an border around the dashboard.'
    },
    {
        key: 'responsive',
        description: 'Boolean - If true then if the documents width is smaller then responsiveX={...} then the modules default classname becomes an suffix: "--responsive".'
    },
    {
        key: 'responsiveX',
        description: 'Number - If documents width is smaller then this value, then add the suffix "--responsive" to the modules root classname.'
    },
    {
        key: 'top',
        description: 'Boolean - Display the top dashboard element.'
    },
    {
        key: 'topData',
        description: 'Mixed - Custom developers JSX data.'
    },
    {
        key: 'left',
        description: 'Boolean - Display the left dashboard element.'
    },
    {
        key: 'leftWidth',
        description: 'Number - The width ot the left site of the dashboard.'
    },
    {
        key: 'leftData',
        description: 'Mixed - Custom developers JSX data.'
    },
    {
        key: 'center',
        description: 'Boolean - Display the center dashboard element.'
    },
    {
        key: 'centerData',
        description: 'Mixed - Custom developers JSX data.'
    },
    {
        key: 'right',
        description: 'Boolean - Display the right dashboard element.'
    },
    {
        key: 'rightWidth',
        description: 'Number - The width ot the right site of the dashboard.'
    },
    {
        key: 'rightData',
        description: 'Mixed - Custom developers JSX data.'
    },
    {
        key: 'bottom',
        description: 'Boolean - Display the bottom dashboard element.'
    },
    {
        key: 'bottomData',
        description: 'Mixed - custom developers JSX data.'
    }
]

export {
    dashboardData,
    dashboardKeys
};

