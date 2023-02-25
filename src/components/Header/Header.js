import classNames from 'classnames/bind';
import styles from './Header.module.scss';

let cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('container')}>
            <form>
                <input type="text" placeholder="What needs to be done?" />
            </form>
        </div>
    );
}

export default Header;
