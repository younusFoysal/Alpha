import React from 'react';

const Faq = () => {
    return (
        <div className="mb-10">

            <h1 className="text-2xl font-bold mb-6 text-center text-blue-900">Frequently Asked Questions</h1>



            <div className="w-full mx-auto p-4">
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4" defaultChecked/>
                        <div className="collapse-title text-xl font-medium">Q. When and where can I take a test drive?
                        </div>
                        <div className="collapse-content">
                            <p>With our test drive booking form, you can conveniently schedule a test drive at home or
                                visit our hub to try out multiple cars. Once you book your preferred option, your
                                relationship manager will call you to confirm the details before arriving at your
                                location. </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4"/>
                        <div className="collapse-title text-xl font-medium">Q. What’s the process for booking my car?
                        </div>
                        <div className="collapse-content">
                            <p>You can book an Assured & Budget car of your liking for up to 5 days by placing a
                                refundable deposit of Rs. 20,000. Similarly, for Alpha Max cars, it's Rs. 50,000. If you
                                complete the vehicle purchase within the holding period, the deposit will be applied
                                toward the purchase; otherwise, it will be refunded to you, and the booking will be
                                cancelled.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4"/>
                        <div className="collapse-title text-xl font-medium">Q. Will Alpha Cars help me with car finance?
                        </div>
                        <div className="collapse-content">
                            <p>Absolutely, buyers can choose to avail financing through Alpha Cars wherein we would get
                                the loan processed through our finance partners. Our established partnerships help us
                                process loans faster and get our customers better interest rates. Depending on your
                                credit worthiness, you can avail used car loans through Alpha Cars at interest rates as
                                low as 12.99% compared to the market rates of 14-16%.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-base-300 border">
                        <input type="radio" name="my-accordion-4"/>
                        <div className="collapse-title text-xl font-medium">Q. How does Alpha Cars's money back guarantee work?
                        </div>
                        <div className="collapse-content">
                            <p>At Alpha Cars we are only happy when you’re happy. So if you don't absolutely love your new Alpha Cars car you can return it back within 5 days and upto 300km of running (from the date of delivery) and your complete purchase amount will be refunded back to you within 7-9 working days, no-questions-asked.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Faq;