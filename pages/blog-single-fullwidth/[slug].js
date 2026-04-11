import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import blogs from '../../mock-api/blogs'
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/Pagetitle/PageTitle'
import BlogSingle from '../../components/BlogDetails/BlogSingle'
import Scrollbar from '../../components/Scrollbar/scrollbar'
import Footer from '../../components/Footer/Footer';

import logo from '../../public/images/logo-2.svg';

const BlogDetailsFull = () => {
    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={logo} />
            <PageTitle pageTitle={BlogDetails?.title} pagesub={'Blog'} />
            <BlogSingle blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'} />
            <Footer hclass={'wpo-site-footer_s2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetailsFull;