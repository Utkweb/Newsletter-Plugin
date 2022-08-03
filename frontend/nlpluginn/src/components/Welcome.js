import React from "react";
import "./Welcome.css";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <section>
        <div class="row first ">
          <div class="col-sm-6 mt-4">
            <div class="card">
              <div class="card-body">
                <h1 class="card-title">Newsletter Plugin</h1>
                <p class="card-text">
                  Newsletter is the most advanced email marketing plugin for
                  WordPress: it manages everything
                  <br />
                  from user subscriptions to email automations, from follow up
                  notifications to list building.
                  <br />
                  You can add even more powerful features through our premium
                  addons.
                </p>
                <a href="#" class="btn btn-primary">
                  Get started
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mt-4">
            <div class="card w-75">
              <div class="card-body">
                <img
                  src="https://s3.xopic.de/openwho-public/pages/monthly_newsletter/1xrYarIMbqTz4F0NHx65ud/May_newsletter_thumb.PNG"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container divider"></div>
      <section className="second">
        <div class="items">
          <div class="sub-box">
            <div class="sub-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7karcfpy50MKarae-lMDx1nHnvKcc0937YXXmG4GAUCPb7lH0jDZPttrwTxB34qs7N28&usqp=CAU" />
            </div>
            <h3>No Limitations</h3>
            <p>
              Feel free to send how many newsletters you like, to how many
              recipients you want. We will never ever limit your traffic: server
              is yours, yours is the choice.
            </p>
          </div>
          <div class="sub-box">
            <div class="sub-img">
              <img src="https://cdn.iconscout.com/icon/premium/png-128-thumb/baby-face-14-892536.png" />
            </div>
            <h3>Powerful Tracking</h3>
            <p>
              Take control of your newsletters with a complete set of statistics
              data. Mail opens, total sent, we’ve got you covered.
            </p>
          </div>
          <div class="sub-box">
            <div class="sub-img">
              <img src="https://spotzee.com/bulk-smtp-servers/unlimited-everything.png" />
            </div>
            <h3>SMTP Support</h3>
            <p>
              If you already use an external Smtp service provider, you can add
              it effortlessly to Newsletter: never run out of bandwidth again!
            </p>
          </div>
          <div class="sub-box">
            <div class="sub-img">
              <img src="https://i0.wp.com/www.endpoint-cybersecurity.com/wp-content/uploads/2019/10/018-test.png?fit=256%2C256&ssl=1" />
            </div>
            <h3>Fully Documented</h3>
            <p>
              Should there be any doubts during Newsletter use, you can always
              take a look at the online documentation, directly from this
              website.
            </p>
          </div>
          <div class="sub-box">
            <div class="sub-img">
              <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/rmfv3gi824nyhibdmg0e" />
            </div>
            <h3>Visual Composer</h3>
            <p>
              Our newsletters composer gives an intuitive and simple way to
              create sleek layouts, using handy content blocks. You’re gonna
              love it!
            </p>
          </div>
          <div class="sub-box">
            <div class="sub-img">
              <img src="https://cdn-icons-png.flaticon.com/128/2275/2275151.png" />
            </div>
            <h3>5 Stars Rated and 3M+ downloads</h3>
            <p>
              Newsletter is one of the most appreciated plugins out there and we
              are far too proud to just not tell it.
            </p>
          </div>
        </div>
      </section>
      <div className="container divider"></div>
      <section className="third">
        <div className="container">
          <div className="col-5">
            <p>
              Copyright 2022 NewsLetter-Plugin Utkarsh Singh VAT IT-03809490240
            </p>
          </div>
          <div className="social">
            <a href="facebook.com/profile.php?id=100014558592979">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/in/utkarsh-singh-077aab1aa/">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-discord"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
