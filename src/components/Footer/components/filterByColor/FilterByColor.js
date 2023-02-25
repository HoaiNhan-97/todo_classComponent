import classNames from 'classnames/bind';
import styles from './FilterByColor.module.scss';
import { COLORS } from '~/constant/constants';
let cx = classNames.bind(styles);
function FilterByColor() {
    return (
        <div className={cx('container')}>
            <h3 className={cx('title')}>Filter By Color</h3>
            {Object.keys(COLORS).map((color, index) => {
                return (
                    <label key={index} className={cx('color-item')}>
                        <input type="checkbox"></input>
                        <span className={cx('color')} style={{ backgroundColor: color }}></span>
                        <span>{color}</span>
                    </label>
                );
            })}
        </div>
    );
}

export default FilterByColor;
