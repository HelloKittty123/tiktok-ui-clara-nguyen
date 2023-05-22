import classNames from 'classnames/bind';

import Card from '~/components/Card';
import styles from './Following.module.scss';
import { datas } from '~/mocks';

const cx = classNames.bind(styles);

function Following() {
    return (
        <div className={cx('following')}>
            {[...datas].reverse().map((data) => (
                <Card key={data.id} data={data} />
            ))}
        </div>
    );
}

export default Following;
