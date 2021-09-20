import React from 'react';
import './App.css';

import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import {
    Navbar,
    HomePage,
    Exchanges,
    CryptoCurrencies,
    CryptoDetails,
    News,
} from './components';

const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Switch>
                            <Route exact path='/'>
                                <HomePage />
                            </Route>
                            <Route exact path='/exchanges'>
                                <Exchanges />
                            </Route>
                            <Route exact path='/cryptocurrencies'>
                                <CryptoCurrencies />
                            </Route>
                            <Route exact path='/crypto/:coinId'>
                                <CryptoDetails />
                            </Route>
                            <Route exact path='/news'>
                                <News />
                            </Route>
                        </Switch>
                    </div>
                </Layout>
                <div className='footer'>
                    <Typography.Title
                        level={5}
                        style={{ color: 'white', textAlign: 'center' }}>
                        Cryptoverse <br />© All Rights Reserved.
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/cryptocurrencies'>Crypto Currencies</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                </div>
            </div>
        </div>
    );
};

export default App;
