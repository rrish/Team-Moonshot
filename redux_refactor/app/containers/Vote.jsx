import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import EntryBox from 'components/EntryBox';
import MainSection from 'components/MainSection';
import Scoreboard from 'components/Scoreboard';
import MenuButton from 'components/MenuButton';
import Dropdown from 'components/Dropdown';
import {submission} from 'actions/categories';

import {
  createCategory, typing, destroyCategory, fetchCategories, tutorial } from 'actions/categories';
import styles from 'css/components/vote';

const cx = classNames.bind(styles);

class Vote extends Component {

  //Data that needs to be called before rendering the component
  //This is used for server side rending via the fetchComponentDataBeforeRender() method
  static need = [  // eslint-disable-line
    fetchCategories
  ]

  constructor(props) {
    super(props);
    // event handlers for MainSection component
    this.onDestroy = this.onDestroy.bind(this);
    // event handlers for EntryBox component
    this.onEntryChange = this.onEntryChange.bind(this);
    this.onEntrySave = this.onEntrySave.bind(this);
    this.onTutorialButton = this.onTutorialButton.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onSubmitClick(id,index) {
    const {dispatch} = this.props;
    dispatch(submission(id, index))
  }

  onTutorialButton(id,index) {
    const {dispatch} = this.props;
    dispatch(tutorial(id, index))
  }

  onDestroy(id, index) {
    const { dispatch } = this.props;
    dispatch(destroyCategory(id, index));
  }

  onEntryChange(text) {
    const { dispatch } = this.props;
    dispatch(typing(text));
  }

  onEntrySave(name) {
    console.log("SAVING");
    console.log(name);
    const { dispatch } = this.props;
    dispatch(createCategory(name));
  }

  render() {
    const {newCategory, categories} = this.props;
    return (
      <div>
        <EntryBox
          category={newCategory}
          onEntryChange={this.onEntryChange}
          onEntrySave={this.onEntrySave}
        />
        <MenuButton
          TutorialButton={this.onTutorialButton}
        />
        <Dropdown
          SubmitButton={this.onSubmitClick} />
        <MainSection
          categories={categories}
          onDestroy={this.onDestroy}
        />
      </div>
    );
  }
}

Vote.propTypes = {
  categories: PropTypes.array.isRequired,
  newCatgory: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    categories: state.category.categories,
    newCategory: state.category.newCategory
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(Vote);