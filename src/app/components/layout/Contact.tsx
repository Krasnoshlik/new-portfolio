"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isMessageFocused, setIsMessageFocused] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const labelVariants = {
    focused: { y: -33, x: -20, scale: 0.8, color: "#B17457", opacity: 1 },
    unfocused: { y: 0, scale: 1, color: "#6b7280", opacity: 0.4 },
  };

  const validateInputs = () => {
    let isValid = true;

    if (name.length <= 4) {
      setNameError(true);
      isValid = false;
    } else {
      setNameError(false);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (message.length <= 30) {
      setMessageError(true);
      isValid = false;
    } else {
      setMessageError(false);
    }

    return isValid;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    validateInputs();
  };

  return (
    <section className="max-w-6xl m-auto h-full flex flex-col justify-center">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-start gap-5 self-center text-black">
          <h2 className="text-3xl font-bold text-white">Contact me</h2>

          <div className="flex gap-5">
            <div className="flex flex-col gap-5">
              {/* Name Input */}
              <label className="relative">
                <motion.span
                  initial="unfocused"
                  animate={isNameFocused ? "focused" : "unfocused"}
                  variants={labelVariants}
                  className="absolute left-2 top-2 pointer-events-none text-gray-500"
                >
                  Enter your name
                </motion.span>
                <input
                  type="text"
                  className={`border p-2 rounded w-[300px] ${
                    nameError ? "border-red-500" : ""
                  }`}
                  onFocus={() => setIsNameFocused(true)}
                  onBlur={(e) => {
                    setIsNameFocused(e.target.value !== "");
                    setName(e.target.value);
                  }}
                />
              </label>

              {/* Email Input */}
              <label className="relative">
                <motion.span
                  initial="unfocused"
                  animate={isEmailFocused ? "focused" : "unfocused"}
                  variants={labelVariants}
                  className="absolute left-2 top-2 pointer-events-none text-gray-500"
                >
                  Enter your email
                </motion.span>
                <input
                  type="text"
                  className={`border p-2 rounded w-[300px] ${
                    emailError ? "border-red-500" : ""
                  }`}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={(e) => {
                    setIsEmailFocused(e.target.value !== "");
                    setEmail(e.target.value);
                  }}
                />
              </label>
            </div>

            <div>
              {nameError && (
                <div className=" relative">
                  <div className=" -bottom-[30px] -left-[15px] absolute w-[10px] h-[10px] bg-red-500 rounded-3xl shadow-white"></div>
                </div>
              )}
              <button className="relative h-full text-gray-500 bg-white hover:text-white overflow-hidden border p-2 rounded-md border-[#B17457] font-medium transition-colors duration-300 group"
              onClick={handleSubmit}
              >
                <span className="relative z-20">Submit</span>
                <span className="absolute inset-0 bg-[#B17457] w-0 h-full transition-all duration-500 group-hover:w-full ease-in-out z-10"></span>
              </button>

              {emailError && (
                <div className=" relative">
                  <div className="  bottom-[17px] -left-[15px] absolute w-[10px] h-[10px] bg-red-500 rounded-3xl shadow-white"></div>
                </div>
              )}

              {messageError && (
                <div className=" relative">
                  <div className=" -bottom-[14px] left-[35px] absolute w-[10px] h-[10px] bg-red-500 rounded-3xl shadow-white"></div>
                </div>
              )}
            </div>
          </div>

          {/* Message Textarea */}
          <label className="relative">
            <motion.span
              initial="unfocused"
              animate={isMessageFocused ? "focused" : "unfocused"}
              variants={labelVariants}
              className="absolute left-2 top-2 pointer-events-none text-gray-500"
            >
              Your message
            </motion.span>
            <textarea
              className={`border p-2 rounded w-[400px] h-[200px] ${
                messageError ? "border-red-500" : ""
              }`}
              onFocus={() => setIsMessageFocused(true)}
              onBlur={(e) => {
                setIsMessageFocused(e.target.value !== "");
                setMessage(e.target.value);
              }}
            />
          </label>
        </div>
      </div>
    </section>
  );
}
