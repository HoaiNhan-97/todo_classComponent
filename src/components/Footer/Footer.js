import classNames from 'classnames/bind';
import Action from './components/actions/Actions';
import FilterByColor from './components/filterByColor/FilterByColor';
import FilterByStatus from './components/filterByStatus/FilterByStatus';
import Remaining from './components/remaining/Remaining';
import styles from './Footer.module.scss';

let cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('container')}>
            <div className={cx('item')}>
                <Action />
            </div>
            <div className={cx('item')}>
                <Remaining />
            </div>
            <div className={cx('item')}>
                <FilterByStatus />
            </div>
            <div className={cx('item')}>
                <FilterByColor />
            </div>
        </div>
    );
}

export default Footer;
