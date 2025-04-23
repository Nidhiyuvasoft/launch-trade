"use client"
import React, { useEffect } from 'react'
import AOS from "aos";

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
    <main className="page_content">
 
  <section className="page_header text-center">
    <div className="container">
      <center>
        <h1 className="hero_title" data-aos="fade-up" data-aos-duration={800}>
          My Tokens
        </h1>
      </center>
      <ol className="breadcrumb justify-content-center">
        <li className="breadcrumb-item">
          <a href="index.html">Launchtrade</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          My Tokens
        </li>
      </ol>
    </div>
  </section>
 
  <section className="blog_section section_space pt-0 pb-0">
    <div className="container">
      <div className="row justify-content-lg-between">
        <div className="col-lg-4">
          <div className="blog_post_left_image">
            <div className="my-token-info p-5">
              <h2>Token Preview</h2>
              <span className="token-img">
                <img src="assets/images/blog-2.jpg" alt="Post Image" />
              </span>
              <h3>Token Name</h3>
              <div className="token-details">
                <div className="d-flex justify-content-between align-items-center token-info">
                  <span>Token Mint Address</span>
                  <span>efsf</span>
                </div>
                <div className="d-flex justify-content-between align-items-center token-info">
                  <span>Supply</span>
                  <span>1000000</span>
                </div>
                <div className="divider-line" />
                <div className="d-flex justify-content-between align-items-center token-info">
                  <span>Network</span>
                  <span>efsf</span>
                </div>
                <div className="d-flex justify-content-between align-items-center token-info">
                  <span>Network Fees</span>
                  <span>efsf</span>
                </div>
              </div>
              <button className="btn w-100 justify-content-center mt-3">
                Create Token
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog_post_left_image">
            <div className="my-token-info p-5">
              <h2>Token Preview</h2>
              <span className="token-img">
                <img src="assets/images/blog-2.jpg" alt="Post Image" />
              </span>
              <h3>Token Name</h3>
              <div className="token-details">
                <div className="d-flex justify-content-between align-items-center token-info">
                  <span>Token Mint Address</span>
                  <span>efsf</span>
                </div>
                <div className="d-flex justify-content-between align-items-center token-info">
                  <span>Supply</span>
                  <span>1000000</span>
                </div>
                <div className="divider-line" />
                <div className="d-flex justify-content-between align-items-center token-info">
                  <span>Network</span>
                  <span>efsf</span>
                </div>
                <div className="d-flex justify-content-between align-items-center token-info">
                  <span>Network Fees</span>
                  <span>efsf</span>
                </div>
              </div>
              <button className="btn w-100 justify-content-center mt-3">
                Create Token
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog_post_left_image">
            <div className="my-token-info p-5">
              <h2>Token Preview</h2>
              <span className="token-img">
                <img src="assets/images/blog-2.jpg" alt="Post Image" />
              </span>
              <h3>Token Name</h3>
              <div className="token-details">
                <div className="d-flex justify-content-between align-items-center token-info">
                  <span>Token Mint Address</span>
                  <span>efsf</span>
                </div>
                <div className="d-flex justify-content-between align-items-center token-info">
                  <span>Supply</span>
                  <span>1000000</span>
                </div>
                <div className="divider-line" />
                <div className="d-flex justify-content-between align-items-center token-info">
                  <span>Network</span>
                  <span>efsf</span>
                </div>
                <div className="d-flex justify-content-between align-items-center token-info">
                  <span>Network Fees</span>
                  <span>efsf</span>
                </div>
              </div>
              <button className="btn w-100 justify-content-center mt-3">
                Create Token
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
</main>

    </>
  )
}

export default page