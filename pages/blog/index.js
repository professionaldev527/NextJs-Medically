import React, { Fragment } from 'react';
import PageTitle from '../../components/Pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList.js'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Scrollbar from '../../components/Scrollbar/scrollbar';
import logo from '../../public/images/logo-2.svg';

const BlogPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={logo} />
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'} />
            <BlogList />
            <Footer hclass={'wpo-site-footer_s2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogPage;

