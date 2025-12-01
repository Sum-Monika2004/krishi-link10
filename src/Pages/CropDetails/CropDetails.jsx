import React, { use, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const CropDetails = () => {
  console.log();
  const data = useLoaderData();
  const crop = data.result;

  const navigate = useNavigate();
  const { id } = useParams();
  // const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      interests: {
        userEmail: user.email,
        userName: user.displayName,
        quantity: e.target.quantity.value,
        message: e.target.message.value,
        status: "pending",
      },
    };

    fetch(`http://localhost:3000/crops/${crop._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((d) => {
        toast.success("Successfully added!");
        console.log(d);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-11/12 mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={crop.image}
              alt=""
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {crop.name}
            </h1>

            <div className=" gap-3">
              <div className="text-center font-medium border-2 border-yellow-800 px-1 py-1 rounded-xl w-[100px] mb-2">
                {crop.type}
              </div>

              <div className=" font-medium">{crop.location}</div>
            </div>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {crop.description}
            </p>

            <div className="flex gap-3 mt-6 ">
              {/* <Link className="btn text-white bg-yellow-800  hover:bg-yellow-700">
                Interest
              </Link> */}
              {/* <button
                // onClick={handleInterest}
                className="btn text-white bg-yellow-800  hover:bg-yellow-700"
              >
                Manage Interests
              </button> */}
              {/* <button
                // onClick={handleDlete}
                className="btn  border-gray-300 bg-yellow-800  hover:bg-yellow-700 text-white"
              >
                Delete
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-10/12">
        <div className="card-body p-6 relative ">
          <h2 className="font-bold text-5xl  mb-5 mt-8 text-center">
            Interest
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-4  bg-white p-8 rounded-2xl"
          >
            {/* Quantity Field */}
            <div>
              <label className="label font-medium">Quantity</label>
              <input
                type="text"
                name="quantity"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Estimated quantity"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className="label font-medium"> Message</label>
              <textarea
                name="message"
                required
                rows="3"
                className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
                placeholder="Sent message"
              ></textarea>
            </div>

            {/* Price Field */}
            <div>
              <label className="label font-medium">Total Price</label>
              <input
                type="text"
                name="price"
                required
                className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Total Price"
              />
            </div>

            {/* Submit Button */}

            <button
              type="submit"
              className="btn text-white mt-6 rounded-full bg-yellow-800 hover:bg-yellow-700 "
            >
              Submit Interest
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CropDetails;
