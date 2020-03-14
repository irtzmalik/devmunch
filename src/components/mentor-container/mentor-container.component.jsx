import React from 'react';

const MentorContainer = () => {

  
  return (
    <>
    <div className="project-item">
                <div className="left">
                    <div className="img">
                        <img src={require("../../style/img/user-main.png")} alt="" />
                    </div>
                    <div className="info">
                        <div className="stars">
                            <img src={require("../../style/img/star.png")} alt="" />
                            <img src={require("../../style/img/star.png")} alt="" />
                            <img src={require("../../style/img/star.png")} alt="" />
                            <img src={require("../../style/img/star.png")} alt="" />
                            <img src={require("../../style/img/star.png")} alt="" />
                            <div className="count">
                                2/5
                            </div>
                        </div>
                        <div className="mentors">
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0691 3.47328C12.9939 4.05309 13.6423 5.03424 13.7604 6.17314C14.1375 6.34936 14.5561 6.45069 14.9999 6.45069C16.62 6.45069 17.9331 5.13757 17.9331 3.51771C17.9331 1.89759 16.62 0.584473 14.9999 0.584473C13.3952 0.584972 12.0936 1.87463 12.0691 3.47328ZM10.1475 9.47902C11.7676 9.47902 13.0807 8.16565 13.0807 6.54579C13.0807 4.92592 11.7674 3.6128 10.1475 3.6128C8.52764 3.6128 7.21378 4.92617 7.21378 6.54604C7.21378 8.1659 8.52764 9.47902 10.1475 9.47902ZM11.3917 9.67894H8.90278C6.8319 9.67894 5.14714 11.364 5.14714 13.4348V16.4786L5.15487 16.5263L5.36453 16.592C7.34082 17.2095 9.05778 17.4154 10.471 17.4154C13.2312 17.4154 14.8312 16.6284 14.9297 16.5782L15.1257 16.4791H15.1466V13.4348C15.1474 11.364 13.4626 9.67894 11.3917 9.67894ZM16.2446 6.65087H13.7749C13.7482 7.63901 13.3263 8.52881 12.6592 9.16877C14.4999 9.71613 15.8468 11.4231 15.8468 13.4393V14.3773C18.2853 14.288 19.6905 13.5968 19.7831 13.5504L19.979 13.4511H20V10.4063C20 8.33563 18.3152 6.65087 16.2446 6.65087ZM5.00062 6.45119C5.57444 6.45119 6.10832 6.28371 6.56059 5.99843C6.70436 5.0607 7.20704 4.24128 7.92512 3.68319C7.92812 3.62828 7.93336 3.57387 7.93336 3.51846C7.93336 1.89834 6.61999 0.585221 5.00062 0.585221C3.38026 0.585221 2.06739 1.89834 2.06739 3.51846C2.06739 5.13782 3.38026 6.45119 5.00062 6.45119ZM7.63484 9.16877C6.97092 8.53206 6.55061 7.647 6.51991 6.66484C6.4283 6.6581 6.3377 6.65087 6.24435 6.65087H3.75565C1.68476 6.65087 0 8.33563 0 10.4063V13.4506L0.00773743 13.4975L0.217397 13.5636C1.80282 14.0586 3.21777 14.2867 4.44677 14.3586V13.4393C4.44727 11.4231 5.79359 9.71663 7.63484 9.16877Z" fill="#4687E8"/>
                            </svg>

                            <span className="count">7</span> mentors
                        </div>
                        <div className="comments">
                            <img src={require("../../style/img/idea.png")} alt="" />
                            <span className="count">5</span> years
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="title">
                        Jacob Smith
                    </div>
                    <div className="description">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...
                    </div>
                    <div className="tags">
                        <div className="tag-item">
                            <span className="close">x</span>
                            <span className="name">php</span>
                        </div>
                        <div className="tag-item">
                            <span className="close">x</span>
                            <span className="name">html</span>
                        </div>
                        <div className="tag-item">
                            <span className="close">x</span>
                            <span className="name">css</span>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <button>Contact</button>
                    <a href="">View details</a>
                </div>
            </div>
    </>
  )
}

export default MentorContainer