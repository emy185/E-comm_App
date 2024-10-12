import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { FiCreditCard } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { MdOutlineAccountBalance } from "react-icons/md";
import paypal from "../imgs/Screenshot (518).png";
import visa from "../imgs/visaimg.png";

const validateCardNumber = (number) => {
  return /^\d{16}$/.test(number);
};

const validateExpiry = (expiry) => {
  return /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(expiry);
};

const validateCVV = (cvv) => {
  return /^\d{3}$/.test(cvv);
};

function Payment({ onClose }) {
  const [errors, setErrors] = useState({});
  const [selectedMethod, setSelectedMethod] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const steps = [
    { id: 1, label: "1" },
    { id: 2, label: "2" },
    { id: 3, label: "3" },
  ];

  const handleCheckboxChange = (method) => {
    setSelectedMethod(method);
  };

  const handleNext = () => {
    if (currentStep === 2) {
      const newErrors = {};
      if (!validateCardNumber(cardDetails.cardNumber)) {
        newErrors.cardNumber = "Invalid card number.";
      }
      if (!validateExpiry(cardDetails.expiry)) {
        newErrors.expiry = "Invalid expiry date.";
      }
      if (!validateCVV(cardDetails.cvv)) {
        newErrors.cvv = "Invalid CVV.";
      }
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
    }
    if (currentStep < 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleInputChange = (e) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-6 pb-10 px-12">
      <div className="flex justify-between">
        <IoMdArrowBack className="text-[#40BFFF] size-7" onClick={handlePrev} />

        <button
          className="text-[#BCDDFE] text-4xl font-bold pt-2"
          onClick={onClose}
        >
          &times;
        </button>
      </div>

      <h1 className="text-4xl font-medium text-[#40BFFF] text-center">
        Make Payment
      </h1>

      <div className="flex items-center justify-center mt-8">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center">
            <div
              className={`size-10 flex items-center justify-center rounded-full text-white font-bold
            ${currentStep >= step.id ? "bg-[#40BFFF]" : "bg-gray-300"}`}
            >
              {step.label}
            </div>

            {step.id !== 3 && (
              <div className="w-7 border-t-[3px] border-gray-300"></div>
            )}
          </div>
        ))}
      </div>

      <div className="pt-10">
        {currentStep === 1 && (
          <form>
            <div className="flex gap-x-12 gap-y-3 overflow-x-auto">
              <div className="grid gap-y-8">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-[#F6F7F8] rounded-md py-3 pl-3 w-[295px]"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-[#F6F7F8] rounded-md py-3 pl-3 w-[295px]"
                  required
                />

                <div>
                  <h2 className="text-[#40BFFF] text-[18px] font-medium pb-2">
                    Select Method Of Payment
                  </h2>

                  <div
                    className={`flex justify-between py-4 px-3 ${
                      selectedMethod === "credit" ? "bg-[#d6e7fc]" : ""
                    }`}
                  >
                    <label
                      className="flex items-center gap-x-4 text-[#223263] text-[12px] font-bold"
                      htmlFor="credit"
                    >
                      <FiCreditCard className="text-[#40BFFF] size-5" />
                      Credit Card or Debit
                    </label>

                    <input
                      type="radio"
                      className="size-5 appearance-none border-2 border-[#dee1e3] rounded-sm relative custom-checkbox"
                      id="credit"
                      checked={selectedMethod === "credit"}
                      onChange={() => handleCheckboxChange("credit")}
                    />
                  </div>

                  <div
                    className={`flex justify-between py-4 px-3 ${
                      selectedMethod === "paypal" ? "bg-[#d6e7fc]" : ""
                    }`}
                  >
                    <label
                      className="flex items-center gap-x-5 text-[#223263] text-[12px] font-bold"
                      htmlFor="paypal"
                    >
                      <img src={paypal} className="size-4" alt="PayPal" />
                      PayPal
                    </label>

                    <input
                      type="radio"
                      className="size-5 appearance-none border-2 border-[#dee1e3] rounded-sm relative custom-checkbox"
                      id="paypal"
                      checked={selectedMethod === "paypal"}
                      onChange={() => handleCheckboxChange("paypal")}
                    />
                  </div>

                  <div
                    className={`flex justify-between py-4 px-3 ${
                      selectedMethod === "bank-transfer" ? "bg-[#d6e7fc]" : ""
                    }`}
                  >
                    <label
                      className="flex items-center gap-x-4 text-[#223263] text-[12px] font-bold"
                      htmlFor="bank-transfer"
                    >
                      <MdOutlineAccountBalance className="text-[#40BFFF] size-5" />
                      Bank Transfer
                    </label>

                    <input
                      type="radio"
                      className="size-5 appearance-none border-2 border-[#dee1e3] rounded-sm relative custom-checkbox"
                      id="bank-transfer"
                      checked={selectedMethod === "bank-transfer"}
                      onChange={() => handleCheckboxChange("bank-transfer")}
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-y-8">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-[#F6F7F8] rounded-md py-3 pl-3 w-[295px] h-[48px]"
                  required
                />

                <input
                  type="text"
                  placeholder="Address For Delivery"
                  className="bg-[#F6F7F8] rounded-md pt-3 pb-28 pl-3 w-[295px]"
                  required
                />

                <input
                  type="tel"
                  placeholder="Mobile Phone"
                  className="bg-[#F6F7F8] rounded-md py-3 pl-3 w-[295px] h-[48px]"
                  required
                />
              </div>
            </div>

            <div className="mt-auto text-center">
              <button
                type="submit"
                onClick={handleNext}
                className="bg-[#33A0FF] text-white rounded-md px-20 py-4 mt-7 text-xl font-semibold"
              >
                Go To Payment
              </button>
            </div>
          </form>
        )}

        {currentStep === 2 && (
          <div className="relative">
            <div className="flex flex-wrap gap-y-3 items-start justify-between overflow-x-auto">
              <div className="">
                <img src={visa} className="w-[300px]" alt="Visa" />
              </div>

              <div>
                <form className="grid xl:gap-y-8 sm:gap-y-2 relative">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={cardDetails.cardNumber}
                    onChange={handleInputChange}
                    className="bg-[#F6F7F8] rounded-md py-3 pl-3 w-[295px] h-[48px]"
                  />

                  {errors.cardNumber && (
                    <p className="text-red-500 absolute bg-white p-1 border rounded-md top-10">
                      {errors.cardNumber}
                    </p>
                  )}

                  <div className="flex gap-x-3 relative">
                    <input
                      type="text"
                      name="expiry"
                      placeholder="Expiry"
                      value={cardDetails.expiry}
                      onChange={handleInputChange}
                      className="bg-[#F6F7F8] rounded-md py-3 pl-3 w-[142px] h-[48px]"
                    />

                    {errors.expiry && (
                      <p className="text-red-500 absolute bg-white p-1 top-10 border rounded-md">
                        {errors.expiry}
                      </p>
                    )}

                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={cardDetails.cvv}
                      onChange={handleInputChange}
                      className="bg-[#F6F7F8] rounded-md py-3 pl-3 w-[140px] h-[48px]"
                    />

                    {errors.cvv && (
                      <p className="text-red-500 absolute bg-white p-1 top-10 right-12 border rounded-md">
                        {errors.cvv}
                      </p>
                    )}
                  </div>

                  <input
                    type="text"
                    name="holderNumber"
                    placeholder="Holder Number"
                    className="bg-[#F6F7F8] rounded-md py-3 pl-3 w-[295px] h-[48px]"
                  />

                  <div className="flex items-center gap-x-2">
                    <input
                      type="checkbox"
                      className="size-4 appearance-none border-2 border-[#dee1e3] rounded-sm relative custom-checkbox"
                      id="save"
                    />

                    <label
                      htmlFor="save"
                      className="text-[#999999] text-[14px]"
                    >
                      Save this credit card
                    </label>
                  </div>
                </form>
              </div>
            </div>

            <div className="xl:mt-24 text-center">
              <button
                type="button"
                onClick={handleNext}
                className="bg-[#33A0FF] text-white rounded-md px-20 py-4 mt-7 text-xl font-semibold"
              >
                Confirm
              </button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="grid gap-y-10 items-center">
            <div className="flex flex-col justify-center items-center gap-y-5">
              <FaCheck className="text-white size-28 p-10 bg-[#40BFFF] rounded-[3rem]" />

              <span className="text-[#223263] font-bold text-[18px]">
                Success
              </span>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={onClose}
                className="bg-[#33A0FF] text-white rounded-md px-24 py-4 mt-7 text-xl font-semibold"
              >
                Complete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
