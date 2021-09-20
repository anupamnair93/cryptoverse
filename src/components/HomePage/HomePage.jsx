import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptoCoinsQuery } from '../../services/cryptoApi';

import { CryptoCurrencies, News } from '../../components';

const { Title } = Typography;

const HomePage = () => {
    const { data, isFetching } = useGetCryptoCoinsQuery(10);

    const globalStatistics = data?.data?.stats;

    if (isFetching) return 'Loading...';

    return (
        <>
            <Title level={2} className='heading'>
                Global Crypto Currency Statistics
            </Title>
            <Row>
                <Col span={12}>
                    <Statistic
                        title='Total Crypto Currencies'
                        value={globalStatistics?.total}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title='Total Exchanges'
                        value={millify(globalStatistics.totalExchanges)}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title='Total Market Cap'
                        value={millify(globalStatistics.totalMarketCap)}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title='Total 24 Hours Volume'
                        value={millify(globalStatistics.total24hVolume)}
                    />
                </Col>
                <Col span={12}>
                    <Statistic
                        title='Total Markets'
                        value={millify(globalStatistics.totalMarkets)}
                    />
                </Col>
            </Row>
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>
                    Top 10 Crypto Currencies in the world
                </Title>
                <Title level={3} className='show-more'>
                    <Link to='/cryptocurrencies'>Show More</Link>
                </Title>
            </div>
            <CryptoCurrencies simplified />
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>
                    Latest Cryptocurrency News
                </Title>
                <Title level={3} className='show-more'>
                    <Link to='/news'>Show More</Link>
                </Title>
            </div>
            <News simplified />
        </>
    );
};

export default HomePage;
