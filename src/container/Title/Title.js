import React from 'react';
import { connect } from 'react-redux';
import styles from './Title.module.css';
import SignIn from '../../components/SignIn.js';

const Title = ({ leftTodo }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.h1}>Tasks </span>({leftTodo})
      <SignIn />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    leftTodo: state.tasks.filter(task => !task.completed).length
  };
};

export default connect(mapStateToProps)(Title);
