import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import chargeLogo from "../assest/charge.svg";
import photos from "../assest/google.svg";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import mobileIcon from "../assest/mobile-icon.jpeg"
import PerfectScrollbar from 'react-perfect-scrollbar'
const MobileNumber = ({isVerified, setIsVerified}) => {
  const [state, setState] = useState(false);
  const [mobileNo, setMobileNo] = useState("")
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    maxWidth: "340px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  const styleChild = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    maxWidth: "290px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: '15px 15px 0 0',
    height: "28.9rem",
    marginTop: "1.98rem"
  };

  const data = [
    {
      "id": 441,
      "name": "Afghanistan",
      "short_code": "AF",
      "long_code": "AFG",
      "dial_code": "93",
      "flag_code": "&#127462;&#127464;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.164250Z",
      "updated_at": "2023-11-23T11:29:49.164284Z"
    },
    {
      "id": 442,
      "name": "Albania",
      "short_code": "AL",
      "long_code": "ALB",
      "dial_code": "355",
      "flag_code": "&#127462;&#127466;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.173860Z",
      "updated_at": "2023-11-23T11:29:49.173886Z"
    },
    {
      "id": 443,
      "name": "Algeria",
      "short_code": "DZ",
      "long_code": "DZA",
      "dial_code": "213",
      "flag_code": "&#127462;&#127488;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.180901Z",
      "updated_at": "2023-11-23T11:29:49.180931Z"
    },
    {
      "id": 444,
      "name": "Andorra",
      "short_code": "AD",
      "long_code": "AND",
      "dial_code": "376",
      "flag_code": "&#127462;&#127462;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.195019Z",
      "updated_at": "2023-11-23T11:29:49.195054Z"
    },
    {
      "id": 445,
      "name": "Angola",
      "short_code": "AO",
      "long_code": "AGO",
      "dial_code": "244",
      "flag_code": "&#127462;&#127474;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.199945Z",
      "updated_at": "2023-11-23T11:29:49.199962Z"
    },
    {
      "id": 446,
      "name": "Argentina",
      "short_code": "AR",
      "long_code": "ARG",
      "dial_code": "54",
      "flag_code": "&#127462;&#127480;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.213317Z",
      "updated_at": "2023-11-23T11:29:49.213354Z"
    },
    {
      "id": 447,
      "name": "Armenia",
      "short_code": "AM",
      "long_code": "ARM",
      "dial_code": "374",
      "flag_code": "&#127462;&#127474;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.218333Z",
      "updated_at": "2023-11-23T11:29:49.218355Z"
    },
    {
      "id": 448,
      "name": "Australia",
      "short_code": "AU",
      "long_code": "AUS",
      "dial_code": "61",
      "flag_code": "&#127481;&#127468;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.226556Z",
      "updated_at": "2023-11-23T11:29:49.226576Z"
    },
    {
      "id": 449,
      "name": "Austria",
      "short_code": "AT",
      "long_code": "AUT",
      "dial_code": "43",
      "flag_code": "&#127462;&#127480;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.230157Z",
      "updated_at": "2023-11-23T11:29:49.230167Z"
    },
    {
      "id": 450,
      "name": "Azerbaijan",
      "short_code": "AZ",
      "long_code": "AZE",
      "dial_code": "994",
      "flag_code": "&#127462;&#127468;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.233250Z",
      "updated_at": "2023-11-23T11:29:49.233259Z"
    },
    {
      "id": 451,
      "name": "Bahamas",
      "short_code": "BS",
      "long_code": "BHS",
      "dial_code": "1-242",
      "flag_code": "&#127462;&#127472;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.236175Z",
      "updated_at": "2023-11-23T11:29:49.236191Z"
    },
    {
      "id": 452,
      "name": "Bahrain",
      "short_code": "BH",
      "long_code": "BHR",
      "dial_code": "973",
      "flag_code": "&#127462;&#127480;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.239213Z",
      "updated_at": "2023-11-23T11:29:49.239222Z"
    },
    {
      "id": 453,
      "name": "Bangladesh",
      "short_code": "BD",
      "long_code": "BGD",
      "dial_code": "880",
      "flag_code": "&#127462;&#127473;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.243875Z",
      "updated_at": "2023-11-23T11:29:49.243885Z"
    },
    {
      "id": 454,
      "name": "Barbados",
      "short_code": "BB",
      "long_code": "BRB",
      "dial_code": "1-246",
      "flag_code": "&#127462;&#127464;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.246835Z",
      "updated_at": "2023-11-23T11:29:49.246844Z"
    },
    {
      "id": 455,
      "name": "Belarus",
      "short_code": "BY",
      "long_code": "BLR",
      "dial_code": "375",
      "flag_code": "&#127462;&#127487;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.249777Z",
      "updated_at": "2023-11-23T11:29:49.249786Z"
    },
    {
      "id": 456,
      "name": "Belgium",
      "short_code": "BE",
      "long_code": "BEL",
      "dial_code": "32",
      "flag_code": "&#127462;&#127464;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.252528Z",
      "updated_at": "2023-11-23T11:29:49.252535Z"
    },
    {
      "id": 457,
      "name": "Belize",
      "short_code": "BZ",
      "long_code": "BLZ",
      "dial_code": "501",
      "flag_code": "&#127462;&#127479;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.255406Z",
      "updated_at": "2023-11-23T11:29:49.255414Z"
    },
    {
      "id": 458,
      "name": "Benin",
      "short_code": "BJ",
      "long_code": "BEN",
      "dial_code": "229",
      "flag_code": "&#127462;&#127466;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.258408Z",
      "updated_at": "2023-11-23T11:29:49.258416Z"
    },
    {
      "id": 459,
      "name": "Bhutan",
      "short_code": "BT",
      "long_code": "BTN",
      "dial_code": "975",
      "flag_code": "&#127462;&#127475;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.264535Z",
      "updated_at": "2023-11-23T11:29:49.264546Z"
    },
    {
      "id": 460,
      "name": "Bolivia",
      "short_code": "BO",
      "long_code": "BOL",
      "dial_code": "591",
      "flag_code": "&#127462;&#127474;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.268280Z",
      "updated_at": "2023-11-23T11:29:49.268288Z"
    },
    {
      "id": 461,
      "name": "Bosnia and Herzegovina",
      "short_code": "BA",
      "long_code": "BIH",
      "dial_code": "387",
      "flag_code": "&#127462;&#127462;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.271955Z",
      "updated_at": "2023-11-23T11:29:49.271963Z"
    },
    {
      "id": 462,
      "name": "Botswana",
      "short_code": "BW",
      "long_code": "BWA",
      "dial_code": "267",
      "flag_code": "&#127462;&#127486;",
      "extra": {},
      "is_deleted": false,
      "created_at": "2023-11-23T11:29:49.275174Z",
      "updated_at": "2023-11-23T11:29:49.275181Z"
    }];

  return (
    <div>
      <Modal open={true} className="modal-background">
        <Box sx={style}>
          <div className="enter-mobile-text">
            <p>Enter your mobile number</p>
            <img style={{ height: "20px", padding: "6px" }} src={mobileIcon} />
          </div>

          {state && (
            <Modal open={true} className="modal-background">
              <Box sx={styleChild}>
                <div className="close-button">
                  <div> Country Code</div>
                  <div onClick={(e) => setState(false)} aria-hidden="true"><CloseIcon /></div>
                </div>
                <div className="search-input">
                  <div className="search-icon-setting"><SearchIcon /></div>
                  <input type="text" />
                </div>

                <div className="country-container">
                  <PerfectScrollbar>
                    <div className="country-list">
                      {data.map((country) => (
                        <div key={country.id} className="country-card">
                          <div className="left-side">
                            <p><span dangerouslySetInnerHTML={{ __html: country.flag_code }} /></p>
                            <p className="country-name">{country.name}</p>
                          </div>
                          <div className="right-side">
                            <p className="country-dial-code">{country.dial_code}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </PerfectScrollbar>
                </div>
              </Box>
            </Modal>
          )}
          <div className="confirm-mobile-text">
            Please confirm your country code and enter your
            mobile number
          </div>

          <div className="mobile-container">
            <div className="country-input" onClick={() => setState(true)}>
              <input type="text"></input>
            </div>
            <div className="mobile-input">
              <input type="number" placeholder="Mobile Number" onChange={(e) => {
                setMobileNo(e.target.value)
              }}></input>
            </div>
          </div>
          {mobileNo.length !== 10 && (
          <div className="continue-button-container">
            <button className="button-continue-style">
              <span>Continue</span>
            </button>
          </div>
           )}
          {mobileNo.length === 10 && (
            <div className="continue-button-container">
              <button onClick={(e) => setIsVerified(true)} className="button-continue-style-on">
                <span>Continue</span>
              </button>
            </div>
          )}



          <div class="or-container">
            <h5>OR</h5>
            <div class="line"></div>
          </div>

          <div className="continue-google-container">
            <button>
              <div style={{ width: "8%", marginRight: "7px" }}>
                <img src={photos} />
              </div>
              <div>Continue with Google</div>
            </button>
          </div>

          <div className="container-logo-terms">
            <div>
              <div className="terms-condition">
                By proceeding you agree to our <span>Terms & conditions</span>
                <br />
                and Privacy Policy
              </div>
            </div>

            <div className="terra-logo-container">
              <div className="terra-logo">
                TERRA C
                <span>
                  <img src={chargeLogo} />
                </span>
                ARGE
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default MobileNumber;
