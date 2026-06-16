import React, { useEffect, useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { MapPinned, X } from "lucide-react";

const ConnectivitySection = () => {
  const API_URL = "https://api.jayabheripinnacle.com/home/send-email";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    agreeTerms: false,
    ip: "unknown",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const projectName = "Jayabheri The Pinnacle";
  const projectLocation = "Kokapet";
  const websiteDomain = "jayabheripinnacle.com";

  const pushToDataLayer = (eventName, extraData = {}) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      project_name: projectName,
      project_location: projectLocation,
      website_domain: websiteDomain,
      lead_source: "Connectivity Section Form",
      page_url: window.location.href,
      ...extraData,
    });
  };

  const getUtmParams = () => {
    const params = new URLSearchParams(window.location.search);

    return {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
    };
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

    pushToDataLayer("jayabheri_connectivity_section_view");
  }, []);

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

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

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
      pushToDataLayer("jayabheri_connectivity_form_validation_error", {
        error_fields: Object.keys(newErrors).join(","),
      });
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    pushToDataLayer("jayabheri_connectivity_submit_clicked");

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const cleanMobile = formData.mobile.replace(/\D/g, "");
      const utmParams = getUtmParams();

      const response = await axios.post(
        API_URL,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          mobile: cleanMobile,
          ip: formData.ip || "unknown",
          projectName,
          projectLocation,
          source: "Connectivity Section Form",
          pageUrl: window.location.href,
          ...utmParams,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          timeout: 20000,
        }
      );

      if (!response.data?.success) {
        throw new Error(response.data?.message || "Submission failed");
      }

      pushToDataLayer("jayabheri_connectivity_lead_success", {
        lead_status: "success",
      });

      setShowSuccess(true);

      setFormData({
        name: "",
        email: "",
        mobile: "",
        agreeTerms: false,
        ip: formData.ip,
      });

      setErrors({});
    } catch (error) {
      pushToDataLayer("jayabheri_connectivity_lead_failed", {
        lead_status: "failed",
        error_message:
          error.response?.data?.message ||
          error.response?.data?.error ||
          error.message ||
          "Submission failed",
      });

      alert(
        error.response?.data?.message ||
          error.response?.data?.error ||
          error.message ||
          "Submission failed. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section
        id="connectivity"
        className="relative bg-gradient-to-b from-[#f4f9fa] via-white to-[#edf7f8] py-16 md:py-20 px-4 overflow-hidden"
      >
        <div className="absolute -top-28 -left-28 w-80 h-80 bg-[#0B5C63]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-[#0B5C63]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[4px] text-[#0B5C63] font-semibold mb-3">
              Location Advantage
            </p>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#061f24]">
              Connected To Everything
              <br />
              <span className="text-[#0B5C63]">That Matters</span>
            </h2>

            <div className="w-24 h-[3px] bg-[#0B5C63] mx-auto mt-5 rounded-full"></div>

            <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-600 mt-6 leading-relaxed">
              Jayabheri The Pinnacle at Kokapet offers excellent connectivity
              to Financial District, Gachibowli, HITEC City, ORR, schools,
              hospitals, corporate hubs and premium lifestyle destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#0B5C63]/10 bg-white min-h-[420px]">
              <div className="bg-[#061f24] px-5 py-4 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#8ed9df]/15 flex items-center justify-center">
                  <MapPinned className="w-6 h-6 text-[#8ed9df]" />
                </div>

                <div>
                  <h3 className="text-white text-lg font-semibold">
                    Jayabheri The Pinnacle
                  </h3>
                  <p className="text-white/70 text-sm">
                    Kokapet, Hyderabad, Telangana
                  </p>
                </div>
              </div>

              <iframe
                title="Jayabheri The Pinnacle Kokapet Location Map"
                src="https://www.google.com/maps?q=Jayabheri%20The%20Pinnacle%20Kokapet%20Hyderabad&output=embed"
                className="w-full h-[320px] md:h-[420px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-[#0B5C63]/10 p-6 md:p-8">
              <p className="text-[#0B5C63] text-xs uppercase tracking-[3px] font-semibold mb-2">
                Enquire Now
              </p>

              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#061f24]">
                Request Callback
              </h3>

              <p className="text-sm text-gray-600 mt-2 mb-6">
                Get brochure, price details, floor plans and site visit
                assistance for Jayabheri The Pinnacle.
              </p>

              <form className="space-y-4" onSubmit={handleFormSubmit} noValidate>
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
                    containerClass="!w-full"
                    inputClass="!w-full !h-[48px] !pl-14 !border !border-gray-300 !rounded-xl"
                    buttonClass="!border !border-gray-300 !rounded-l-xl"
                    inputProps={{
                      name: "mobile",
                      required: true,
                      autoComplete: "tel",
                    }}
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
                  disabled={isSubmitting}
                  className="w-full h-[50px] rounded-xl bg-[#0B5C63] text-white text-base font-semibold hover:bg-[#083E44] transition disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Submit Your Request"}
                </button>
              </form>

              <p className="text-[11px] text-gray-500 mt-5 leading-relaxed">
                TG RERA No: P02400006797 | Building Permit No:
                001689/BP/HMDA/0359/SKP/2023
              </p>
            </div>
          </div>
        </div>
      </section>

      {showSuccess && (
        <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4">
          <div className="relative bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f4f9fa] flex items-center justify-center text-[#061f24] hover:bg-[#8ed9df]"
              type="button"
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl font-bold text-[#061f24] mb-3">
              Thank You!
            </h3>

            <p className="text-gray-600 mb-6">
              Your enquiry has been submitted successfully. Our team will
              contact you shortly with Jayabheri The Pinnacle details.
            </p>

            <button
              onClick={() => setShowSuccess(false)}
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

export default ConnectivitySection;