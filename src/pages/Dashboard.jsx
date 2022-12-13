import React, { Component } from "react";
import "./dashboard.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";
import profile from "../images/download.jpg";
import delivery_man from "../images/asian-delivery-man-file-png.png";
import medecine1 from "../images/WellmanGummyResized.png";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="sidebar p-5">
          <p>Pharmacy</p>
          <div className="links">
            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <FontAwesomeIcon icon={faHome} />
              <a href="/dashboard">Dashboard</a>
            </li>
            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <FontAwesomeIcon icon={faMoneyCheck} />
              <a href="/transactions">Transactions</a>
            </li>
            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <FontAwesomeIcon icon={faNotesMedical} />
              <a href="/records">Records</a>
            </li>
            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <FontAwesomeIcon icon={faUserCircle} />
              <a href="/profile">Profile</a>
            </li>
            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <FontAwesomeIcon icon={faGear} />
              <a href="/settings">Settings</a>
            </li>
          </div>
        </div>
        <div className="content">
          <div className="dashboard-header py-3">
            <img src={profile} alt="profile picture" />
          </div>
          <div className="dashboard-content p-5">
            <h1>Hello Admin,</h1>
            <p>How are you today?</p>
            <div className="dash-main-content d-flex flex-row justify-content-between">
              <div className="dash-img-part p-4">
                <div className="dash-intro d-flex flex-row justify-content-between">
                  <div className="w-100 p-3">
                    <h2 className="fw-bold">We Will Deiver Your Medecine</h2>
                    <div className="mt-4">
                      <a
                        className="p-2 mt-2 px-4 bg-primary text-white"
                        href="/order"
                      >
                        Place Order
                      </a>
                    </div>
                  </div>
                  <div className=" py-3 position-relative flex-shrink-1 ">
                    <img
                      className="position-relative delivery_man"
                      src={delivery_man}
                      alt="deliver"
                    />
                  </div>
                </div>

                <div className="py-3 d-flex flex-row justify-content-between">
                  <h3>Top Products</h3> <span> View all</span>
                </div>

                <div className="top-products">
                  <div className="product">
                    <div className="p-3 d-flex flex-row justify-content-between">
                      <div className="image">
                        <img src={medecine1} alt="medecine" />
                      </div>
                      <div className="heart">
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                    </div>
                    <div className="px-3 py-2 text-white prod-desc">
                      <h6>Vitabioticics Wellman</h6>
                      <div className="d-flex">
                        <span className="w-100 ">$21</span>
                        <span className="badge flex-shrink-1">
                          <button className="">+</button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="product">
                    <div className="p-3 d-flex flex-row justify-content-between">
                      <div className="image">
                        <img src={medecine1} alt="medecine" />
                      </div>
                      <div className="heart">
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                    </div>
                    <div className="px-3 py-2 text-white prod-desc">
                      <h6>Vitabioticics Wellman</h6>
                      <div className="d-flex">
                        <span className="w-100 ">$21</span>
                        <span className="badge flex-shrink-1">
                          <button className="">+</button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className=""></div> */}
              <div className="dash-content-part">
                <div className="choose shadow p-3 mb-4 w-100 d-flex flex-row justify-content-between">
                  <div className="iconn">
                    <FontAwesomeIcon icon={faMoneyBill1Wave} />
                  </div>
                  <div className="px-4">
                    <h5>Withdraw</h5>
                    <p>
                      Send funds directly to your <br /> bank account
                    </p>
                  </div>
                  <a href="pay" className="px-3 bg-primary text-white pt-4">
                    >
                  </a>
                </div>
                <div className="choose shadow p-3 mb-4 w-100 d-flex flex-row justify-content-between">
                  <div className="iconn">
                    <FontAwesomeIcon icon={faMoneyBill1Wave} />
                  </div>
                  <div className="px-4">
                    <h5>Deposit</h5>
                    <p>
                      Send funds directly to your <br /> e-pharmacy account
                    </p>
                  </div>
                  <a href="pay" className="px-3 bg-primary text-white pt-4">
                    >
                  </a>
                </div>

                <div>
                  <div className="py-3 d-flex flex-row justify-content-between">
                    <h5>Recent Activities</h5> <span> View all</span>
                  </div>
                  <table className="table table-hover">
                    <tr>
                      <td>1</td>
                      <td>
                        <span>Jean Doe bought Vitamins</span>
                        <br />
                        <span className="text-muted">
                          Mon 2022 18:20:10 GMT
                        </span>
                      </td>
                      <td>$300</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <span>Jean Doe bought Vitamins</span>
                        <br />
                        <span className="text-muted">
                          Mon 2022 18:20:10 GMT
                        </span>
                      </td>
                      <td>$300</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <span>Jean Doe bought Vitamins</span>
                        <br />
                        <span className="text-muted">
                          Mon 2022 18:20:10 GMT
                        </span>
                      </td>
                      <td>$300</td>
                    </tr>
                  </table>
                </div>
                {/* THis is the other sidw */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
