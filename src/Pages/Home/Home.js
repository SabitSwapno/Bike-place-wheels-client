import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Products from './Products/Products';
import Faq from './Faq/Faq';
import Interect from './Interect/Interect';
import FeedBacks from './Feedbacks/FeedBacks';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Products></Products>
            <Interect></Interect>
            <FeedBacks></FeedBacks>
            <Faq></Faq>
            <Footer></Footer>

        </>
    );
};

export default Home;