import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptoCoinsQuery } from '../../services/cryptoApi';

const CryptoCurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    const { data: cryptoCurrenciesList, isFetching } =
        useGetCryptoCoinsQuery(count);

    const [cryptoCurrencies, setCryptoCurrencies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const filteredData = cryptoCurrenciesList?.data?.coins.filter((coin) =>
            coin.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setCryptoCurrencies(filteredData);
    }, [cryptoCurrenciesList, searchTerm]);

    if (isFetching) return 'Loading...';

    return (
        <>
            {!simplified && (
                <div className='search-crypto'>
                    <Input
                        placeholder='Search Crypto Currency'
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            )}
            <Row gutter={[24, 24]} className='crypto-card-container'>
                {cryptoCurrencies?.map((currency) => (
                    <Col
                        xs={24}
                        sm={12}
                        lg={6}
                        className='crypto-card'
                        key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                extra={
                                    <img
                                        className='crypto-image'
                                        src={currency.iconUrl}
                                        width={30}
                                        height={30}
                                    />
                                }
                                hoverable>
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default CryptoCurrencies;
