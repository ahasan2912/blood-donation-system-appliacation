import { motion } from 'framer-motion'

const AboutBanner = () => {
    return (
        <section className="pt-32 pb-16 bg-gradient-to-br from-red-50 to-red-100 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6823611/pexels-photo-6823611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"
            ></motion.div>
            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h1 className="text-5xl font-bold text-gray-900">About BloodLink</h1>
                    <p className="text-lg text-gray-700 my-6 font-semibold">
                        LifeFlow is a dedicated platform connecting blood donors with those in need. Our mission is to ensure that no life is lost due to blood shortage.
                    </p>
                </motion.div>
            </div>
            {/* Stats */}
            <div className="max-w-7xl mx-auto mt-10 px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { value: "10,000+", label: "Lives Saved" },
                        { value: "5,000+", label: "Registered Donors" },
                        { value: "15,000+", label: "Blood Units Donated" },
                        { value: "200+", label: "Donation Centers" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-lg p-6 shadow-md text-center"
                        >
                            <h3 className="text-4xl font-bold text-red-600 mb-2">{stat.value}</h3>
                            <p className="text-gray-600">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutBanner;