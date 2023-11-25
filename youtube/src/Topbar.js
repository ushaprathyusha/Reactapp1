import "./topbar.css";
import { RiSearch2Line } from "react-icons/ri";
import { BsPerson, BsChat, BsBell } from "react-icons/bs";
import image from'./1.jpeg'

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Lamasocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <RiSearch2Line className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <BsPerson />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <BsChat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <BsBell />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src={image} alt="" className="topbarImg" />
      </div>
    </div>
  );
}
