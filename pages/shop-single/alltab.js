import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';


const ProductTabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }



    return (
        <div className="row">
            <div className="col col-xs-12">
                <div className="product-info">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                               Description
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >

                            Review
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <div id="Schedule">
                                    <p>Our premium medical orthotic brace provides exceptional support and stability for improved recovery. Designed with breathable, latex-free materials, it conforms smoothly to your body shape. The adjustable straps ensure a customizable fit while keeping the support firmly in place throughout daily activities, preventing discomfort and reducing the risk of further injury.</p>
                                    <p>Clinically tested to assist with rehabilitation, the brace incorporates lightweight structural panels that distribute pressure evenly. Its ergonomic design guarantees maximum mobility without compromising on structural integrity, making it an essential tool for effective physical therapy and long-term joint health.</p>
                                    </div>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                        <div className="row">
                            <div className="col col-lg-10 col-12">
                                <div className="client-rv">
                                    <div className="client-pic">
                                        <img src='/images/shop/shop-single/review/img-1.jpg' alt=""/>
                                    </div>
                                    <div className="details">
                                        <div className="name-rating-time">
                                            <div className="name-rating">
                                                <div>
                                                    <h4>Jenefar Willium</h4>
                                                </div>
                                                <div className="product-rt">
                                                    <span>25 Sep 2022</span>
                                                    <div className="rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <p>This product was incredibly easy to use and provided immediate relief. Excellent quality and the shipping was very fast. Highly recommended for anyone needing reliable support.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="client-rv">
                                    <div className="client-pic">
                                         <img src='/images/shop/shop-single/review/img-2.jpg' alt=""/>
                                    </div>
                                    <div className="details">
                                        <div className="name-rating-time">
                                            <div className="name-rating">
                                                <div>
                                                    <h4>Maria Bannet</h4>
                                                </div>
                                                <div className="product-rt">
                                                    <span>28 Sep 2022</span>
                                                    <div className="rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star-o"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review-body">
                                            <p>A true lifesaver during my recovery period. The material is soft yet sturdy, and the sizing guide was spot on. Very satisfied with this purchase and overall customer care.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col col-lg-12 col-12 review-form-wrapper">
                                <div className="review-form">
                                    <h4>Add a review</h4>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                    <form onSubmit={SubmitHandler}>
                                        <div className="give-rat-sec">
                                            <p>Your rating *</p>
                                            <div className="give-rating">
                                                <label>
                                                    <input type="radio" name="stars" value="1" />
                                                    <span className="icon">★</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="stars" value="2" />
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="stars" value="3" />
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="stars" value="4" />
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="stars" value="5" />
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                    <span className="icon">★</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <input type="text" className="form-control" placeholder="Name *"
                                                required/>
                                        </div>
                                        <div>
                                            <input type="email" className="form-control" placeholder="Email *"
                                                required/>
                                        </div>
                                        <div>
                                            <textarea className="form-control"
                                                placeholder="Review *"></textarea>
                                        </div>
                                        <div className="rating-wrapper">
                                            <div className="submit">
                                                <button type="submit" className="theme-btn">Post
                                                    review</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
    );
}

export default ProductTabs;