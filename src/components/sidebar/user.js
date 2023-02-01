import React, { memo } from "react";
// import { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function User({ username, fullName, test }) {
  return !username || !fullName ? (
    <Skeleton count={1} height={61} />
  ) : (
    <Link
      to={`/p/${username}`}
      className="grid grid-col-4 gap-4 mb-6 items-center"
    >
      {/* <p>{username}</p> */}
      <div className="flex items-center justify-between col-span-1">
        {test}
        <img
          className="rounded-full w-16 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
        />
      </div>

      <div className="col-span-3">
        <p className="font-bold text-sm">{username}</p>
        <p className=" text-sm">{fullName}</p>
      </div>
    </Link>
  );
}
//User.whyDidYouRender = true;

// export default memo(User);

User.propTypes = {
  username: PropTypes.string,
  fullName: PropTypes.string,
  test: PropTypes.number,
};
