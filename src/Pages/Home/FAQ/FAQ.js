import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div id="FAQ">
            <section className="container py-3 my-5">
                <h1 className="fw-bold py-5">Frequently asked questions</h1>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> How do I obtain Essential Trip Information with full details of my trip?</Accordion.Header>
                        <Accordion.Body>
                            Make sure you bring these with you. Every trip has a set of Essential Trip Information, accessible on our website, that gives you in-depth information about all aspects of your trip. To access your Essential Trip Information, please visit your trip’s specific facts page on our website. The Essential Trip Information are accessible at the top of this page.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How safe are my belongings whilst on the trip?</Accordion.Header>
                        <Accordion.Body>
                            While we take all the precautions we can to make sure your belongings are safe, we are travelling to some exciting destinations that are sometimes home to some pretty skilled thieves. Travel insurance is a must and a lockable bag or money belt will always help too.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Can I use my credit card during my trip?</Accordion.Header>
                        <Accordion.Body>
                            Our Essential Trip Information include a section on ‘Spending money’. Please refer to this for an idea on budgets. Travellers’ cheques are not common practice anymore so it is a good idea to travel with a credit card and ATM card, or a bank issued ‘cash card’ specifically for travel.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is the best way to carry money?</Accordion.Header>
                        <Accordion.Body>
                            We recommend having access to money from a variety of sources – cash, cards and travel money cards are all commonly used. Check your Essential Trip Information and the relevant Destination Page on our website for more country-specific information.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </section>
        </div>
    );
};

export default FAQ;