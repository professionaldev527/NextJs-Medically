import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/Pagetitle/PageTitle'
import FaqSection from '../../components/FaqSection/FaqSection.js';
import Footer from '../../components/Footer/Footer';
import Scrollbar from '../../components/Scrollbar/scrollbar';
import Logo from '../../public/images/logo-2.svg'


const ProjectPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={Logo} />
            <PageTitle pageTitle={'Faq'} pagesub={'Faq'} />
            <FaqSection />
            <Footer hclass={'wpo-site-footer_s2'} />
            <Scrollbar />

        </Fragment>
    )
};
export default ProjectPage;