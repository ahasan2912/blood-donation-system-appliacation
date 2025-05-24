import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaSearch } from 'react-icons/fa'
import DonorCard from '../../components/donor/DonorCard';
import FilterBox from '../../components/donor/FilterBox';

const Donors = () => {
    const [donors, setDonors] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(true)
    const [filters, setFilters] = useState({
        bloodTypes: [],
        city: '',
        onlyAvailable: false
    })

    useEffect(() => {
        // Simulate API call with a timeout
        const fetchDonors = async () => {
            setLoading(true)
            // In a real app, this would be an API call
            await new Promise(resolve => setTimeout(resolve, 1000))

            // Mock donor data
            const mockDonors = [
                {
                    id: 1,
                    name: "John Smith",
                    bloodType: "O+",
                    city: "New York",
                    lastDonation: "2 months ago",
                    contactNumber: "+1 555-123-4567",
                    donationCount: 12,
                    isAvailable: true
                },
                {
                    id: 2,
                    name: "Maria Rodriguez",
                    bloodType: "A-",
                    city: "Los Angeles",
                    lastDonation: "5 months ago",
                    contactNumber: "+1 555-234-5678",
                    donationCount: 8,
                    isAvailable: true
                },
                {
                    id: 3,
                    name: "David Chen",
                    bloodType: "B+",
                    city: "Chicago",
                    lastDonation: "1 month ago",
                    contactNumber: "+1 555-345-6789",
                    donationCount: 5,
                    isAvailable: false
                },
                {
                    id: 4,
                    name: "Sarah Johnson",
                    bloodType: "AB+",
                    city: "Boston",
                    lastDonation: "3 months ago",
                    contactNumber: "+1 555-456-7890",
                    donationCount: 15,
                    isAvailable: true
                },
                {
                    id: 5,
                    name: "Michael Williams",
                    bloodType: "O-",
                    city: "San Francisco",
                    lastDonation: "2 weeks ago",
                    contactNumber: "+1 555-567-8901",
                    donationCount: 20,
                    isAvailable: false
                },
                {
                    id: 6,
                    name: "Jennifer Garcia",
                    bloodType: "A+",
                    city: "Dallas",
                    lastDonation: "4 months ago",
                    contactNumber: "+1 555-678-9012",
                    donationCount: 7,
                    isAvailable: true
                },
                {
                    id: 7,
                    name: "Robert Kim",
                    bloodType: "B-",
                    city: "Seattle",
                    lastDonation: "6 months ago",
                    contactNumber: "+1 555-789-0123",
                    donationCount: 3,
                    isAvailable: true
                },
                {
                    id: 8,
                    name: "Emily Davis",
                    bloodType: "AB-",
                    city: "Miami",
                    lastDonation: "5 weeks ago",
                    contactNumber: "+1 555-890-1234",
                    donationCount: 10,
                    isAvailable: true
                },
                {
                    id: 9,
                    name: "James Wilson",
                    bloodType: "O+",
                    city: "New York",
                    lastDonation: "7 months ago",
                    contactNumber: "+1 555-901-2345",
                    donationCount: 4,
                    isAvailable: false
                },
                {
                    id: 10,
                    name: "Lisa Martinez",
                    bloodType: "A+",
                    city: "Phoenix",
                    lastDonation: "2 months ago",
                    contactNumber: "+1 555-012-3456",
                    donationCount: 6,
                    isAvailable: true
                },
                {
                    id: 11,
                    name: "Kevin Brown",
                    bloodType: "B+",
                    city: "Atlanta",
                    lastDonation: "1 month ago",
                    contactNumber: "+1 555-123-4567",
                    donationCount: 9,
                    isAvailable: true
                },
                {
                    id: 12,
                    name: "Michelle Lee",
                    bloodType: "O-",
                    city: "Denver",
                    lastDonation: "3 months ago",
                    contactNumber: "+1 555-234-5678",
                    donationCount: 11,
                    isAvailable: true
                }
            ]

            setDonors(mockDonors)
            setLoading(false)
        }

        fetchDonors()
    }, [])

    const filteredDonors = donors.filter(donor => {
        // Apply search term filter
        const matchesSearch = donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            donor.city.toLowerCase().includes(searchTerm.toLowerCase())

        // Apply blood type filter
        const matchesBloodType = filters.bloodTypes.length === 0 ||
            filters.bloodTypes.includes(donor.bloodType)

        // Apply city filter
        const matchesCity = !filters.city ||
            donor.city.toLowerCase().includes(filters.city.toLowerCase())

        // Apply availability filter
        const matchesAvailability = !filters.onlyAvailable || donor.isAvailable

        return matchesSearch && matchesBloodType && matchesCity && matchesAvailability
    })

    return (
        <div className="my-20 -z-50">
            <div className='bg-red-500 py-14'>
                <h1 className="text-5xl font-bold text-center text-white">Blood Donors Directory</h1>
                <p className="text-center text-lg max-w-3xl mx-auto my-5 text-gray-200">
                    Find compatible blood donors in your area. Contact available donors directly for urgent needs.
                </p>
                <div className="mb-8">
                    <div className="relative max-w-lg mx-auto">
                        <input
                            type="text"
                            placeholder="Search by name or city..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 placeholder:text-lg text-white"
                        />
                        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-100" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 container mx-auto mt-20">
                <div className="lg:col-span-1">
                    <FilterBox filters={filters} setFilters={setFilters} />

                    <motion.div
                        className="bg-red-50 rounded-lg p-4 md:p-6"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-red-700 mb-2">Need blood urgently?</h3>
                        <p className="text-red-800 mb-4 text-sm">
                            If you need blood urgently, submit a formal request through our system to reach all eligible donors.
                        </p>
                        <a href="/blood-request" className="btn bg-red-500 text-white rounded-md py-[20px] w-full">Request Blood</a>
                    </motion.div>
                </div>

                <div className="lg:col-span-3">
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="loader animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
                        </div>
                    ) : filteredDonors.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            {filteredDonors.map((donor, index) => (
                                <DonorCard key={donor.id} donor={donor} index={index} />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            className="bg-gray-50 rounded-lg p-8 text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-lg font-medium text-gray-700 mb-2">No donors found</h3>
                            <p className="text-gray-500">
                                Try adjusting your filters or search term to find more donors.
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Donors;