import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/Pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList.js'
import Scrollbar from '../../components/Scrollbar/scrollbar'
import Footer from '../../components/Footer/Footer';

import logo from '../../public/images/logo-2.svg';

const BlogPageFullwidth = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={logo} />
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogList blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/>
            <Footer hclass={'wpo-site-footer_s2'} />
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPageFullwidth;

