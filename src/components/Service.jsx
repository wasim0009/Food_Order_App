import React from 'react';

const Services = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto">
                <h1 className="text-3xl font-semibold text-center mb-8">Our Services</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Service Card 1 */}
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Online Ordering</h2>
                        <p className="text-gray-600">
                            Convenient online food ordering system to satisfy your cravings. Order your favorite dishes with just a few clicks.
                        </p>
                    </div>

                    {/* Service Card 2 */}
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Customizable Menu</h2>
                        <p className="text-gray-600">
                            Explore a wide variety of dishes and customize your orders according to your preferences. Create the perfect meal for you.
                        </p>
                    </div>

                    {/* Service Card 3 */}
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Delivery or Pickup</h2>
                        <p className="text-gray-600">
                            Choose between convenient delivery to your doorstep or quick pickup. The choice is yours for a hassle-free experience.
                        </p>
                    </div>

                    {/* You can add more service cards here as needed */}
                </div>
            </div>
        </div>
    );
};

export default Services;
