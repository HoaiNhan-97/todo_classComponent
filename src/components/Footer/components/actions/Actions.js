import classNames from 'classnames/bind';
import React from 'react';
import styles from './Action.module.scss';

let cx = classNames.bind(styles);
class Action extends React.Component {
    render() {
        return (
            <div className={cx('container')}>
                <h3>Action</h3>
                <button>Mark All Completed</button>
                <button>Clear Completed</button>
            </div>
        );
    }
}

export default Action;
