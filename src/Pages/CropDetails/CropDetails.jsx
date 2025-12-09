import React, { use, useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const CropDetails = () => {
  const [crop, setCrop] = useState({});
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/crops/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCrop(data.result);
      });
  }, []);

  // const [loading, setLoading] = useState(true);

  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [interests, setInterests] = useState([]);
  useEffect(() => {
    if (crop?.interests) {
      setInterests(crop.interests);
    }
  }, [crop]);

  const handleRejected = (index) => {
    const updated = [...interests];
    updated[index].status = "rejected";
    setInterests(updated);
  };
  const handleAccepted = (index) => {
    const updated = [...interests];
    updated[index].status = "accepted";
    setInterests(updated);
  };

  const handleQuantityChange = (e) => {
    const q = Number(e.target.value);

    setQuantity(q);
    setTotalPrice(q * crop.pricePerUnit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !e.target.quantity.value ||
      !e.target.message.value ||
      e.target.quantity.value < 1
    ) {
      toast.error(
        "Please fill in both quantity and message fields and quantity must have 1"
      );
      return;
    }

    const formData = {
      userEmail: user.email,
      userName: user.displayName,
      quantity: e.target.quantity.value,
      message: e.target.message.value,
      status: "pending",
    };

    fetch(`http://localhost:3000/interests/${crop._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((d) => {
        if (!d.success) {
          Swal.fire({
            icon: "error",
            title: "Oops...",

            text: d.message,
          });
          return;
        }
        toast.success("Successfully added!");
        navigate("/myInterests");
        console.log(d);
      })
      .catch((err) => {
        console.log(err);
      });

    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to undo this action!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, continue!",
    //   cancelButtonText: "Cancel",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     // 👉 Action after confirm
    //     fetch(`http://localhost:3000/interests/${crop._id}`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(formData),
    //     })
    //       .then((res) => res.json())
    //       .then((d) => {
    //         if (!d.success) {
    //           Swal.fire({
    //             icon: "error",
    //             title: "Oops...",
    //             text: d.message,
    //           });
    //           return;
    //         }
    //         toast.success("Successfully added!");
    //         navigate("/");
    //         console.log(d);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //     console.log("User clicked Yes");
    //   }
    // });
  };

  return (
    <div className="max-w-11/12 mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8 ">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={crop.image}
              alt=""
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center  space-y-4 w-full md:w-1/2">
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
            <div className="flex justify-between items-center">
              <div>
                <span className="font-bold">Price :</span> {crop.pricePerUnit} /{" "}
                {crop.unit}
              </div>
              <div>
                <span className="font-bold">Quantity :</span> {crop.quantity}
              </div>
            </div>

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
        {user.email !== crop?.owner?.ownerEmail ? (
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
                  type="number"
                  required
                  name="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
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
                  readOnly
                  value={totalPrice}
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
        ) : (
          <div>
            {" "}
            <h2 className="font-bold text-5xl  mb-5 mt-8 text-center">
              Manage Received Interests
            </h2>
            <table className="w-full ">
              <thead className="bg-white ">
                <tr>
                  <th className="border border-gray-100 p-3">Sl No.</th>
                  <th className="border border-gray-100 p-3">Buyer Name</th>
                  <th className="border border-gray-100 p-3">Quantity</th>
                  <th className="border border-gray-100 p-3">Message</th>
                  <th className="border border-gray-100 p-3">Status</th>
                  <th className="border border-gray-100 p-3">Action</th>
                </tr>
              </thead>

              <tbody className="bg-white ">
                {interests.length > 0 ? (
                  interests.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-100 p-3">
                        {index + 1}
                      </td>
                      <td className="border border-gray-100 p-3">
                        {item.userName}
                      </td>
                      <td className="border border-gray-100 p-3">
                        {item.quantity}
                      </td>
                      <td className="border border-gray-100 p-3">
                        {item.message}
                      </td>

                      <td className="border border-gray-100 p-3 capitalize">
                        {item.status}
                      </td>

                      <td className="border border-gray-100 p-3 space-x-2 font-semibold flex items-center justify-center">
                        <div>
                          <button
                            onClick={() => handleAccepted(index)}
                            disabled={item.status !== "pending"}
                            className={`btn text-white ${
                              item.status === "accepted"
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-green-500"
                            }`}
                          >
                            Accept
                          </button>
                        </div>

                        <div>
                          <button
                            onClick={() => handleRejected(index)}
                            disabled={item.status !== "pending"}
                            className={`btn text-white ${
                              item.status === "rejected"
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-red-500"
                            }`}
                          >
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="text-center border border-gray-100 p-4 text-gray-500"
                    >
                      No interest yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default CropDetails;
