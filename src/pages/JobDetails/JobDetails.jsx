import {
  FaLocationPin,
  FaClock,
  FaDollarSign,
  FaBriefcase,
} from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
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
  } = useLoaderData();

  return (
    <div className="p-8 min-h-screen">
      <div className="max-w-4xl mx-auto rounded-lg shadow-md overflow-hidden">
        {/* Job Header */}
        <div className="p-6 border-b">
          <div className="flex items-center gap-4">
            <img
              src={company_logo}
              alt={`${company} logo`}
              className="w-20 h-20 object-contain rounded-md"
            />
            <div>
              <h2 className="text-3xl font-bold">{title}</h2>
              <p className="text-sm">{company}</p>
            </div>
          </div>
        </div>

        {/* Job Details */}
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-2">
            <FaLocationPin className="text-lg" />
            <p className="text-base">{location}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaBriefcase className="text-lg" />
            <p className="text-base">{jobType}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaDollarSign className="text-lg" />
            <p className="text-base">
              {salaryRange.min} - {salaryRange.max}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-lg" />
            <p className="text-base">
              <strong>Application Deadline: </strong>
              {applicationDeadline}
            </p>
          </div>
          <p>
            <strong>Status: </strong>
            {status}
          </p>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold">Description</h3>
            <p className="mt-2">{description}</p>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="text-lg font-semibold">Responsibilities</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {responsibilities?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-lg font-semibold">Requirements</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {requirements?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="p-4 bg-gray-700 rounded-lg">
            <h3 className="text-lg font-semibold ">Contact Information</h3>
            <p className="mt-2">
              <strong>HR Name: </strong>
              {hr_name}
            </p>
            <p className="mt-1">
              <strong>HR Email: </strong>
              <a
                href={`mailto:${hr_email}`}
                className="text-blue-600 underline"
              >
                {hr_email}
              </a>
            </p>
          </div>
        </div>

        {/* Apply button */}
        <div>
          <Link to={`/jobApply/${_id}`} className="ml-6 mb-6 btn btn-primary">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
