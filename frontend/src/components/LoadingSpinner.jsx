import { motion } from "framer-motion";
function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 glex item-center justify-center relative overflow-hidden">
            <motion.div
                className="w-16 h-16 border-4 border-t-4 mx-auto border-t-green-500 border-green-200 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            ></motion.div>
        </div>
    );
}

export default LoadingSpinner;
