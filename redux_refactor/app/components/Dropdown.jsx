import React, { Component, PropTypes } from 'react';
import * as Colors from 'material-ui/lib/styles/colors';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import SubmitButton from 'components/SubmitButton';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import CategoryItem from 'components/CategoryItem';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: Colors.pinkA200,
  },
});

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      val:1,
    };
  }

  handleChange(e, index, value) {
    this.setState({
      val: value,
    });
  }

  render() {
    return (
        <div style={styles.container}>
          <DropDownMenu value={this.state.val} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Alcohols"/>
            <MenuItem value={"Footwear"} primaryText="Footwear"/>
            <MenuItem value={"Accessories"} primaryText="Accessories"/>
            <MenuItem value={"Electronics"} primaryText="Electronics"/>
            <MenuItem value={"Bags"} primaryText="Bags"/>
            <MenuItem value={"Female Bags"} primaryText="Female Bags"/>
            <MenuItem value={"Skiing & Skating"} primaryText="Skiing & Skating"/>
            <MenuItem value={"Cosmetics"} primaryText="Cosmetics"/>
            <MenuItem value={"Drinks"} primaryText="Drinks"/>
            <MenuItem value={"Milk"} primaryText="Milk"/>
            <MenuItem value={"Chocolate"} primaryText="Chocolate"/>
         </DropDownMenu>

        <SubmitButton
          onClickSubmitButton={this.props.onClickSubmitButton}
          submitButtonState={this.props.submitButtonState}
          categories={this.props.categories}
          category={this.props.category} />

      </div>
    );
  }
}
