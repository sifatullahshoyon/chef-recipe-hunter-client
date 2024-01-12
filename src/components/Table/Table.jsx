import React from "react";

const Table = ({ recipe }) => {
  const { recipeName, description, likes } = recipe;
  let index = 0;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table rounded">
          {/* head */}
          <thead className="bg-slate-100 text-black text-xl text-center ">
            <tr>
              <th>Serial Number</th>
              <th>Recipe Name</th>
              <th>Description</th>
              <th>likes</th>
            </tr>
          </thead>
          <tbody className="text-center text-black text-lg">
            {/* row 1 */}
            <tr>
              <th>{index + 1}</th>
              <td>{recipeName ? recipeName : "Data Not Found"}</td>
              <td>{description ? description : "Data Not Found"}</td>
              <td>{likes ? likes : "Data Not Found"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
