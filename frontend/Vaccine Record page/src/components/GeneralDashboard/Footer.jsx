import React from 'react';

function Footer() {
    return (
        <footer className="bg-blue-600 text-white py-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Vaccination Services */}
                    <div>
                        <h3 className="font-bold mb-4">VACCINATION SERVICES</h3>
                        <ul className="space-y-2">
                            <li>Register Members</li>
                            <li>Search Vaccination Centers</li>
                            <li>Book Vaccination Slots</li>
                            <li>Manage Appointment</li>
                            <li>Download Certificate</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-bold mb-4">RESOURCES</h3>
                        <ul className="space-y-2">
                            <li>How To Get Vaccinated</li>
                            <li>Overview</li>
                            <li>API Guidelines</li>
                            <li>Open APIs</li>
                            <li>Grievance Guidelines</li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-bold mb-4">SUPPORT</h3>
                        <ul className="space-y-2">
                            <li>Frequently Asked Questions</li>
                            <li>Certificate Corrections</li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="font-bold mb-4">CONTACT US</h3>
                        <ul className="space-y-2">
                            <li>Helpline: +91-11-23978046 (Toll Free - 1075)</li>
                            <li>Technical Helpline: 0120-4783222</li>
                        </ul>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="mt-8 text-center">
                    <p className="text-sm">Copyright © 2024 HealthGuardian. All Rights Reserved.</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <img src="https://www.cowin.gov.in/assets/images/national-health-authority.jpg" alt="NHA Logo" className="h-8" />
                        <img src="https://www.cowin.gov.in/assets/images/undp-logo-vertical.svg" alt="UNDP Logo" className="h-8" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;