import React from 'react'

const page = () => {
  return (
    <>
    <main className="page_content">
 
  <section className="page_header text-center">
    <div className="container">
      <center>
        <h1 className="hero_title" data-aos="fade-up" data-aos-duration={800}>
          Popular Blog
        </h1>
      </center>
      <ol className="breadcrumb justify-content-center">
        <li className="breadcrumb-item">
          <a href="index.html">Launchtrade</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Our Blogs
        </li>
      </ol>
    </div>
  </section>
  
  <section className="blog_section section_space pt-0 pb-0">
    <div className="container">
      <div className="row justify-content-lg-between">
        <div className="col-lg-4">
          <div className="blog_post_left_image">
            <a className="post_image" href="blog_details.html">
              <img src="assets/images/blog-1.jpg" alt="Post Image" />
            </a>
            <div className="post_info">
              <div className="d-flex justify-content-between mb-4">
                <span className="blog_post_category" href="#!">
                  2025-03-10
                </span>
                <a className="blog_post_category" href="#!">
                  #Memestoken
                </a>
              </div>
              <h3 className="blog_post_title">
                <a href="blog_details.html">
                  What Makes ICOs a Game-Changer for Bitcoin and Crypto
                  Investors?..
                </a>
              </h3>
              <p className="blog_post_description">
                Our ICO pioneers blockchain innovation, shaping the future.
              </p>
              <a className="btn btn-small" href="blog_details.html">
                <span className="btn_label">Read More</span>
                <span className="btn_icon">
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog_post_left_image">
            <a className="post_image" href="blog_details.html">
              <img src="assets/images/blog-2.jpg" alt="Post Image" />
            </a>
            <div className="post_info">
              <div className="d-flex justify-content-between mb-4">
                <span className="blog_post_category" href="#!">
                  2025-03-10
                </span>
                <a className="blog_post_category" href="#!">
                  #Memestoken
                </a>
              </div>
              <h3 className="blog_post_title">
                <a href="blog_details.html">
                  Behind the Scenes of Our ICO Insights into Project..
                </a>
              </h3>
              <p className="blog_post_description">
                Our ICO focuses on strategic planning, partnerships.
              </p>
              <a className="btn btn-small" href="blog_details.html">
                <span className="btn_label">Read More</span>
                <span className="btn_icon">
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="blog_post_left_image">
            <a className="post_image" href="blog_details.html">
              <img src="assets/images/blog-3.jpg" alt="Post Image" />
            </a>
            <div className="post_info">
              <div className="d-flex justify-content-between mb-4">
                <span className="blog_post_category" href="#!">
                  2025-03-10
                </span>
                <a className="blog_post_category" href="#!">
                  #Memestoken
                </a>
              </div>
              <h3 className="blog_post_title">
                <a href="blog_details.html">
                  How We Ensure Security and Protect Your Investment in Our
                  ICO..
                </a>
              </h3>
              <p className="blog_post_description">
                We ensure security with blockchain, encryption, and audits.
              </p>
              <a className="btn btn-small" href="blog_details.html">
                <span className="btn_label">Read More</span>
                <span className="btn_icon">
                  <i className="fa-solid fa-arrow-up-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 x
</main>

    </>
  )
}

export default page