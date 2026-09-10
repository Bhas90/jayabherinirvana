import React, { useEffect, useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { MapPinned, X } from "lucide-react";

const ConnectivitySection = () => {
  const API_URL =
    "https://api.jayabherinirvana.in/home/send-email";

  const projectName = "Jayabheri The Nirvana";
  const projectLocation = "Financial District, Gachibowli";
  const websiteDomain = "jayabherinirvana.in";
  const leadSource = "Jayabheri The Nirvana Connectivity Form";

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

  /* ===============================
     DATA LAYER
  =============================== */

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

  /* ===============================
     UTM PARAMETERS
  =============================== */

  const getUtmParams = () => {
    const params = new URLSearchParams(window.location.search);

    return {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      gclid: params.get("gclid") || "",
    };
  };

  /* ===============================
     INITIAL LOAD
  =============================== */

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

    pushToDataLayer(
      "jayabheri_nirvana_connectivity_section_view"
    );
  }, []);

  /* ===============================
     INPUT HANDLERS
  =============================== */

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

  /* ===============================
     VALIDATION
  =============================== */

  const validateForm = () => {
    const newErrors = {};

    const cleanMobile = formData.mobile.replace(/\D/g, "");

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email.trim()
      )
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!cleanMobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (cleanMobile.length < 10) {
      newErrors.mobile =
        "Mobile must be at least 10 digits";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms =
        "You must agree to the terms";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      pushToDataLayer(
        "jayabheri_nirvana_connectivity_form_validation_error",
        {
          error_fields:
            Object.keys(newErrors).join(","),
        }
      );
    }

    return Object.keys(newErrors).length === 0;
  };

  /* ===============================
     FORM SUBMIT
  =============================== */

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    pushToDataLayer(
      "jayabheri_nirvana_connectivity_submit_clicked"
    );

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const cleanMobile =
        formData.mobile.replace(/\D/g, "");

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

          source: leadSource,

          pageUrl: window.location.href,

          websiteDomain,

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
        throw new Error(
          response.data?.message ||
            "Submission failed"
        );
      }

      pushToDataLayer(
        "jayabheri_nirvana_lead_submitted",
        {
          form_name:
            "Connectivity Section Form",
          lead_status: "success",
          lead_type: "Callback Request",
        }
      );

      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?submitted=true`
      );

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
      pushToDataLayer(
        "jayabheri_nirvana_connectivity_lead_failed",
        {
          lead_status: "failed",

          error_message:
            error.response?.data?.message ||
            error.response?.data?.error ||
            error.message ||
            "Submission failed",
        }
      );

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
        className="
          relative
          bg-gradient-to-br
          from-[#FFF7F7]
          via-white
          to-[#FDEBED]
          py-16
          md:py-24
          px-4
          overflow-hidden
        "
      >
        {/* Background Pattern */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.04]
            bg-[radial-gradient(circle_at_top_left,#000_1px,transparent_1px)]
            [background-size:24px_24px]
          "
        />

        {/* Decorative Glow */}

        <div
          className="
            absolute
            -top-32
            -right-32
            w-96
            h-96
            bg-[#E43E4C]/15
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-32
            -left-32
            w-96
            h-96
            bg-[#7D1F29]/10
            rounded-full
            blur-3xl
          "
        />

        <div className="relative max-w-7xl mx-auto">

          {/* ===============================
              SECTION HEADER
          =============================== */}

          <div className="text-center mb-12">

            <p
              className="
                text-[#E43E4C]
                text-sm
                uppercase
                tracking-[4px]
                font-semibold
                mb-3
              "
            >
              Prime Location
            </p>

            <h2
              className="
                text-3xl
                md:text-5xl
                font-serif
                font-bold
                text-[#111827]
              "
            >
              Well Connected
              <br />

              <span className="text-[#E43E4C]">
                To Hyderabad&apos;s Key Destinations
              </span>
            </h2>

            <div
              className="
                w-24
                h-[3px]
                bg-[#E43E4C]
                mx-auto
                mt-5
                rounded-full
              "
            />

            <p
              className="
                max-w-3xl
                mx-auto
                text-sm
                md:text-base
                text-gray-600
                mt-6
                leading-relaxed
              "
            >
              Jayabheri The Nirvana is strategically
              located in Hyderabad&apos;s Financial
              District, approximately 1.6 km from Wipro
              Junction on Q-City Road and adjacent to
              Jayabheri Four Seasons, offering convenient
              access to major business, education,
              healthcare and lifestyle destinations.
            </p>
          </div>

          {/* ===============================
              MAP + FORM
          =============================== */}

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-8
              items-stretch
            "
          >

            {/* LOCATION MAP */}

            <div
              className="
                rounded-3xl
                overflow-hidden
                shadow-xl
                border
                border-[#E43E4C]/20
                bg-white
              "
            >

              {/* Map Header */}

              <div
                className="
                  bg-gradient-to-r
                  from-[#161012]
                  to-[#2A171A]
                  px-5
                  py-4
                  flex
                  items-center
                  gap-3
                "
              >

                <div
                  className="
                    w-11
                    h-11
                    rounded-full
                    bg-[#E43E4C]/15
                    flex
                    items-center
                    justify-center
                  "
                >
                  <MapPinned
                    className="
                      w-6
                      h-6
                      text-[#E43E4C]
                    "
                  />
                </div>

                <div>
                  <h3
                    className="
                      text-white
                      text-lg
                      font-semibold
                    "
                  >
                    Jayabheri The Nirvana
                  </h3>

                  <p
                    className="
                      text-white/70
                      text-sm
                    "
                  >
                    Financial District, Hyderabad
                  </p>
                </div>
              </div>

              {/* Project Location Map */}

              <div
                className="
                  relative
                  bg-white
                  min-h-[320px]
                  md:min-h-[420px]
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                "
              >
                <img
                  src="/nirvana-map.png"
                  alt="Jayabheri The Nirvana location map near Wipro Junction and Financial District Hyderabad"
                  className="
                    w-full
                    h-[320px]
                    md:h-[420px]
                    object-contain
                    p-2
                  "
                  loading="lazy"
                />
              </div>
            </div>

            {/* ===============================
                ENQUIRY FORM
            =============================== */}

            <div
              className="
                bg-white
                rounded-3xl
                shadow-xl
                border
                border-[#E43E4C]/20
                p-6
                md:p-8
              "
            >

              <p
                className="
                  text-[#E43E4C]
                  text-xs
                  uppercase
                  tracking-[3px]
                  font-semibold
                  mb-2
                "
              >
                Enquire Now
              </p>

              <h3
                className="
                  text-2xl
                  md:text-3xl
                  font-serif
                  font-bold
                  text-[#111827]
                "
              >
                Request a Call Back
              </h3>

              <p
                className="
                  text-sm
                  text-gray-600
                  mt-2
                  mb-6
                "
              >
                Get the latest pricing, brochure,
                floor plans, unit availability and
                site visit assistance for Jayabheri
                The Nirvana.
              </p>

              <form
                className="space-y-4"
                onSubmit={handleFormSubmit}
                noValidate
              >

                {/* NAME */}

                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name*"
                    className="
                      w-full
                      h-[48px]
                      px-4
                      border
                      border-gray-300
                      bg-white
                      text-[#111827]
                      placeholder:text-gray-400
                      rounded-xl
                      focus:outline-none
                      focus:border-[#E43E4C]
                    "
                    autoComplete="name"
                    disabled={isSubmitting}
                  />

                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* EMAIL */}

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address*"
                    className="
                      w-full
                      h-[48px]
                      px-4
                      border
                      border-gray-300
                      bg-white
                      text-[#111827]
                      placeholder:text-gray-400
                      rounded-xl
                      focus:outline-none
                      focus:border-[#E43E4C]
                    "
                    autoComplete="email"
                    disabled={isSubmitting}
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* PHONE */}

                <div>
                  <PhoneInput
                    country="in"
                    value={formData.mobile}
                    onChange={handlePhoneChange}
                    disabled={isSubmitting}
                    containerClass="!w-full"
                    inputClass="
                      !w-full
                      !h-[48px]
                      !pl-14
                      !border
                      !border-gray-300
                      !bg-white
                      !text-[#111827]
                      !rounded-xl
                    "
                    buttonClass="
                      !border
                      !border-gray-300
                      !bg-white
                      !rounded-l-xl
                    "
                    inputProps={{
                      name: "mobile",
                      required: true,
                      autoComplete: "tel",
                    }}
                  />

                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.mobile}
                    </p>
                  )}
                </div>

                {/* TERMS */}

                <div>
                  <label
                    className="
                      flex
                      items-start
                      text-sm
                      text-gray-600
                    "
                  >
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      className="
                        mr-2
                        mt-1
                        accent-[#E43E4C]
                      "
                      disabled={isSubmitting}
                    />

                    <span>
                      I accept{" "}
                      <strong>Terms</strong>{" "}
                      and{" "}
                      <strong>
                        Privacy Policy
                      </strong>
                      .
                    </span>
                  </label>

                  {errors.agreeTerms && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.agreeTerms}
                    </p>
                  )}
                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full
                    h-[50px]
                    rounded-xl
                    bg-[#E43E4C]
                    text-white
                    text-base
                    font-semibold
                    hover:bg-[#C9323F]
                    transition
                    disabled:opacity-60
                  "
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Submit Enquiry"}
                </button>
              </form>

              {/* RERA */}

              <p
                className="
                  text-[11px]
                  text-gray-500
                  mt-5
                  leading-relaxed
                "
              >
                TS RERA No: P02400003566
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================
          SUCCESS POPUP
      =============================== */}

      {showSuccess && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            bg-black/75
            flex
            items-center
            justify-center
            px-4
          "
        >
          <div
            className="
              relative
              bg-white
              rounded-3xl
              p-8
              max-w-md
              w-full
              text-center
              shadow-2xl
            "
          >

            <button
              onClick={() =>
                setShowSuccess(false)
              }
              className="
                absolute
                top-4
                right-4
                w-9
                h-9
                rounded-full
                bg-[#FFF1F2]
                flex
                items-center
                justify-center
                text-[#111111]
                hover:bg-[#E43E4C]
                hover:text-white
                transition
              "
              type="button"
            >
              <X size={20} />
            </button>

            <h3
              className="
                text-2xl
                font-bold
                text-[#111111]
                mb-3
              "
            >
              Thank You!
            </h3>

            <p
              className="
                text-gray-600
                mb-6
                leading-relaxed
              "
            >
              Your enquiry has been submitted
              successfully. Our team will contact you
              shortly with Jayabheri The Nirvana
              pricing, brochure, floor plans,
              availability and site visit details.
            </p>

            <button
              onClick={() =>
                setShowSuccess(false)
              }
              className="
                bg-[#E43E4C]
                text-white
                px-8
                py-3
                rounded-full
                hover:bg-[#C9323F]
                transition
              "
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