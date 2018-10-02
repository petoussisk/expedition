import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import * as React from 'react';
import {CardName, CardState} from '../../reducers/StateTypes';
import {CardThemeType} from '../../reducers/StateTypes';
import {formatImg} from '../views/quest/cardtemplates/Render';

export interface StateProps {
  cardTheme: CardThemeType;
  card: CardState;
  questTheme: string;
}

export interface DispatchProps {
  onChange: (event: any, value: CardName) => void;
}

export interface Props extends StateProps, DispatchProps {}

export default class Navigation extends React.Component<Props, {}> {

  private computeValue() {
    switch (this.props.card.name) {
      case 'SEARCH_CARD':
      case 'QUEST_HISTORY':
      case 'SAVED_QUESTS':
      case 'FEATURED_QUESTS':
      case 'GM_CARD':
        return this.props.card.name;
      default:
        console.error('Unknown navigation state for card name ' + this.props.card.name);
        return 'TUTORIAL_CARD';
    }
  }

  private genIcon(name: string): JSX.Element {
    return <img className="inline_icon" src={'images/' + formatImg(name, this.props.cardTheme, true) + '.svg'} />;
  }

  public render() {
    // const color = (this.props.cardTheme === 'dark') ? 'white' : 'black';
    // TODO: Replace saved/offline with multiplayer flap when connected to a session
    return (
      <BottomNavigation
        value={this.computeValue()}
        showLabels={false}
        onChange={this.props.onChange}
        className={`nav_footer card_theme_${this.props.cardTheme} quest_theme_${this.props.questTheme}`}>
        <BottomNavigationAction label="Tutorials" value="FEATURED_QUESTS" icon={this.genIcon('helper')} />
        <BottomNavigationAction label="Quests" value="SEARCH_CARD" icon={this.genIcon('search')} />
        <BottomNavigationAction label="Saved/Offline" value="SAVED_QUESTS" icon={this.genIcon('compass')} />
        <BottomNavigationAction label="History" value="QUEST_HISTORY" icon={this.genIcon('hourglass')} />
        <BottomNavigationAction label="GM Corner" value="GM_CARD" icon={this.genIcon('gm_corner')} />
      </BottomNavigation>
    );
  }
}
