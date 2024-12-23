import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div className="w-full text-3xl text-black bg-blue-500 text-center py-5">
      User - {id}
    </div>
  );
}

export default User;
