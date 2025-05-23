import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'

const BloodRequestForm = () => {

    const [formData, setFormData] = useState({
        patientName: '',
        age: '',
        bloodType: '',
        hospital: '',
        city: '',
        urgency: 'normal',
        unitsNeeded: 1,
        contactName: '',
        contactPhone: '',
        contactEmail: '',
        additionalInfo: ''
    })

    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})

    const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        // Clear error when field is edited
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const validate = () => {
        const newErrors = {}

        // Required fields
        const requiredFields = ['patientName', 'age', 'bloodType', 'hospital', 'city', 'contactName', 'contactPhone']
        requiredFields.forEach(field => {
            if (!formData[field]) {
                newErrors[field] = 'This field is required'
            }
        })

        // Email validation
        if (formData.contactEmail && !/\S+@\S+\.\S+/.test(formData.contactEmail)) {
            newErrors.contactEmail = 'Email is invalid'
        }

        // Phone validation
        if (formData.contactPhone && !/^\d{10}$/.test(formData.contactPhone.replace(/\D/g, ''))) {
            newErrors.contactPhone = 'Phone number must be 10 digits'
        }

        // Age validation
        if (formData.age && (isNaN(formData.age) || formData.age < 0 || formData.age > 120)) {
            newErrors.age = 'Age must be between 0 and 120'
        }

        // Units needed validation
        if (formData.unitsNeeded < 1) {
            newErrors.unitsNeeded = 'At least 1 unit is required'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            // In a real app, this would send data to a server
            console.log('Form submitted:', formData)
            setSubmitted(true)
            // Reset form
            setFormData({
                patientName: '',
                age: '',
                bloodType: '',
                hospital: '',
                city: '',
                urgency: 'normal',
                unitsNeeded: 1,
                contactName: '',
                contactPhone: '',
                contactEmail: '',
                additionalInfo: ''
            })
        }
    }

    // framer-motion

    const formVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    const successVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 }
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="py-12 md:py-16">
            <h1 className="text-4xl font-bold text-red-600 text-center mt-8">Request Blood Donation</h1>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8 mt-10 border border-red-500">
                {submitted ? (
                    <motion.div
                        className="text-center py-12"
                        variants={successVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
                            <FaCheck className="text-white text-2xl" />
                        </div>
                        <h2 className="text-2xl font-bold text-green-600 mb-4">Request Submitted Successfully!</h2>
                        <p className="text-gray-700 mb-6">
                            Your blood request has been received. Our team will review it and connect with potential donors.
                            We&apos;ll contact you soon with updates.
                        </p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="btn btn-red-500"
                        >
                            Submit Another Request
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        onSubmit={handleSubmit}
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Patient Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <motion.div className="flex flex-col gap-2 mb-4" variants={itemVariants}>
                                <label className="font-medium text-neutral-700">Patient Name*</label>
                                <input
                                    type="text"
                                    name="patientName"
                                    value={formData.patientName}
                                    onChange={handleChange}
                                    className={`input input-bordered w-full py-6 rounded-md ${errors.patientName ? 'border-red-500' : ''}`}
                                    placeholder="Full name of patient"
                                />
                                {errors.patientName && <span className="text-red-500 text-sm mt-1">{errors.patientName}</span>}
                            </motion.div>

                            <motion.div className="flex flex-col gap-2 mb-4" variants={itemVariants}>
                                <label className="font-medium text-neutral-700">Age*</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className={`input input-bordered w-full py-6 rounded-md ${errors.age ? 'border-red-500' : ''}`}
                                    placeholder="Patient's age"
                                />
                                {errors.age && <span className="text-red-500 text-sm mt-1">{errors.age}</span>}
                            </motion.div>

                            <motion.div className="flex flex-col gap-2 mb-4" variants={itemVariants}>
                                <label className="font-medium text-neutral-700">Blood Type Required*</label>
                                <select
                                    name="bloodType"
                                    value={formData.bloodType}
                                    onChange={handleChange}
                                    className={` border border-gray-300 text-neutral-700 w-full py-3 rounded-md px-2 ${errors.bloodType ? 'border-red-500' : ''}`}
                                >
                                    <option value="">Select blood type</option>
                                    {bloodTypes.map(type => (
                                        <option key={type} value={type}>{type}</option>
                                    ))}
                                </select>
                                {errors.bloodType && <span className="text-red-500 text-sm mt-1">{errors.bloodType}</span>}
                            </motion.div>

                            <motion.div className="flex flex-col gap-2 mb-4" variants={itemVariants}>
                                <label className="font-medium text-neutral-700">Units Needed*</label>
                                <input
                                    type="number"
                                    name="unitsNeeded"
                                    value={formData.unitsNeeded}
                                    onChange={handleChange}
                                    min="1"
                                    className={`input input-bordered w-full py-6 rounded-md${errors.unitsNeeded ? 'border-red-500' : ''}`}
                                />
                                {errors.unitsNeeded && <span className="text-red-500 text-sm mt-1">{errors.unitsNeeded}</span>}
                            </motion.div>

                            <motion.div className="flex flex-col gap-2 mb-4" variants={itemVariants}>
                                <label className="font-medium text-neutral-700">Hospital/Clinic Name*</label>
                                <input
                                    type="text"
                                    name="hospital"
                                    value={formData.hospital}
                                    onChange={handleChange}
                                    className={`input input-bordered w-full py-6 rounded-md ${errors.hospital ? 'border-red-500' : ''}`}
                                    placeholder="Name of the medical facility"
                                />
                                {errors.hospital && <span className="text-red-500 text-sm mt-1">{errors.hospital}</span>}
                            </motion.div>

                            <motion.div className="flex flex-col gap-2 mb-4" variants={itemVariants}>
                                <label className="font-medium text-neutral-700">City*</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className={`input input-bordered w-full py-6 rounded-md ${errors.city ? 'border-red-500' : ''}`}
                                    placeholder="City where blood is needed"
                                />
                                {errors.city && <span className="text-red-500 text-sm mt-1">{errors.city}</span>}
                            </motion.div>

                            <motion.div className="flex flex-col gap-2 mb-4" variants={itemVariants}>
                                <label className="font-medium text-neutral-700">Urgency Level*</label>
                                <select
                                    name="urgency"
                                    value={formData.urgency}
                                    onChange={handleChange}
                                    className="border border-gray-300 text-neutral-700 w-full py-3 rounded-md px-2"
                                >
                                    <option value="critical">Critical (Within hours)</option>
                                    <option value="urgent">Urgent (Within 24 hours)</option>
                                    <option value="normal" defaultChecked>Standard (2-3 days)</option>
                                    <option value="planned">Planned (Scheduled procedure)</option>
                                </select>
                            </motion.div>
                        </div>

                        <h2 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <motion.div className="flex flex-col gap-2" variants={itemVariants}>
                                <label className="font-medium text-neutral-700">Contact Person Name*</label>
                                <input
                                    type="text"
                                    name="contactName"
                                    value={formData.contactName}
                                    onChange={handleChange}
                                    className={`input input-bordered w-full py-6 rounded-md ${errors.contactName ? 'border-red-500' : ''}`}
                                    placeholder="Name of contact person"
                                />
                                {errors.contactName && <span className="text-red-500 text-sm mt-1">{errors.contactName}</span>}
                            </motion.div>

                            <motion.div className="flex flex-col gap-2" variants={itemVariants}>
                                <label className="font-medium text-neutral-700">Phone Number*</label>
                                <input
                                    type="tel"
                                    name="contactPhone"
                                    value={formData.contactPhone}
                                    onChange={handleChange}
                                    className={`input input-bordered w-full py-6 rounded-md ${errors.contactPhone ? 'border-red-500' : ''}`}
                                    placeholder="Contact phone number"
                                />
                                {errors.contactPhone && <span className="text-red-500 text-sm mt-1">{errors.contactPhone}</span>}
                            </motion.div>

                            <motion.div className="flex flex-col gap-2 md:col-span-2" variants={itemVariants}>
                                <label className="font-medium text-neutral-700">Email Address</label>
                                <input
                                    type="email"
                                    name="contactEmail"
                                    value={formData.contactEmail}
                                    onChange={handleChange}
                                    className={`input input-bordered w-full py-6 rounded-md ${errors.contactEmail ? 'border-red-500' : ''}`}
                                    placeholder="Contact email address"
                                />
                                {errors.contactEmail && <span className="text-red-500 text-sm mt-1">{errors.contactEmail}</span>}
                            </motion.div>
                        </div>

                        <motion.div className="flex flex-col gap-2 mb-6" variants={itemVariants}>
                            <label className="font-medium text-neutral-700">Additional Information</label>
                            <textarea
                                name="additionalInfo"
                                value={formData.additionalInfo}
                                onChange={handleChange}
                                className="input input-bordered w-full py-6 rounded-md h-32"
                                placeholder="Any additional details that may be helpful"
                            ></textarea>
                        </motion.div>

                        <motion.div
                            className="flex justify-center"
                            variants={itemVariants}
                        >
                            <button
                                type="submit"
                                className="btn bg-red-500 text-white px-8 py-6 w-full"
                            >
                                Submit Blood Request
                            </button>
                        </motion.div>

                        <motion.p
                            className="text-center text-sm text-gray-500 mt-4"
                            variants={itemVariants}
                        >
                            Fields marked with * are required
                        </motion.p>
                    </motion.form>
                )}
            </div>
        </div>
    );
};

export default BloodRequestForm;