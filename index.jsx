import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './src/pages/home';

import Documentation from './src/pages/documentation';

import ChangeLog from './src/pages/changelog';

import ArticlesWebsite from './src/pages/components/articles';

import AccordionWebsite from './src/pages/components/accordion';

import ButtonsWebsite from './src/pages/components/buttons';

import BoxBoxesWebsite from './src/pages/components/boxboxes';

import BoxMenuWebsite from './src/pages/components/boxmenu';

import BoxWindowWebsite from './src/pages/components/boxwindow';

import BreadcrumbsWebsite from './src/pages/components/breadcrumbs';

import CardsWebsite from './src/pages/components/cards';

import CubesWebsite from './src/pages/components/cubes';

import DashboardWebsite from './src/pages/components/dashboard';

import DivtriangleWebsite from './src/pages/components/divtriangle';

import FullscreenloadingWebsite from './src/pages/components/fullscreenloading';

import ImageWebsite from './src/pages/components/image';

import InputWebsite from './src/pages/components/input';

import InputListWebsite from './src/pages/components/inputlist';

import InputListSwitchWebsite from './src/pages/components/inputlistswitch';

import InputSuggestionWebsite from './src/pages/components/inputsuggestion';

import LinksWebsite from './src/pages/components/links';

import ListWebsite from './src/pages/components/list';

import MenuAnimationHamburgerWebsite from './src/pages/components/menuanimationhamburger';

import MenuAnimationDotsWebsite from './src/pages/components/menuanimationdots';

import MenuAnimationSquareWebsite from './src/pages/components/menuanimationsquare';

import MenuAnimationCustomWebsite from './src/pages/components/menuanimationcustom';

import MenuHorizontalClickWebsite from './src/pages/components/menuHorizontalClick';

import MenuHorizontalHoverWebsite from './src/pages/components/menuHorizontalHover';

import MenuVerticalHoverWebsite from './src/pages/components/menuVerticalHover';

import MenuVerticalClickWebsite from './src/pages/components/menuVerticalClick';

import MenuFixedTopWebsite from './src/pages/components/menufixedtop';

import MenuFixedLeftWebsite from './src/pages/components/menufixedleft';

import MenuFixedBottomWebsite from './src/pages/components/menufixedbottom';

import MenuFixedRightWebsite from './src/pages/components/menufixedright';

import ModalWebsite from './src/pages/components/modal';

import ButtonsNavigationWebsite from './src/pages/components/buttonsNavigation';

import PagingWebsite from './src/pages/components/paging';

import SliderWebsite from './src/pages/components/slider';

import SourcecodeWebsite from './src/pages/components/sourcecode';

import StarsWebsite from './src/pages/components/stars';

import VerticalbarsWebsite from './src/pages/components/verticalbars';

import VideobackgroundWebsite from './src/pages/components/videobackground';

import Website404Website from './src/pages/components/website404Website';

import NotFound from './src/pages/notfound';

import './src/static/sass/root.scss';

class Root extends Component {

  constructor(props) {
    super(props);

    this.state = {
      appId: 'root-light'
    };
  }

  render() {
    return <HashRouter>
      <div id={this.state.appId}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/documentation' component={Documentation} />
          <Route exact path='/components' component={Documentation} />
          <Route exact path='/changelog' component={ChangeLog} />
          <Route exact path='/components/articles' component={ArticlesWebsite} />
          <Route exact path='/components/accordion' component={AccordionWebsite} />
          <Route exact path='/components/buttons' component={ButtonsWebsite} />
          <Route exact path='/components/buttonsnavigation' component={ButtonsNavigationWebsite} />
          <Route exact path='/components/boxboxes' component={BoxBoxesWebsite} />
          <Route exact path='/components/boxmenu' component={BoxMenuWebsite} />
          <Route exact path='/components/boxwindow' component={BoxWindowWebsite} />
          <Route exact path='/components/breadcrumbs' component={BreadcrumbsWebsite} />
          <Route exact path='/components/cards' component={CardsWebsite} />
          <Route exact path='/components/cube' component={CubesWebsite} />
          <Route exact path='/components/dashboard' component={DashboardWebsite} />
          <Route exact path='/components/divtriangle' component={DivtriangleWebsite} />
          <Route exact path='/components/fullscreenloading' component={FullscreenloadingWebsite} />
          <Route exact path='/components/image' component={ImageWebsite} />
          <Route exact path='/components/input' component={InputWebsite} />
          <Route exact path='/components/inputlist' component={InputListWebsite} />
          <Route exact path='/components/inputlistswitch' component={InputListSwitchWebsite} />
          <Route exact path='/components/inputsuggestion' component={InputSuggestionWebsite} />
          <Route exact path='/components/links' component={LinksWebsite} />
          <Route exact path='/components/list' component={ListWebsite} />
          <Route exact path='/components/menuanimationhamburger' component={MenuAnimationHamburgerWebsite} />
          <Route exact path='/components/menuanimationdots' component={MenuAnimationDotsWebsite} />
          <Route exact path='/components/menuanimationsquare' component={MenuAnimationSquareWebsite} />
          <Route exact path='/components/menuanimationcustom' component={MenuAnimationCustomWebsite} />
          <Route exact path='/components/menuhorizontalclick' component={MenuHorizontalClickWebsite} />
          <Route exact path='/components/menuhorizontalhover' component={MenuHorizontalHoverWebsite} />
          <Route exact path='/components/menuverticalhover' component={MenuVerticalHoverWebsite} />
          <Route exact path='/components/menuverticalclick' component={MenuVerticalClickWebsite} />
          <Route exact path='/components/menufixedtop' component={MenuFixedTopWebsite} />
          <Route exact path='/components/menufixedleft' component={MenuFixedLeftWebsite} />
          <Route exact path='/components/menufixedbottom' component={MenuFixedBottomWebsite} />
          <Route exact path='/components/menufixedright' component={MenuFixedRightWebsite} />
          <Route exact path='/components/modal' component={ModalWebsite} />
          <Route exact path='/components/paging' component={PagingWebsite} />
          <Route exact path='/components/slider' component={SliderWebsite} />
          <Route exact path='/components/sourcecode' component={SourcecodeWebsite} />
          <Route exact path='/components/stars' component={StarsWebsite} />
          <Route exact path='/components/verticalbars' component={VerticalbarsWebsite} />
          <Route exact path='/components/videobackground' component={VideobackgroundWebsite} />
          <Route exact path='/components/website404' component={Website404Website} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </HashRouter>
  }
}

ReactDOM.render(<Root />, document.getElementById('app'));