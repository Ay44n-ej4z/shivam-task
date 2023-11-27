import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import chargeLogo from "../assest/charge.svg";
import photos from "../assest/google.svg";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import mobileIcon from "../assest/mobile-icon.jpeg"
import PerfectScrollbar from 'react-perfect-scrollbar'
import mobileVerifaction from "../assest/mobile-verification.jpeg"
import { ChevronLeft } from "@mui/icons-material";


const MobileVerification = () => {
    const [state, setState] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '', '', '']); // Array to store OTP values

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };
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



    return (
        <div>
            <Modal open={true} className="modal-background">

                <Box sx={style}>
                    <div className="enter-mobile-text">
                        <p>Mobile Verification</p>
                        <img style={{ height: "20px", padding: "6px" }} src={mobileVerifaction} />
                    </div>


                    <div className="confirm-mobile-text">
                        Enter 6 digit code we've sent to 8912937283
                        for verification
                    </div>


                    <div className="otp-container">
                        {otp.map((otpValue, index) => (
                            <input
                                key={index}
                                type="number"
                                className="otp-input"
                                maxLength={1}
                                value={otpValue}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                            />
                        ))}
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
                            <button className="button-continue-style-on">
                                <span>Continue</span>
                            </button>
                        </div>
                    )}


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
    )
}

export default MobileVerification