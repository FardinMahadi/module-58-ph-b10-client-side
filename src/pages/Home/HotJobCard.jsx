import React from "react";
import { AiOutlineCalendar, AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign, FaMoneyBills } from "react-icons/fa6";
import { MdWorkOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    responsibilities,
    status,
    hr_email,
    hr_name,
  } = job;

  return (
    <div className="card bg-gray-800 shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105">
      <div className="p-6">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={company_logo}
            className="w-16 h-16 rounded-full object-cover border-2"
            alt={company}
          />
          <div>
            <h4 className="text-2xl font-bold">{company}</h4>
            <p className="flex items-center gap-2">
              <CiLocationOn className="text-lg" />
              {location}
            </p>
            <p className="flex items-center gap-2">
              <MdWorkOutline className="text-lg" />
              {jobType} • {category}
            </p>
          </div>
        </div>

        {/* Job Details */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            {title}
            <span
              className={`badge ml-2 ${
                status === "new" ? "badge-success" : "badge-info"
              }`}
            >
              {status.toUpperCase()}
            </span>
          </h2>
          <p className="mt-2">{description}</p>
        </div>

        {/* Requirements */}
        <div className="mb-4 flex flex-wrap gap-2">
          {requirements.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 px-4 py-2 rounded-md hover:bg-gray-950"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Salary & Deadline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="text-lg font-semibold flex items-center flex-wrap">
              Salary Range:{" "}
              <p className="flex items-center">
                <FaDollarSign /> {salaryRange.min} - {salaryRange.max}{" "}
                {salaryRange.currency}
              </p>
            </h3>
          </div>
        </div>

        {/* Apply Button */}
        <div className="card-actions justify-end">
          <Link
            to={`/jobs/${_id}`}
            className="btn px-6 py-3 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Apply
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
