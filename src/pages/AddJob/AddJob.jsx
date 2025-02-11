import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddJob = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Job has been added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="mx-10">
      <h2 className="text-3xl">Post a new job</h2>
      <form
        onSubmit={handleAddJob}
        className="card-body mx-auto my-10 border rounded-md"
      >
        {/* Job title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="input input-bordered"
            required
          />
        </div>

        {/* Job Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Job Location"
            className="input input-bordered"
            required
          />
        </div>

        <div className="flex flex-wrap gap-4">
          {/* Job Type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Type</span>
            </label>
            <select
              name="jobType"
              defaultValue="Pick a job type"
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled>Pick a job type</option>
              <option>Full-time</option>
              <option>Intern</option>
              <option>Part-time</option>
            </select>
          </div>

          {/* Job Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Field</span>
            </label>
            <select
              name="jobField"
              defaultValue="Pick a job field"
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled>Pick a job field</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Teaching</option>
            </select>
          </div>
        </div>

        {/* Salary range */}
        <div>
          <label className="label">
            <span className="label-text">Salary range</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="form-control">
              <input
                type="text"
                name="max"
                placeholder="Max"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="min"
                placeholder="Min"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <select
                name="currency"
                defaultValue="Currency"
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled>Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>INR</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>

          <textarea
            className="textarea textarea-bordered"
            placeholder="Job Description"
            name="description"
          ></textarea>
        </div>

        {/* Company Data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Company Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* Company Logo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo URL</span>
            </label>
            <input
              type="text"
              name="company_logo"
              placeholder="Company Logo URL"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        {/* Requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Job Requirements"
            name="requirements"
          ></textarea>
        </div>

        {/* Responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Job Responsibilities"
            name="responsibilities"
          ></textarea>
        </div>

        {/* HR data */}
        <div className="sm:grid grid-cols-2 gap-4 ">
          {/* HR Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              defaultValue={user?.displayName}
              placeholder="HR Name"
              className="input input-bordered"
              required
            />
          </div>
          {/* HR Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Email</span>
            </label>
            <input
              type="text"
              name="hr_email"
              defaultValue={user?.email}
              placeholder="HR Email"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        {/* Application Deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Application Deadline</span>
          </label>
          <input
            type="date"
            name="applicationDeadline"
            placeholder="Application Deadline"
            className="input input-bordered"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
