import { Check, X } from "lucide-react";
const PasswordCriteria = ({ password }) => {
    const criteria = [
        {
            label: "Atleast 6 characters",
            met: password.length > 6,
        },
        {
            label: "Contains uppercase letter",
            met: /[A-Z]/.test(password),
        },
        {
            label: "Contains lowercase letter",
            met: /[a-z]/.test(password),
        },
        {
            label: "Contains a number",
            met: /\d/.test(password),
        },
        {
            label: "Contains special character",
            met: /[^A-Za-z0-9]/.test(password),
        },
    ];
    return (
        <div className="mt-2 space-y-1">
            {criteria.map((item) => {
                return (
                    <div key={item.label} className="flex items-center text-xs">
                        {item.met ? (
                            <Check className="size-4 text-green-500 mr-2" />
                        ) : (
                            <X className="size-4 text-gray-500 mr-2" />
                        )}
                        <span
                            className={
                                item.met ? "text-green-500" : "text-gray-500"
                            }
                        >
                            {item.label}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
const PasswordStrengthMeter = ({ password }) => {
    const getStrength = (pass) => {
        let strength = 0;
        if (pass.length >= 6) strength++;
        if (pass.match(/[A-Z]/) && pass.match(/[a-z]/)) strength++;
        if (pass.match(/\d/)) strength++;
        if (pass.match(/[^A-Za-z0-9]/)) strength++;
        return strength;
    };
    const strength = getStrength(password);
    const getStrengthText = (strength) => {
        switch (strength) {
            case 0:
                return "Very Weak";
            case 1:
                return "Weak";
            case 2:
                return "Fair";
            case 3:
                return "Good";
            default:
                return "Strong";
        }
    };
    const getColor = (strength) => {
        switch (strength) {
            case 0:
                return "bg-red-500";
            case 1:
                return "bg-red-400";
            case 2:
                return "bg-yellow-500";
            case 3:
                return "bg-yellow-400";
            default:
                return "bg-green-500";
        }
    };
    return (
        <div className="mt-2">
            <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-400">Password Strength</span>
                <span className="text-xs text-gray-400">
                    {getStrengthText(strength)}
                </span>
            </div>
            <div className="flex space-x-1">
                {[1, 2, 3, 4].map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 w-1/4 rounded-full transition-colors duration-300 ${
                            index < strength
                                ? getColor(strength)
                                : "bg-gray-600"
                        }`}
                    />
                ))}
            </div>
            <PasswordCriteria password={password} />
        </div>
    );
};
export default PasswordStrengthMeter;