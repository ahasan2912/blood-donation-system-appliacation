import React from 'react';

const BloodRequestForm = () => {
    return (
        <section id="donor-form" className="section bg-red-500 text-white py-20 px-5 mt-20">
            <div className="container">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Become a Donor?</h2>
                            <p className="text-lg text-primary-100 mb-8 leading-relaxed">
                                Join thousands of donors who are making a difference. Donating blood takes just a few minutes
                                but can save up to three lives. Register today and be a hero!
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Quick and easy registration process
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Convenient scheduling at a center near you
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Safe and professional donation experience
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    Track your donations and impact
                                </li>
                            </ul>
                        </div>
                        {/* Form Data */}
                        <div
                            className="bg-white rounded-xl shadow-lg p-8"
                            data-aos="fade-left"
                        >
                            <h3 className="text-3xl font-semibold text-gray-800 mb-6">Register as a Donor</h3>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name='name'
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 text-gray-500 outline-0"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 text-gray-500 outline-0"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 text-gray-500 outline-0"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
                                    <select
                                        id="bloodType"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                                        required
                                    >
                                        <option value="">Select your blood type</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="unknown">I do not know</option>
                                    </select>
                                </div>

                                <div className="flex items-start">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        className="bg-transparent h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded mt-1"
                                        required
                                    />
                                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                                        I agree to the <a href="#" className="text-red-500 hover:text-red-600 font-semibold">terms and conditions</a> and consent to be contacted about donation opportunities.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
                                >
                                    Register Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BloodRequestForm;