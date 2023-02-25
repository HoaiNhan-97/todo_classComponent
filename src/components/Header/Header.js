import classNames from 'classnames/bind';
import React from 'react';
import styles from './Header.module.scss';

let cx = classNames.bind(styles);
class Header extends React.Component {
    render() {
        return (
            <div className={cx('container')}>
                <form>
                    <input type="text" placeholder="What needs to be done?" />
                </form>
            </div>
        );
    }
}

export default Header;
