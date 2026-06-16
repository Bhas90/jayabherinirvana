import React, { useState, useEffect } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { X } from "lucide-react";

const PopupForm = ({
  show: externalShow,
  onClose: externalOnClose,
  popupTitle = "Get a Call Back",
  submitButtonText = "Submit Your Request",
  leadSource = "Jayabheri The Pinnacle Popup Form",
  onSuccess,
}) => {
  const API_URL = "https://api.jayabheripinnacle.com/home/send-email";

  const [showPopup, setShowPopup] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    agreeTerms: false,
    ip: "unknown",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectName = "Jayabheri The Pinnacle";
  const projectLocation = "Kokapet";
  const websiteDomain = "jayabheripinnacle.com";

  const getUtmParams = () => {
    const params = new URLSearchParams(window.location.search);

    return {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
    };
  };

  const pushToDataLayer = (eventName, extraData = {}) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      project_name: projectName,
      project_location: projectLocation,
      website_domain: websiteDomain,
      lead_source: leadSource,
      page_url: window.location.href,
      ...extraData,
    });
  };

  useEffect(() => {
    axios
      .get("https://api64.ipify.org?format=json")
      .then((res) => {
        setFormData((prev) => ({
          ...prev,
          ip: res.data.ip || "unknown",
        }));
      })
      .catch(() => {
        setFormData((prev) => ({
          ...prev,
          ip: "unknown",
        }));
      });
  }, []);

  useEffect(() => {
    if (typeof externalShow === "undefined") {
      const timer = setTimeout(() => {
        setShowPopup(true);
        pushToDataLayer("jayabheri_popup_visible", {
          form_name: popupTitle,
          popup_trigger: "auto_timer",
        });
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [externalShow, popupTitle]);

  useEffect(() => {
    if (externalShow === true) {
      pushToDataLayer("jayabheri_popup_visible", {
        form_name: popupTitle,
        popup_trigger: "manual_button",
      });
    }
  }, [externalShow, popupTitle]);

  const isShown = typeof externalShow === "boolean" ? externalShow : showPopup;

  const handleClose = () => {
    if (isSubmitting) return;

    pushToDataLayer("jayabheri_popup_closed", {
      form_name: popupTitle,
    });

    setShowPopup(false);

    if (externalOnClose) externalOnClose();
  };

  const closeSuccessPopup = () => {
    setShowSuccess(false);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      mobile: value,
    }));

    setErrors((prev) => ({
      ...prev,
      mobile: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const cleanMobile = formData.mobile.replace(/\D/g, "");

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Invalid email address";
    }

    if (!cleanMobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (cleanMobile.length < 10) {
      newErrors.mobile = "Mobile must be at least 10 digits";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      pushToDataLayer("jayabheri_popup_validation_error", {
        form_name: popupTitle,
        error_fields: Object.keys(newErrors).join(","),
      });
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    pushToDataLayer("jayabheri_submit_clicked", {
      form_name: popupTitle,
      button_text: submitButtonText,
    });

    if (!validateForm()) return;

    setIsSubmitting(true);

    const cleanMobile = formData.mobile.replace(/\D/g, "");
    const utmParams = getUtmParams();

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      mobile: cleanMobile,
      ip: formData.ip || "unknown",
      projectName,
      projectLocation,
      source: leadSource,
      pageUrl: window.location.href,
      ...utmParams,
    };

    try {
      const response = await axios.post(API_URL, payload, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        timeout: 20000,
      });

      if (!response.data?.success) {
        throw new Error(response.data?.message || "Submission failed");
      }

      pushToDataLayer("jayabheri_lead_submitted", {
        form_name: popupTitle,
        button_text: submitButtonText,
        lead_status: "success",
      });

      window.history.pushState({}, "", "?submitted=true");

      setFormData({
        name: "",
        email: "",
        mobile: "",
        agreeTerms: false,
        ip: formData.ip,
      });

      setErrors({});
      setShowPopup(false);

      if (externalOnClose) externalOnClose();
      if (onSuccess) onSuccess();

      setShowSuccess(true);
    } catch (error) {
      pushToDataLayer("jayabheri_popup_submit_failed", {
        form_name: popupTitle,
        button_text: submitButtonText,
        lead_status: "failed",
        error_message:
          error.response?.data?.message ||
          error.response?.data?.error ||
          error?.message ||
          "Submission failed",
      });

      alert(
        error.response?.data?.message ||
          error.response?.data?.error ||
          error?.message ||
          "Submission failed. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isShown && (
        <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4">
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#061f24] to-[#0B5C63] px-6 py-6 text-center">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#061f24] transition"
                aria-label="Close popup"
                type="button"
                disabled={isSubmitting}
              >
                <X size={20} />
              </button>

              <p className="text-[#8ed9df] text-xs uppercase tracking-[3px] font-semibold mb-2">
                Jayabheri The Pinnacle
              </p>

              <h2 className="text-2xl font-serif font-bold text-white">
                {popupTitle}
              </h2>

              <p className="text-white/70 text-sm mt-2">
                Kokapet, Hyderabad
              </p>
            </div>

            <form
              className="p-6 sm:p-8 space-y-4"
              onSubmit={handleSubmit}
              noValidate
            >
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name*"
                  className="w-full h-[48px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0B5C63]"
                  autoComplete="name"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address*"
                  className="w-full h-[48px] px-4 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0B5C63]"
                  autoComplete="email"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <PhoneInput
                  country="in"
                  value={formData.mobile}
                  onChange={handlePhoneChange}
                  disabled={isSubmitting}
                  inputProps={{
                    name: "mobile",
                    required: true,
                    autoComplete: "tel",
                  }}
                  containerClass="!w-full"
                  inputClass="!w-full !h-[48px] !pl-14 !border !border-gray-300 !rounded-xl"
                  buttonClass="!border !border-gray-300 !rounded-l-xl"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>

              <div>
                <label className="flex items-start text-sm text-gray-700">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="mr-2 mt-1"
                    disabled={isSubmitting}
                  />
                  <span>
                    I accept <strong>Terms</strong> and{" "}
                    <strong>Privacy Policy</strong>.
                  </span>
                </label>

                {errors.agreeTerms && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.agreeTerms}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full h-[50px] rounded-xl bg-[#0B5C63] text-white text-base font-semibold hover:bg-[#083E44] transition disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : submitButtonText}
              </button>

              <p className="text-[11px] text-gray-500 text-center leading-relaxed">
                TG RERA No: P02400006797 | Building Permit No:
                001689/BP/HMDA/0359/SKP/2023
              </p>
            </form>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
            <h3 className="text-2xl font-serif font-bold text-[#061f24] mb-3">
              Thank You!
            </h3>

            <p className="text-gray-600 mb-6">
              Your enquiry has been submitted successfully. Our team will
              contact you shortly with Jayabheri The Pinnacle details.
            </p>

            <button
              onClick={closeSuccessPopup}
              className="bg-[#0B5C63] text-white px-8 py-3 rounded-full hover:bg-[#083E44]"
              type="button"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;