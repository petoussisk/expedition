import Button from '@material-ui/core/Button';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import * as React from 'react';

export interface Props {
  label: string;
  value: boolean;
  onChange: (checked: boolean) => any;
}

class ExpeditionCheckbox extends React.Component<Props, {}> {
  public render() {
    const icon = (this.props.value) ? <CheckBoxIcon/> : <CheckBoxOutlineIcon/>;
    return (
      <span className="creatorCheckbox">
        <Button onClick={(e: any) => this.props.onChange(!this.props.value)}>
          <div>
            <span className="icon">{icon}</span>
            <span className="label">{this.props.label}</span>
          </div>
          <div className="subtext" id="subtext">{this.props.children}</div>
        </Button>
      </span>
    );
  }
}

export default ExpeditionCheckbox;
