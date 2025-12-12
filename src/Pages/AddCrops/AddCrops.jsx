import React, { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const AddCrops = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      type: e.target.type.value,
      pricePerUnit: e.target.price.value,
      unit: e.target.unit.value,
      quantity: e.target.quantity.value,
      description: e.target.description.value,
      location: e.target.location.value,
      image: e.target.image.value,
      created_at: new Date(),
      owner: {
        ownerEmail: user.email,
        ownerName: user.displayName,
      },
    };

    fetch("https://krishi-link10-server.vercel.app/crops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((d) => {
        toast.success("Successfully added!");
        navigate("/myPosts");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl my-20">
      <div className="card-body p-6 relative ">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Crop</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>

          {/* Type Dropdown */}
          <div>
            <label className="label font-medium">Type</label>
            <select
              defaultValue={""}
              name="type"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="Vegetable">Vegetable</option>
              <option value="Grain">Grain</option>
              <option value="Fruit">Fruits</option>
              <option value="Pulse">Pulse</option>
              <option value="Spice">Spice</option>
            </select>
          </div>

          {/* Price Field */}
          <div>
            <label className="label font-medium">Price</label>
            <input
              type="text"
              name="price"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Price Per Unit"
            />
          </div>

          {/* Unit Dropdown */}
          <div>
            <label className="label font-medium">Unit</label>
            <select
              defaultValue={""}
              name="unit"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select Unit
              </option>
              <option value="Kg">Kg</option>
              <option value="Ton">Ton</option>
              <option value="Bag">Bag</option>
              <option value="Piece">Piece</option>
            </select>
          </div>

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

          {/* Description Textarea */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Location Field */}
          <div>
            <label className="label font-medium">Location</label>
            <input
              type="text"
              name="location"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter location"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="label font-medium">Image URL</label>
            <input
              type="url"
              name="image"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-yellow-800 hover:bg-yellow-700"
          >
            Add Crop
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddCrops;
