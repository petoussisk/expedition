import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import ChevronLeftIcon from 'material-ui/svg-icons/navigation/chevron-left';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import theme from '../../theme';

/*
<style>
    :host.dark .content ::content a,
    :host.dark .content ::content paper-button,
    :host.dark .content ::content expedition-checkbox,
    :host.dark .content ::content number-picker,
    :host.dark .content ::content expedition-picker {
      background-color: var(--background-color-dark-interactive);
    };

    :host.dark .content ::content a:active {
      background-color: var(--background-color-dark-active);
    }
    :host.dark svg {
      fill: var(--font-color-dark-primary);
    };
*/

interface ExpeditionCardProps extends React.Props<any> {
  onMenuSelect?: (value: string) => any;
  onReturn?: () => any;
  title?: string;
  icon?: string;
  dark?: boolean;
}

export default class ExpeditionCard extends React.Component<ExpeditionCardProps, {}> {
  style: any;

  constructor(props: any) {
    super(props);
    this.style = {
      scrollbox: {
        position: "relative",
        minHeight: "90vh",
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      },
      article: {
        display: 'flex',
        overflowY: 'auto',
        padding: theme.vw.base,
        fontSize: theme.fontSize.flavortext,
      },
      titleContainer: {
        backgroundColor: (this.props.dark) ? theme.colors.backgroundColorDarkAccent: theme.colors.backgroundColorAccent,
        padding: 0,
        lineHeight: theme.vw.huge,
      },
      titleText: {
        fontFamily: theme.card.headerFont,
        fontSize: theme.fontSize.title,
        display: 'inline-block',
      },
      titleReturn: {
        float: 'left',
      },
      card: {
        height: "100%",
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: (this.props.dark) ? 'black' : 'inherit',
        color: (this.props.dark) ? theme.colors.fontColorDarkPrimary : theme.colors.fontColorPrimary,
      },
      menu: {
        float: 'right',
        marginRight: theme.vw.base,
        padding: 0,
        fontSize: theme.fontSize.interactive,
      },
      scrollboxTop: {
        position: 'absolute',
        width: theme.vw.huge,
        height: theme.vw.large,
        borderTop: (this.props.dark) ? theme.border.accent : theme.border.primary,
        borderLeft: (this.props.dark) ? theme.border.accent : theme.border.primary,
      },
      scrollboxBottom: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: theme.vw.huge,
        height: theme.vw.large,
        borderRight: (this.props.dark) ? theme.border.accent : theme.border.primary,
        borderBottom: (this.props.dark) ? theme.border.accent : theme.border.primary,
      },
      watermark: {
        position: 'absolute',
        height: "36vh",
        width: "36vh",
        right: 0,
        bottom: theme.vh.huge,
        marginRight: "-10%",
        marginTop: "-25%",
        opacity: 0.2,
      }
    };
  }

  render() {
    var icon: JSX.Element = <span></span>;
    if (this.props.icon) {
      icon = <img style={this.style.watermark} id="bgimg" src={"images/" + this.props.icon + ".svg"}></img>;
    }

    // TODO: Spacer ios-only as first child of card style
    return (
      <div style={this.style.card}>
        <div style={this.style.titleContainer}>
            <IconButton style={{float: 'left'}} onTouchTap={this.props.onReturn}><ChevronLeftIcon/></IconButton>
            <IconMenu
              style={this.style.menu}
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              onChange={(event: any, value: string)=>this.props.onMenuSelect(value)}>
                <MenuItem value="HOME" primaryText="Home"/>
                <MenuItem value="SETTINGS" primaryText="Settings"/>
                <MenuItem value="FEEDBACK" primaryText="Feedback"/>
            </IconMenu>
            <div style={this.style.titleText}>{this.props.title}</div>
        </div>
        <div style={this.style.article}>
          <div style={this.style.scrollboxTop}/>
          <div style={this.style.scrollbox}>
            {icon}
            <div style={{margin: theme.vw.large}}>
              {this.props.children}
            </div>
          </div>
          <div style={this.style.scrollboxBottom}/>
        </div>
      </div>
    );
  }
}