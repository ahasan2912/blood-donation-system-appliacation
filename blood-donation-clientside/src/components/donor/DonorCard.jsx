import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhoneAlt, FaUser, FaCalendar } from 'react-icons/fa'

const DonorCard = ({ donor, index }) => {
  const { name, bloodType, city, lastDonation, contactNumber, donationCount, isAvailable } = donor
  
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-800">{name}</h3>
            <div className="flex items-center text-gray-600 mt-1">
              <FaMapMarkerAlt className="mr-1 text-primary-500" />
              <span>{city}</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className={`text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center ${
              isAvailable ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-500'
            }`}>
              {bloodType}
            </div>
            <span className={`text-xs mt-1 font-medium px-2 py-0.5 rounded-full ${
              isAvailable 
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-600'
            }`}>
              {isAvailable ? 'Available' : 'Unavailable'}
            </span>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center text-gray-600">
              <FaUser className="mr-2 text-red-500" />
              <span>{donationCount} donation{donationCount !== 1 ? 's' : ''}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaCalendar className="mr-2 text-red-500" />
              <span>{lastDonation}</span>
            </div>
          </div>
        </div>
        
        {isAvailable && (
          <div className="mt-5">
            <button 
              className="btn bg-red-500 w-full text-white py-6 rounded-lg"
              onClick={() => window.alert(`Contacting ${name} at ${contactNumber}`)}
            >
              <FaPhoneAlt className="mr-2" /> Contact
            </button>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default DonorCard