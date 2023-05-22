import classNames from 'classnames/bind';

import Card from '~/components/Card';
import styles from './Home.module.scss';
import { datas } from '~/mocks';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home')}>
            {datas.map((data) => (
                <Card key={data.id} data={data} />
            ))}
        </div>
    );
}

export default Home;
